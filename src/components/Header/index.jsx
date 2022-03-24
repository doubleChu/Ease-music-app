import * as React from "react"
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style"
import { useRoutes, Link, NavLink } from "react-router-dom"
import { router } from "../../router"

export default function Header() {
  const showIconLink = (item, index) => {
    return (
      <NavLink
        key = {item.path} to = {item.path}
        className="header-item" activeClassName="link-active">
        {/* <em>{item.title}</em> */}
        <i className="icon"></i>
      </NavLink>
    )
  }
  const element = useRoutes(router)
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
            {router.map((item, index) => {return showIconLink(item,index);})}
          </div>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </div>
      <div className="red-line"></div>
    </HeaderWrapper>
  )
}
