import * as React from 'react'
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import PlayListLeft from '../PlayListLeft'
import LyricRight from '../LyricRight'
import {
  changePlayListAction,
  useSongDetailAction,
  changePlayListCountAction
} from "../../store/actionCreator"
import { removeAllSong, resetPlaylistID } from '../../../../utils/localStorage'
import {
  SliderPlaylistHeader,
  SliderPlaylistMain,
  SliderPlaylistWrapper,
} from "./style"
import { PlayListIcon } from '../PlayListLeft/style'


export default function MusicPlayList (props) {
      // props/state
  const {
    isShowSlider,
    playListCount,
    closeWindow,
    playMusic,
    changeSong,
  } = props;

  // redux hook
  const dispatch = useDispatch();
  const { currentSong, playList, currentSongIndex } = useSelector(
    (state) => ({
      currentSong: state.playBarReducer.songDetail,
      playList: state.playBarReducer.playList,
      currentSongIndex: state.playBarReducer.songIndex,
    }),
    shallowEqual
  );

  // other hook
  const playlistRef = useRef();

    // other function
  // 清除全部歌曲
  const clearAllPlaylist = (e) => {
    e.preventDefault();
    removeAllSong()
    playList.splice(0, playList.length);
    dispatch(changePlayListAction(playList))
    dispatch(changePlayListCountAction(playList.length))
  };

  // 点击item播放音乐
  const songDetailAction = useSongDetailAction()
  const clickItem = (index, item) => {
    // 播放音乐 dispatch
    songDetailAction(item.id);
    playMusic(true + Math.random());
  };

  return (
    <SliderPlaylistWrapper
      style={{ visibility: isShowSlider ? "visible" : "hidden" }}
      // 阻止事件冒泡
      onClick={(e) => e.stopPropagation()}
    >
      <SliderPlaylistHeader>
        <div className="playlist-header-left">
          <h3 className="header-title">播放列表({playListCount})</h3>
          <div>
            {/*eslint-disable-next-line*/}
            <a href="#"
              className="header-icon"
              onClick={(e) => e.preventDefault()}
            >
              <PlayListIcon type="button" iconType={1} style={{marginTop: '5px'}}/>
              <span>收藏全部</span>
            </a>
            {/*eslint-disable-next-line*/}
            <a href="#"
              onClick={(e) => clearAllPlaylist(e)}
              className="header-icon"
            >
              <PlayListIcon type="button" iconType={4} style={{marginTop: '5px'}}/>
              <span>清除</span>
            </a>
          </div>
        </div>
        <div className="playlist-header-right">
          <div className="song-name">{currentSong.name}</div>
          <PlayListIcon
            type="button"
            iconType={5}
            className="close-window"
            onClick={closeWindow}
          />
        </div>
      </SliderPlaylistHeader>
      <SliderPlaylistMain ref={playlistRef}>
        <div className="main-playlist">
          {playList &&
            playList.map((item, index) => {
              return (
                  <PlayListLeft
                    key={item.id}
                    isActive={
                      (currentSongIndex ? currentSongIndex : 0) === index
                        ? "active"
                        : ""
                    }
                    isShowSlider={isShowSlider}
                    songName={item.name}
                    singer={item.ar[0].name}
                    duration={item.dt}
                    clickItem={() => clickItem(index, item)}
                    songId={item.id}
                    nextMusic={() => changeSong(1)}
                  />
                )
            })}
        </div>
        <div className="main-line"></div>
        <LyricRight />
      </SliderPlaylistMain>
    </SliderPlaylistWrapper>
  )
}

