import { useCallback } from "react"
import { getBanners } from "../../../../../services/recommend"
import { useDispatch } from "react-redux"

export const useRecommendAction = () => {
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
