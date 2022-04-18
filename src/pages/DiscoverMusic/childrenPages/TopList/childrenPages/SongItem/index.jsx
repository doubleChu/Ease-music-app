import * as React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { setImageSize } from '../../../../../../utils/format'
import { useSongDetailAction } from '../../../../../MusicPlayBar/store/actionCreator'
import { AddButton, SongItemWrapper } from './style'
import { PlayCircleOutlined } from '@ant-design/icons'
import { message } from 'antd'


export default function SongItem(props) {
  // props/state
  const {
    currentRanking,
    coverPic,
    duration,
    singer,
    songId,
    singerID,
    songName,
    className = '',
  } = props

  // redux hook
//   const dispatch = useDispatch()
//   const {playList} = useSelector(state => ({
//     playList: state.playBarReducer.playList
//   }), shallowEqual)

  // other function
  const songDetailAction = useSongDetailAction()
  const playMusic = (e, isTo = false) => {
    // 如果不跳转,那么阻止超链接的默认行为
    if (!isTo) e.preventDefault()
    songDetailAction(songId)
    // 播放音乐
    document.getElementById('audio').play()
  }

  return (
    <SongItemWrapper className={className} isPic={coverPic}>
      <div className="song-item rank-count">{currentRanking}</div>
      {coverPic && (
        <NavLink
          to={"https://music.163.com/#/song?id=" + songId}
          className="song-item"
          onClick={(e) => playMusic(e, true)}
        >
          <img src={setImageSize(coverPic, 50)} alt="" />
        </NavLink>
      )}
      <div className="song-item song-info">
        <div className="left-info">
          <PlayCircleOutlined
            className="font-active"
            onClick={(e) => playMusic(e)}
          />
          <a href="/play" onClick={(e) => playMusic(e)} className="text-nowrap">
            {songName}
          </a>
        </div>
        <div className="right-operator">
          <AddButton
            href="/discover/recommend"
            className="sprite_icon2"
            // onClick={e => addPlaylist(e,songId)}
          ></AddButton>
        </div>
      </div>
      <div className="song-item duration">{duration}</div>
      <NavLink
        to={"https://music.163.com/#/artist?id=" + singerID}
        className="song-item text-nowrap singer"
        onClick={(e) => playMusic(e, true)}
      >
        {singer}
      </NavLink>
    </SongItemWrapper>
  )
}
