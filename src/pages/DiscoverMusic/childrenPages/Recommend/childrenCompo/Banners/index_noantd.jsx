import * as React from "react"
import { shallowEqual, useSelector} from "react-redux"
import { useState, useEffect, useRef} from "react"
import { useRecommendAction } from "../../store/actionCreator"
import Carousel from "react-alice-carousel"
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from "./style"
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Banners() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { topBanners } = useSelector(
    (state) => ({ topBanners: state.recommendReducer.topBanners }),
    shallowEqual
  )

  const recommendAction = useRecommendAction()

  const bannerRef = useRef()
  const bgRef = useRef()
  useEffect(() => {
    recommendAction()
  }, [recommendAction])

  const bannerChange = () => {
    if (activeIndex < topBanners.length - 1){
      setActiveIndex(activeIndex + 1)
    }
    else
    setActiveIndex(0)
  }
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
            ref={bannerRef}
            autoPlay={true}
            infinite={true}
            autoPlayInterval={3000}
            animationType="fadeout"
            onSlideChange={bannerChange}
            items={topBanners &&
              topBanners.map((item) => {
                return (
                    <img src={item.imageUrl} alt={item.typeTitle} />
                )
              })}>
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button
            className="btn"
            onClick={() => bannerRef.current.slidePrev()}
          ></button>
          <button
            className="btn"
            onClick={() => bannerRef.current.slideNext()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}
