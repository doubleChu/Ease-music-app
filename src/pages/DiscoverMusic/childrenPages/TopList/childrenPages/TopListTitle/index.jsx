import * as React from 'react'
import {useSelector, shallowEqual} from 'react-redux'
import {setImageSize, formatMonthDay} from '../../../../../../utils/format.js'
import { ToplistTitleWrapper } from './style.js'
import { ClockCircleOutlined } from '@ant-design/icons'
export default function TopListTitle() {

    
  // redux hook
  const {titleInfo} = useSelector((state) => ({
    titleInfo: state.topListReducer.topListTitleInfo
  }), shallowEqual)

  // other handle 
  const picUrl = titleInfo && titleInfo.coverImgUrl
  const name = titleInfo && titleInfo.name
  const updateTime = titleInfo && titleInfo.trackNumberUpdateTime
  const commentCount = titleInfo && titleInfo.commentCount
  const shareCount = titleInfo && titleInfo.shareCount
  const subscribedCount = titleInfo && titleInfo.subscribedCount

  return (
    <ToplistTitleWrapper>
      <div className="title-image">
        <img src={setImageSize(picUrl, 150)} alt=""/>
          <div className="image_cover msk"></div>
      </div>
      <div className="title-info">
        <h2>{name}</h2>
        <div className="update-info">
          <ClockCircleOutlined className="timer" />最近更新: {formatMonthDay(updateTime)}
        </div>
        <div className="controls">
          <div className="sprite_button play">
            <i className="sprite_button inner">
              <em className="sprite_button play-icon"></em>
              播放
            </i>
          </div>
          <div className="sprite_button favorite">
            <i className="sprite_button inner">
              <em className="sprite_button favorite-icon"></em>
              ({subscribedCount})
            </i>
          </div>
          <div className="sprite_button share">
            <i className="sprite_button inner">
              <em className="sprite_button favorite-icon"></em>
              ({shareCount})
            </i>
          </div>
          <div className="sprite_button download">
            <i className="sprite_button inner">
              <em className="sprite_button favorite-icon"></em>
              下载
            </i>
          </div>
          <div className="sprite_button comment">
            <i className="sprite_button inner">
              <em className="sprite_button favorite-icon"></em>
              ({commentCount})
            </i>
          </div>
        </div>
      </div>
    </ToplistTitleWrapper>
  )
}