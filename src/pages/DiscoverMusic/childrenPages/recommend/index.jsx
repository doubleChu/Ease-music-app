import * as React from "react";
import { Fragment } from "react";
import {
    Content,
    RecommendLeft,
    RecommendRight,
  } from './style'

export default function Recommend() {
  return (
    <Fragment>
      <Content className="w980">
        {/* 主体推荐页左侧 */}
        <RecommendLeft>
        </RecommendLeft>
        {/* 主体推荐页右侧 */}
        <RecommendRight>
        </RecommendRight>
      </Content>
    </Fragment>
  );
}
