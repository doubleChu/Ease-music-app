import * as React from 'react'
import { RcmHeaderLeft, RcmHeaderRight, RcmHeaderWrapper } from './style'

export default function RecommendHeader (props) {
  const { title, keywords } = props
  return (
    <RcmHeaderWrapper>
      <RcmHeaderLeft>
        <h2 className="popular-title">
          <a href="/discover/playlist/">
            {title}
          </a>
        </h2>
        <ul className="keywords">
          {keywords.map(item => {
            return (
              <li className="item" key={item}>
                <a href={"/discover/playlist/?cat=" + item}>{item}</a>
                <span className="line">|</span>
              </li>
            )
          })}
        </ul>
      </RcmHeaderLeft>
      <RcmHeaderRight>
        <a href='/discover/playlist/'>更多</a>
        <i className="icon"/>
      </RcmHeaderRight>
    </RcmHeaderWrapper>
  )
}


