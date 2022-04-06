import { useCallback } from "react"
import { getBanners, getPopularRecom } from "../../../../../services/recommend"
import { useDispatch } from "react-redux"

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

export const usePopularRecommendAction = () => {
  const dispatch = useDispatch()
  const getPopularRecomAction = useCallback(async () => {
    const popularRecommend = await getPopularRecom().then((res) => res.result)
    dispatch({
      type: "CHANGE_POPULAR_RECOMMEND",
      popularRecommend: popularRecommend,
    })
  }, [dispatch])
  return getPopularRecomAction
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
