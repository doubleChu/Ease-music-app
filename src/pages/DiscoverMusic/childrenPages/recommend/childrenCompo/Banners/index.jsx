import * as React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import { useRecommendAction } from '../../store/actionCreator'
import Carousel from 'react-material-ui-carousel'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'

export default function Banners(){
    const [currentIndex, ] = useState(0)
    const {topBanners} = useSelector(
        state => ({topBanners: state.recommend.topBanners})
    ,shallowEqual)
    const bannerRef = useRef()

    const recommendAction = useRecommendAction()
    useEffect(() => {
      recommendAction()
    }, [recommendAction])

    // redux-thunk写法
    // useEffect(() => {
    //   // 在组件渲染之后发送网络请求
    //   dispatch(getTopBannersAction())
    // }, [dispatch])
  

    const bgImage =
    topBanners &&
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + '?imageView&blur=40x20'

    return (
        <BannerWrapper bgImage={bgImage}>
        <div className="banner w980">
          <BannerLeft>
            <Carousel innerRef={bannerRef}>
                {topBanners && topBanners.map(item =>{
                    return (
                        <div key={item.imageUrl}>
                            <img src={item.imageUrl} alt={item.typeTitle} />
                        </div>
                    )
                })}
            </Carousel>
          </BannerLeft>
          <BannerRight />
          <BannerControl>
            <button
              className="btn"
              onClick={() => bannerRef.current.prev()}
            ></button>
            <button
              className="btn"
              onClick={() => bannerRef.current.next()}
            ></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    )
}
