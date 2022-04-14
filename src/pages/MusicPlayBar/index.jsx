import * as React from "react"
import { useEffect, useRef, useCallback, useState } from "react"
import { shallowEqual, useSelector } from "react-redux"
import { setImageSize, getMusicUrl, formatDate } from "../../utils/format"
import { NavLink } from "react-router-dom"
import { useSongDetailAction, useLyricAction } from "./store/actionCreator"
import { Slider, Tooltip } from "antd"
import { Control, Operator, PlayBarWrapper, PlayerInfo } from "./style"
import { CSSTransition } from "react-transition-group"
import PlayListLeft from "./childrenPages/PlayListLeft"

export default function MusicPlayBar() {
  const [currentTime, setCurrentTime] = useState(0) // 当前播放的时间
  const [playSequence, setPlaySequence] = useState(0) // 循环，随机，单曲播放
  const [hasVolumeBar, setHasVolumeBar] = useState(false) // 是否显示音量播放条
  const [progress, setProgress] = useState(0) // 滑块进度
  const [isSliding, setIsSliding] = useState(false) // 是否正在滑动
  const [isPlaying, setIsPlaying] = useState(false) // 是否正在播放
  const [hasPlaylist, sethasPlaylist] = useState(false) // 是否显示播放列表

  const { songDetail, lyricList } = useSelector(
    (state) => ({
      songDetail: state.playBarReducer.songDetail,
      lyricList: state.playBarReducer.lyricList,
    }),
    shallowEqual
  )

  const songDetailAction = useSongDetailAction()
  useEffect(() => {
    songDetailAction(1436264336)
  }, [songDetailAction])

  const lyricAction = useLyricAction()
  useEffect(() => {
    lyricAction(1436264336)
  }, [lyricAction])

  const audioRef = useRef()

  const playMusic = useCallback(() => {
    // 是否播放（异步）
    setIsPlaying(!isPlaying)
    // 播放或暂停（根据原isPlaying状态）
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
  }, [isPlaying])

  const songName = songDetail.name
  const songDuration = songDetail.dt
  const songArtist = songDetail.al && songDetail.ar[0].name
  const songArtistID = songDetail.ar && songDetail.ar[0].id
  const songID = songDetail.id
  const picUrl = songDetail.al && songDetail.al.picUrl

  useEffect(() => {
    audioRef.current.src = getMusicUrl(songID)
  }, [songID])

  return (
    <PlayBarWrapper className="sprite_player">
      <div className="w980 content">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player pre"></button>
          <button className="sprite_player play" onClick={playMusic}></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayerInfo>
          <NavLink to={"/song?id=" + songID} className="image">
            <img src={setImageSize(picUrl, 34)} alt="Album cover" />
          </NavLink>
          <div className="play-detail">
            <div className="song-info">
              <NavLink to={"/song?id=" + songID} className="song-name">
                {songName}
              </NavLink>
              {/* eslint-disable-next-line */}
              <a
                href={"https://music.163.com/mv?id=" + songID}
                className="sprite_player mv"
              ></a>
              <a
                href={"https://music.163.com/#/artist?id=" + songArtistID}
                className="no-link singer-name"
              >
                {songArtist}
              </a>
            </div>
            <Slider defaultValue={0} value={progress} />
          </div>
          <div className="song-time">
            <span className="now-time">{formatDate(currentTime, "mm:ss")}</span>
            <span className="total-time">
              {" "}
              / {songDuration && formatDate(songDuration, "mm:ss")}
            </span>
          </div>
        </PlayerInfo>
        <Operator play_sequence = {playSequence}>
          <div className="left">
            {/* eslint-disable */}
            <a
              href="#!"
              className="pictureIP"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="#!"
              className="collection sprite_player"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="#!"
              className="share sprite_player"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            {/* eslint-enable */}
          </div>
          <div className="right sprite_player">
            <button
              className="sprite_player btn volume"
              onClick={() => setHasVolumeBar(!hasVolumeBar)}
            ></button>
            <Tooltip
              title={["顺序播放", "随机播放", "单曲循环"].filter(
                (item, index) => (index === playSequence ? item : undefined)
              )}
            >
              <button
                className="sprite_player btn loop"
                onClick={(e) =>
                  setPlaySequence( playSequence =>
                    playSequence < 2 ? playSequence + 1 : 0
                  )
                }
              ></button>
            </Tooltip>
            <button
              className="sprite_player btn playlist"
              // 阻止事件捕获,父元素点击事件,不希望点击子元素也触发该事件
              onClick={() => sethasPlaylist(!hasPlaylist)}
            >
            </button>
            <Tooltip title="播放列表">
                {/* <span>{playlistCount}</span> */}
                <span>1</span>
              </Tooltip>
              <CSSTransition
                in={hasPlaylist}
                timeout={3000}
                classNames="playlist"
              >
                {/* <SliderPlaylist
                  isShowSlider={hasPlaylist}
                  playlistCount={playlistCount}
                  closeWindow={changePlaylistShow}
                  playMusic={forcePlayMusic}
                  changeSong={nextMusic}
                  isPlaying={isPlaying}
                /> */}
              </CSSTransition>
          </div>
        </Operator>
      </div>
      <audio
        id="audio"
        ref={audioRef}
        preload="auto"
        src="https://music.163.com/song/media/outer/url?id=1935311363.mp3"
      />
    </PlayBarWrapper>
  )
}
