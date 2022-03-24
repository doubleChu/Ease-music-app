import * as React from "react"
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style"
import { Link, NavLink } from "react-router-dom"

export default function Header() {

  const CustomNavLink = ({ children, to, ...props }) => {
    return (
        <NavLink
          key={children}
          to={to}
          {...props}
          className={({ isActive }) => "header-item" + (isActive ? " link-active" : "")}
        >
          {children}
          <i className="icon"></i>
        </NavLink>
    );
  }
  return (
    // <div>
    //   <ul>
    //     <LinkWrapper to="/find">发现音乐</LinkWrapper>
    //     <LinkWrapper to="/mine">我的音乐</LinkWrapper>
    //     <LinkWrapper to="/friends">我的朋友</LinkWrapper>
    //   </ul>
    //   {element}
    // </div>
    <HeaderWrapper>
      <div className="content w1100">
        <HeaderLeft>
          <Link to="/" className="logo sprite_01">
            网易云音乐
          </Link>
          <div className="header-group">
          <CustomNavLink to='/'>
            发现音乐
          </CustomNavLink> 
          <CustomNavLink to='my'>
            我的音乐
          </CustomNavLink>
          <CustomNavLink to='friend'>
            关注
          </CustomNavLink>
          <a href="https://music.163.com/store/product" target="_blank" rel="noreferrer"
          className="header-item" key="商城">
            商城
          </a>
          <a href="https://music.163.com/nmusician/web/index#/" target="_blank" rel="noreferrer"
          className="header-item" key="音乐人">
            音乐人
          </a>
          <a href="https://music.163.com/#/download" target="_blank" rel="noreferrer"
          className="header-item" key="下载客户端">
            下载客户端
          </a>
          <i className="icon"></i>
          </div>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </div>
      <div className="red-line"></div>
    </HeaderWrapper>
  )
}
