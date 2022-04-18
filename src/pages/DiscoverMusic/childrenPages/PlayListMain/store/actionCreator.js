import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { getSelectedPlayList } from '../../../../../services/playList'

export const useSelectedPlayListAction = () => {
    const dispatch = useDispatch()
    const getSelectedPlayListAction = useCallback(async (cat, limit, offset) => {
      const playListPerPage = await getSelectedPlayList(cat, limit, offset).then((res) => res.playlists)
      dispatch({
        type: "GET_PLAYLIST_PER_PAGE",
        playListPerPage: playListPerPage,
      })
    }, [dispatch])
    return getSelectedPlayListAction
  }