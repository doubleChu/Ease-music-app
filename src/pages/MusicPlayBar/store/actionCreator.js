import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { getSongDetail, getLyric, getHotComment } from "../../../services/musicPlayBar"
import { parseLyric } from "../../../utils/parseLyric"

export const useSongDetailAction = () => {
    const dispatch = useDispatch()
    const getSongDetailAction = useCallback(async (ids) => {
      const songDetail = await getSongDetail(ids).then((res) => res.songs[0])
      dispatch({
        type: "GET_SONG_DETAIL",
        songDetail: songDetail,
      })
    }, [dispatch])
    return getSongDetailAction
  }

  export const useLyricAction = () => {
    const dispatch = useDispatch()
    const getLyricAction = useCallback(async (id) => {
      const lyric = await getLyric(id).then((res) => res.lrc.lyric)
      const lyricList = parseLyric(lyric)
      dispatch({
        type: "GET_LYRIC",
        lyricList: lyricList,
      })
    }, [dispatch])
    return getLyricAction
  }

  export const useHotCommentAction = () => {
    const dispatch = useDispatch()
    const getHotCommentAction = useCallback(async (id, type) => {
      const hotComment = await getHotComment(id, type).then((res) => res.hotComments)
      dispatch({
        type: "GET_HOT_COMMENT",
        hotComment: hotComment,
      })
    }, [dispatch])
    return getHotCommentAction
  }