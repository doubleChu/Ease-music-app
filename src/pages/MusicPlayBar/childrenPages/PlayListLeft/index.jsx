import * as React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { formatDate } from '../../../../utils/format'
import { changePlaylistAndCount } from '../../store/actionCreator'
import { removeSongID } from '../../../../utils/localStorage'
import { PlaylistItemWrapper, PlayListIcon } from './style'

export default function PlayListLeft (props) {
  // props/state
  const {songName,singer, duration, isActive, clickItem, songId, nextMusic} = props

  // redux hook
  const dispatch = useDispatch()
  const { playList } = useSelector((state) => ({
    playList: state.playBarReducer.playList,
  }), shallowEqual)

    // other function
  // 清除当前播放音乐
  const clearCurrentSong = (e) => {
    // 从当前播放列表删除此音乐,然后派发action
    e.stopPropagation()
    // 移除歌曲
    removeSongID(songId)
    const currentSongIndex = playList.findIndex((song) => song.id === songId)
    if (playList.length === 1) return
    playList.splice(currentSongIndex, 1)
    dispatch(changePlaylistAndCount(playList))
    // 切换下一首音乐
    nextMusic()
  }

  return (
    <PlaylistItemWrapper className={isActive} onClick={clickItem}>
      <div className="song-name">{songName}</div>
      <div className="control-and-singer">
        <PlayListIcon type='button' iconType={1} />
        <PlayListIcon type='button' iconType={2}/>
        <PlayListIcon type='button' iconType={3}/>
        <PlayListIcon type='button' iconType={4} onClick={(e) => clearCurrentSong(e)} />
        <span>{singer}</span>
      </div>
      <div className="duration">{formatDate(duration, 'mm:ss')}</div>
    </PlaylistItemWrapper>
  )
}