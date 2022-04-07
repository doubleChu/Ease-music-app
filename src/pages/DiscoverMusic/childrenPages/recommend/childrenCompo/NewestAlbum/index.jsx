import * as React from "react"
import { useEffect, useRef } from "react"
import { shallowEqual, useSelector } from "react-redux"
import { useNewestAlbumAction } from "../../store/actionCreator"
import RecommendHeader from "../../../../../../components/RecommendHeader"
import AlbumCover from "../../../../../../components/AlbumCover"
import { NewAlbumWrapper } from "./style"
import { Carousel } from "antd"

export default function NewestAlbum() {
  // redux hook
  const { newestAlbum } = useSelector(
    (state) => ({
      newestAlbum: state.recommendReducer.newestAlbum }),
    shallowEqual
  )

  //  other hook
  const albumRef = useRef()
  // (新碟上架)
  const newestAlbumAction = useNewestAlbumAction()
  useEffect(() => {
    newestAlbumAction()
  }, [newestAlbumAction])

  /* 轮播图布局思路:
      两个页面轮播: 2page
      在page中添加一个个item
  */
  return (
    <NewAlbumWrapper>
      <RecommendHeader title="新碟上架" keywords={[]}/>
      <div className="content">
        <div className="inner">
          <Carousel dots={false} ref={albumRef} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {/* item * 5, (item+1) * 5   第一次遍历0  5  第二次遍历 5  10  */}
                  {newestAlbum &&
                    newestAlbum.slice(item * 5, (item + 1) * 5).map((cItem) => {
                      return (
                        <AlbumCover
                          key={cItem.id}
                          info={cItem}
                          size={100}
                          width={118}
                          bgp="-570px"
                        >
                          {cItem.name}
                        </AlbumCover>
                      )
                    })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div
          className="sprite_02 arrow arrow-left"
          onClick={(e) => albumRef.current.prev()}
        ></div>
        <div
          className="sprite_02 arrow arrow-right"
          onClick={(e) => albumRef.current.next()}
        ></div>
      </div>
    </NewAlbumWrapper>
  )
}
