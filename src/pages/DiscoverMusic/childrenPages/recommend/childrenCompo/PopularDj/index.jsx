import * as React from "react"
import { useEffect } from "react"
import { shallowEqual, useSelector } from "react-redux"
import { usePopularDjAction } from "../../store/actionCreator"
import ArtistHeader from "../SettledSinger/SingerCompo/ArtistHeader"
import DjCover from "./DjCover"
import { PopularDjWrapper } from "./style"

export default function PopularDj() {
  const { popularDj } = useSelector(
    (state) => ({ popularDj: state.recommendReducer.popularDj }),
    shallowEqual
  )

  const popularDjAction = usePopularDjAction()
  useEffect(() => {
    popularDjAction(5)
  }, [popularDjAction])

  return (
    <PopularDjWrapper>
      <ArtistHeader titleSlot="热门主播" />
      <div className="artist-container">
        {popularDj.map((item) => {
          return <DjCover key={item.id} info={item} />
        })}
      </div>
    </PopularDjWrapper>
  )
}
