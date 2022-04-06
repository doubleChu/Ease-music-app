import * as React from "react"
import { shallowEqual, useSelector} from "react-redux"
import { useState, useEffect, useRef, useCallback } from "react"
import { useBannersAction } from "../../store/actionCreator"
import { Carousel } from "antd"
import 'antd/dist/antd.css'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from "./style"

export default function Banners() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const { topBanners } = useSelector(
    (state) => ({ topBanners: state.recommendReducer.topBanners }),
    shallowEqual
  )

  const bannerAction = useBannersAction()

  const bannerRef = useRef()
  const bgRef = useRef()
  useEffect(() => {
    bannerAction()
  }, [bannerAction])

  const bannerChange = useCallback((from, to) => {
    setActiveIndex(to)
  }, [])
  // redux-thunk写法
  // useEffect(() => {
  //   // 在组件渲染之后发送网络请求
  //   dispatch(getTopBannersAction())
  // }, [dispatch])
  
  let bgImage =
    topBanners &&
    topBanners[activeIndex] &&
    topBanners[activeIndex].imageUrl + "?imageView&blur=40x20"

  return (
    <BannerWrapper bgImage={bgImage} ref={bgRef}>
      <div className="banner w980">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay={true}
            ref={bannerRef}
            beforeChange={bannerChange}>
            {topBanners && topBanners.map(item => {
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
