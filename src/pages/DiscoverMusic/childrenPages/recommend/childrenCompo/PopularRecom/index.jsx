import * as React from 'react'
import { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { PopularRecommendWrapper } from './style'
import RecommendHeader from '../../../../../../components/RecommendHeader'
import { usePopularRecommendAction } from '../../store/actionCreator'
import SongCover from '../../../../../../components/SongCover'

export default function PopularRecommend() {
  // state

  // redux
  const { popularRecommend } = useSelector(
    (state) => ({ popularRecommend: state.recommendReducer.popularRecommend }),
    shallowEqual
  )

  const popularRecommendAction = usePopularRecommendAction()
  useEffect(() => {
    popularRecommendAction()
  }, [popularRecommendAction])

  return (
    <PopularRecommendWrapper>
      <RecommendHeader
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
      />
      <div className="recommend-list">
        {popularRecommend && popularRecommend.map(item => {
          return (
            <SongCover key={item.id} info={item} className="recommend-list">
              {item.name}
            </SongCover>
          )
        })}
      </div>
    </PopularRecommendWrapper>
  )
}
