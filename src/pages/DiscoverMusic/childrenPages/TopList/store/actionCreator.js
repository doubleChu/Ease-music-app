import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { getTopListDetail, getAllTopList } from '../../../../../services/topList'

export const useAllTopListAction = () => {
  const dispatch = useDispatch()
  const getAllTopListAction = useCallback(async () => {
    const allTopList = await getAllTopList().then((res) => res.list)
    dispatch({
      type: "GET_ALL_TOPLIST",
      allTopList: allTopList,
    })
  }, [dispatch])
  return getAllTopListAction
}

export const useTopListDetailAction = () => {
    const dispatch = useDispatch()
    const getTopListDetailAction = useCallback(async (id) => {
      const topListDetail = await getTopListDetail(id).then((res) => res.playlist)
      const { coverImgUrl, name, trackNumberUpdateTime, playCount,
              subscribedCount, commentCount, shareCount,
            } = topListDetail

      const topListTitleInfo = { coverImgUrl, name, trackNumberUpdateTime,
        playCount, subscribedCount, commentCount, shareCount,
      }
      dispatch({
        type: "CHANGE_TOPLIST_DETAIL",
        topListDetail: topListDetail,
        topListTitleInfo: topListTitleInfo,
      })
    }, [dispatch])
    return getTopListDetailAction
  }

export const changeTopListIDAction = (topListID) => ({
  type: "CHANGE_TOPLIST_ID",
  topListID,
})
  
