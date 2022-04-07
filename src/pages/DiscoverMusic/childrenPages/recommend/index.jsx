import * as React from "react";
import { Fragment } from "react";
import {Content, RecommendLeft, RecommendRight} from './style'
import Banners from "./childrenCompo/Banners";
import PopularRecommend from "./childrenCompo/PopularRecom";
import NewestAlbum from "./childrenCompo/NewestAlbum";
import UserLogin from "./childrenCompo/UserLogin";
import SettledSinger from "./childrenCompo/SettleSinger";
import PopularDj from "./childrenCompo/PopularDj";

export default function Recommend() {
  return (
    <Fragment>
      <Banners/>
      <Content className="w980">
        {/* 主体推荐页左侧 */}
        <RecommendLeft>
          <PopularRecommend/>
          <NewestAlbum/>
        </RecommendLeft>
        {/* 主体推荐页右侧 */}
        <RecommendRight>
          <UserLogin/>
          <SettledSinger/>
          <PopularDj/>
        </RecommendRight>
      </Content>
    </Fragment>
  );
}
