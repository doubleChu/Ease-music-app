import * as React from "react"
import { RcmHeaderLeft, RcmHeaderRight, RcmHeaderWrapper } from "./style"

export default function RecommendHeader(props) {
  const { title, keywords } = props
  let headerHref = ""
  if (title === "热门推荐") headerHref = "/discover/playlist/"
  else if (title === "新碟上架") headerHref = "/discover/album/"
  else if (title === "新碟上架") headerHref = "/discover/toplist"
  return (
    <RcmHeaderWrapper>
      <RcmHeaderLeft>
        <h2 className="popular-title">
          <a href={headerHref}>{title}</a>
        </h2>
        <ul className="keywords">
          {keywords.map((item) => {
            return (
              <li className="item" key={item}>
                {/* 热门推荐分类href：*/}
                <a href={"/discover/playlist/?cat=" + item}>{item}</a>
                <span className="line">|</span>
              </li>
            )
          })}
        </ul>
      </RcmHeaderLeft>
      <RcmHeaderRight>
        <a href={headerHref}>更多</a>
        <i className="icon" />
      </RcmHeaderRight>
    </RcmHeaderWrapper>
  )
}
