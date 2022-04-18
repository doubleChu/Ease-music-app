import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { getBanners, getPopularRecom, getNewestAlbum, getSingerList, getPopularDj } from "../../../../../services/recommend"
import { getTopListDetail } from '../../../../../services/topList'

export const useBannersAction = () => {
  const dispatch = useDispatch()
  const getBannersAction = useCallback(async () => {
    const banners = await getBanners().then((res) => res.banners)
    dispatch({
      type: "CHANGE_TOP_BANNER",
      topBanners: banners,
    })
  }, [dispatch])
  return getBannersAction
}
// return dispatch => {
//     getBanners().then(res => {
//         dispatch({
//             type: "CHANGE_TOP_BANNER",
//             topBanners: res.banners,
//         })
//     })
// }
// export const getTopBannersAction = () => {
//   return (dispatch) => {
//     getBanners().then( res => {
//       dispatch({
//         type: "CHANGE_TOP_BANNER",
//         topBanners: res.banners,
//       })
//     })
//   }
// }

export const usePopularRecommendAction = () => {
  const dispatch = useDispatch()
  const getPopularRecomAction = useCallback(async (limit) => {
    const popularRecommend = await getPopularRecom(limit).then((res) => res.result)
    dispatch({
      type: "CHANGE_POPULAR_RECOMMEND",
      popularRecommend: popularRecommend,
    })
  }, [dispatch])
  return getPopularRecomAction
}

export const useNewestAlbumAction = () => {
  const dispatch = useDispatch()
  const getNewestAlbumAction = useCallback(async () => {
    const newestAlbum = await getNewestAlbum().then((res) => res.albums)
    dispatch({
      type: "CHANGE_NEWEST_ALBUM",
      newestAlbum: newestAlbum,
    })
  }, [dispatch])
  return getNewestAlbumAction
}

export const useSettledSingerAction = () => {
  const dispatch = useDispatch()
  const getSettledSingerAction = useCallback(async (limit, type, area) => {
    const settledSinger = await getSingerList(limit, type, area).then((res) => res.artists)
    dispatch({
      type: "CHANGE_SETTLED_SINGER",
      settledSinger: settledSinger,
    })
  }, [dispatch])
  return getSettledSingerAction
}

export const usePopularDjAction = () => {
  const dispatch = useDispatch()
  const getPopularDjAction = useCallback(async (limit) => {
    const popularDj = await getPopularDj(limit).then((res) => res.djRadios)
    dispatch({
      type: "CHANGE_POPULAR_DJ",
      popularDj: popularDj,
    })
  }, [dispatch])
  return getPopularDjAction
}

export const useTopListDetailAction = () => {
  const dispatch = useDispatch()
  const getTopListDetailAction = useCallback(async (id0, id1, id2) => {
    const topListDetail0 = await getTopListDetail(id0).then((res) => res.playlist)
    const topListDetail1 = await getTopListDetail(id1).then((res) => res.playlist)
    const topListDetail2 = await getTopListDetail(id2).then((res) => res.playlist)
    dispatch({
      type: "CHANGE_TOP_LIST_DETAIL",
      topListDetail0: topListDetail0,
      topListDetail1: topListDetail1,
      topListDetail2: topListDetail2,
    })
  }, [dispatch])
  return getTopListDetailAction
}