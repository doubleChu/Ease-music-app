import request from './request'

//轮播图
export const getBanners = () => request({url: '/banner'})
//热门推荐
export const getPopularRecom = () => request({url: '/personalized'})
