import * as React from 'react'
import { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { formatMinuteSecond } from '../../../../../../utils/format'
import { ToplistSongsWrapper } from './style'
import RecommendHeader from '../../../../../../components/RecommendHeader'
import SongItem from '../SongItem'
import { useTopListDetailAction } from '../../store/actionCreator'

export default function TopListSongs() {
  // props/states

  // redux hooks
  const { playCount, topListID, topListDetail } = useSelector(
    (state) => ({
      playCount: state.topListReducer.topListTitleInfo.playCount,
      topListID: state.topListReducer.topListID,
      topListDetail: state.topListReducer.topListDetail,
    }),
    shallowEqual
  )

  // other hook
  const topListDetailAction = useTopListDetailAction()
  useEffect(() => {
    topListDetailAction(topListID)
  }, [topListDetailAction, topListID])

  // other handle
  const rightSlot = (
    <span>
      播放：<em style={{ color: '#c20c0c', fontWeight: 'bold'}}>{playCount}</em>次
    </span>
  )

  return (
    <ToplistSongsWrapper>
      <RecommendHeader title="歌曲列表" showIcon={false} rightSlot={rightSlot} />
      <div className="toplist-main">
        <div className="main-header">
          <div className="sprite_table header-item"></div>
          <div className="sprite_table header-item header-title">标题</div>
          <div className="sprite_table header-item header-time">时长</div>
          <div className="sprite_table header-item header-singer">歌手</div>
        </div>
        <div className="main-list">
          {
            topListDetail && topListDetail.tracks.slice(0, 100).map((item,index) => {
              return   <SongItem 
              key={item.id}
              currentRanking={index+1} 
              className="song_item"
              coverPic={index < 3?item.al.picUrl:''}
              duration={formatMinuteSecond(item.dt)}
              songName={item.name}
              singer={item.ar[0].name + String(item.ar[1]?'/'+item.ar[1].name:'')}
              singerID={item.ar[0].id}
              songId={item.id}
              />
            })
          }
        </div>
      </div>
    </ToplistSongsWrapper>
  )
}
