import * as React from "react"
import { useEffect, useRef, useCallback, useState } from "react"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { setImageSize, getMusicUrl, formatDate } from "../../utils/format"
import { NavLink } from "react-router-dom"
import { useSongDetailAction, useLyricAction, changeSongIndexAction, changeLyricIndexAction } from "./store/actionCreator"
import { Slider, Tooltip } from "antd"
import { Control, Operator, PlayBarWrapper, PlayerInfo } from "./style"
import MusicPlayList from "./childrenPages/MusicPlayList"

export default function MusicPlayBar() {
  const [currentTime, setCurrentTime] = useState(0) // 当前播放的时间
  const [playSequence, setPlaySequence] = useState(0) // 循环，随机，单曲播放
  const [hasVolumeBar, setHasVolumeBar] = useState(false) // 是否显示音量播放条
  const [progress, setProgress] = useState(0) // 滑块进度
  const [isSliding, setIsSliding] = useState(false) // 是否正在滑动
  const [isPlaying, setIsPlaying] = useState(false) // 是否正在播放
  const [hasPlaylist, sethasPlaylist] = useState(false) // 是否显示播放列表

  const { songDetail, lyricList, lyricIndex, playListCount, playList, songIndex } = useSelector(
    (state) => ({
      songDetail: state.playBarReducer.songDetail,
      lyricList: state.playBarReducer.lyricList,
      lyricIndex: state.playBarReducer.lyricIndex,
      playListCount: state.playBarReducer.playListCount,
      playList: state.playBarReducer.playList,
      songIndex: state.playBarReducer.songIndex,
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

  const dispatch = useDispatch()
  const audioRef = useRef()

  const playMusic = useCallback(() => {
    // 是否播放（异步）
    setIsPlaying(!isPlaying)
    // 播放或暂停（根据原isPlaying状态）
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
  }, [isPlaying])

  const changePlaylistShow = useCallback(() => {
    sethasPlaylist(!hasPlaylist)
  }, [hasPlaylist])

  // ! async
  const changeSongAndIndex = async (tag) => {
    // 根据播放顺序选择下一首音乐
    let songIndexNext = songIndex
    switch (playSequence) {
      case 0:
        // 顺序播放
        // 更改当前播放音乐的下标
        songIndexNext += tag
        // 判断当前音乐的下标是否超出播放列表长度
        if (songIndexNext >= playList.length) songIndexNext = 0
        if (songIndexNext < 0) songIndexNext = playList.length - 1
        break
      case 1: // 随机播放
        // 生成一个随机数
        let random = Math.floor(Math.random() * playList.length)
        while (random === songIndexNext) {
          random = Math.floor(Math.random() * playList.length)
        }
        // 更改当前播放音乐的下标
        songIndexNext = random
        break
      default:
    }

    // 获取需要播放的音乐
    const songNext = playList[songIndexNext]
    await songDetailAction(songNext.id)
    await lyricAction(songNext.id)
    dispatch(changeSongIndexAction(songIndexNext))
    // 请求歌曲的歌词
  }

  // 切换下一首歌曲,不播放音乐
  const nextMusic = (tag) => {
    changeSongAndIndex(tag)
    setIsPlaying(false)
  }

  const changeVolume = (volume) => {
    audioRef.current.volume = volume / 100
  }

  const songName = songDetail.name
  const songDuration = songDetail.dt
  const songArtist = songDetail.al && songDetail.ar[0].name
  const songArtistID = songDetail.ar && songDetail.ar[0].id
  const songID = songDetail.id
  const picUrl = songDetail.al && songDetail.al.picUrl

  useEffect(() => {
    audioRef.current.src = getMusicUrl(songID)
    audioRef.current.volume = 0.3
  }, [songID])

  useEffect(() => {
    if(isPlaying){
      audioRef.current.play()
      console.log(Boolean(isPlaying))
      console.log(songName);
    }
  }, [isPlaying, songName])

  // 滑动滑块时触发
  const sliderOnChange = useCallback(
    (value) => {
      // 滑动滑块时:更改标识变量为false(touch move for changing state),此时不会触发onTimeUpdate(歌曲播放事件)
      setIsSliding(true)
      // 更改"当前播放时间"要的是毫秒数: 241840(总毫秒)   1 * 241840 / 1000 241.84 / 60  4.016667
      setCurrentTime((value / 100) * songDuration)
      // 更改进度条值
      setProgress(value)
    },
    [songDuration]
  )

  // 手指抬起时触发
  const sliderAfterChange = useCallback(
    (value) => {
      // 重新设置当前播放时长 value(进度)/100 * duration(总毫秒数) / 1000 得到当前播放的"秒数"
      audioRef.current.currentTime = ((value / 100) * songDuration) / 1000
      setIsSliding(false)
      // 更改播放状态
      setIsPlaying(true)
      // 播放音乐
      audioRef.current.play()
    },
    [songDuration, audioRef]
  )

  const audioOnTimeUpdate = (e) => {
    // 没有在滑动滑块时触发(默认时没有滑动)
    let currentTime = e.target.currentTime
    if (!isSliding) {
      setCurrentTime(currentTime * 1000)
      setProgress(((currentTime * 1000) / songDuration) * 100)
    }

    let i = 0
    while (currentTime * 1000 > lyricList[i]?.totalTime) i++
    // 对dispatch进行优化,如果index没有改变,就不进行dispatch
    if (lyricIndex !== i - 1) {
      dispatch(changeLyricIndexAction(i - 1));
    }
  }

  // 切换歌曲(点击播放下一首或上一首音乐)
  const switchSong = (tag) => {
    // 首先判断播放列表中是否存在音乐，再决定是否播放
    if (playListCount < 1) {
      return
    }
    if (playListCount === 1) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
    changeSongAndIndex(tag)
    setIsPlaying(true + Math.random()) // 更改播放状态图标
  }

  // 当前歌曲播放结束后
  const handleTimeEnd = () => {
    // 单曲循环
    if (playSequence === 2) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      // 播放下一首
      changeSongAndIndex(1)
      // 更改播放状态
      setIsPlaying(true + Math.random())
    }
  }

  return (
    <PlayBarWrapper className="sprite_player">
      <div className="w980 content">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player pre" onClick={() => switchSong(-1)}></button>
          <button className="sprite_player play" onClick={playMusic}></button>
          <button className="sprite_player next" onClick={() => switchSong(1)}></button>
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
            <Slider
              defaultValue={0}
              tooltipVisible={false}
              value={progress}
              onChange={sliderOnChange}
              onAfterChange={sliderAfterChange}
            />
          </div>
          <div className="song-time">
            <span className="now-time">{formatDate(currentTime, "mm:ss")}</span>
            <span className="total-time">
              {" "}
              / {songDuration && formatDate(songDuration, "mm:ss")}
            </span>
          </div>
        </PlayerInfo>
        <Operator play_sequence={playSequence}>
          <div className="left">
            {/* eslint-disable */}
            <a
              href="#"
              className="pictureIP"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="#"
              className="collection sprite_player"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href="#"
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
                  setPlaySequence((playSequence) =>
                    playSequence < 2 ? playSequence + 1 : 0
                  )
                }
              ></button>
            </Tooltip>
            <Tooltip title="播放列表">
              <button
                className="sprite_player btn playlist"
                // 阻止事件捕获,父元素点击事件,不希望点击子元素也触发该事件
                onClick={() => sethasPlaylist(!hasPlaylist)}
              >
                {playListCount}
              </button>
            </Tooltip>
            <MusicPlayList
              isShowSlider={hasPlaylist}
              playListCount={playListCount}
              closeWindow={changePlaylistShow}
              playMusic={setIsPlaying}
              changeSong={nextMusic}
              isPlaying={isPlaying}
            />
          </div>
          <div
            className="sprite_player top-volume"
            style={{ display: hasVolumeBar ? "block" : "none" }}
            onMouseLeave={() => {
              setHasVolumeBar(false)
            }}
          >
            <Slider vertical defaultValue={30} onChange={changeVolume} />
          </div>
        </Operator>
      </div>
      <audio
        id="audio"
        ref={audioRef}
        preload="auto"
        onTimeUpdate={audioOnTimeUpdate}
        onEnded={handleTimeEnd}
        src="https://music.163.com/song/media/outer/url?id=1935311363.mp3"
      />
    </PlayBarWrapper>
  )
}
