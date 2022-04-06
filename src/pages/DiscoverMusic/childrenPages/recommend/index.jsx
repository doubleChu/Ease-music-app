import * as React from "react";
import { Fragment } from "react";
import {Content, RecommendLeft, RecommendRight} from './style'
import Banners from "./childrenCompo/Banners";
import PopularRecommend from "./childrenCompo/PopularRecom";

export default function Recommend() {
  return (
    <Fragment>
      <Banners/>
      <Content className="w980">
        {/* 主体推荐页左侧 */}
        <RecommendLeft>
          <PopularRecommend/>
        </RecommendLeft>
        {/* 主体推荐页右侧 */}
        <RecommendRight>
        </RecommendRight>
      </Content>
    </Fragment>
  );
}
