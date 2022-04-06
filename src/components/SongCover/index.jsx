import * as React from 'react'
import { setCountFormat, setImageSize } from '../../utils/format'
import { SongCoverWrapper } from './style'

// 歌曲封面组件
export default function SongCover(props) {
  const { info, songList, width = 140 } = props

  // pic
  const picUrl = (info && info.picUrl) || (songList && songList.coverImgUrl) 
  // playCount 播放次数 
  const playCount = (info && info.playCount) || (songList && songList.playCount) 
  // name
  const name = (info && info.name) || (songList && songList.name) 
  // id
  const songInfoId = (info && info.id) || (songList && songList.id)
  
  return (
    <SongCoverWrapper width={width} href={`#/songlist?songlistId=${songInfoId}`}>
      <div className="cover-wrapper">
        <img src={setImageSize(picUrl, 140)} alt="" />
        <div className="cover-mask sprite_cover">
          <div className="bottom-bar sprite_cover">
            <span>
              <i className="sprite_icon earphone"></i>
              {setCountFormat(playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      {/* ?text-nowrap */}
      <div className="cover-title">{name}</div>
    </SongCoverWrapper>
  )
}
