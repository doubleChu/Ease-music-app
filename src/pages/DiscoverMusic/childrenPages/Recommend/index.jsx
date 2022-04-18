import * as React from "react";
import { Fragment } from "react";
import {Content, RecommendLeft, RecommendRight} from './style'
import Banners from "./childrenCompo/Banners";
import PopularRecommend from "./childrenCompo/PopularRecom";
import NewestAlbum from "./childrenCompo/NewestAlbum";
import UserLogin from "./childrenCompo/UserLogin";
import SettledSinger from "./childrenCompo/SettledSinger";
import PopularDj from "./childrenCompo/PopularDj";
import TopList_3 from "./childrenCompo/TopList_3";

export default function Recommend() {
  return (
    <Fragment>
      <Banners/>
      <Content className="w980">
        {/* 主体推荐页左侧 */}
        <RecommendLeft>
          <PopularRecommend/>
          <NewestAlbum/>
          {/* eslint-disable-next-line */}
          <TopList_3/>
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
