import * as React from "react";
import { LinkWrapper , HeaderLeft, HeaderRight, HeaderWrapper} from "./style";
import { useRoutes} from "react-router-dom";
import { router } from "../../router";

export default function Header() {
  const element = useRoutes(router);
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
        <h1>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
        </h1>
      </HeaderLeft>
      <HeaderRight>
      </HeaderRight>
    </div>
    <div className="red-line"></div>
  </HeaderWrapper>
  );
}
