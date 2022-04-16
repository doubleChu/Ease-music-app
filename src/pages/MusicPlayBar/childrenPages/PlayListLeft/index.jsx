import * as React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { formatDate } from '../../../../utils/format'
import { removeSongID } from '../../../../utils/localStorage'
import { changePlayListAction, changePlayListCountAction } from '../../store/actionCreator'
import { PlaylistItemWrapper, PlayListIcon, ControlIcons } from './style'

export default function PlayListLeft (props) {
  // props/state
  const {songName, singer, isShowSlider, duration, isActive, clickItem, songId, nextMusic} = props

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
    dispatch(changePlayListAction(playList))
    dispatch(changePlayListCountAction(playList.length))
    // 切换下一首音乐
    nextMusic()
  }

  return (
    <PlaylistItemWrapper className={isActive} onClick={clickItem}>
      <PlayListIcon
        type="button"
        iconType={6}
        style={{
          visibility: (isActive === 'active' && isShowSlider) ? 'visible' : 'hidden',
          boxSizing: 'content-box',
          margin: '8px 0 0 10px',
          gridColumnStart: "1",
          width: "10px",
          height: "13px",
        }}
      />
      <div className="song-name">{songName}</div>
      <ControlIcons>
        <PlayListIcon type="button" iconType={1} />
        <PlayListIcon type="button" iconType={2} />
        <PlayListIcon type="button" iconType={3} />
        <PlayListIcon
          type="button"
          iconType={4}
          onClick={(e) => clearCurrentSong(e)}
        />
      </ControlIcons>
      <span className='singer'>{singer}</span>
      <div className="duration" style={{ gridColumnStart: "5", lineHeight: '28px' }}>
        {formatDate(duration, "mm:ss")}
      </div>
    </PlaylistItemWrapper>
  )
}