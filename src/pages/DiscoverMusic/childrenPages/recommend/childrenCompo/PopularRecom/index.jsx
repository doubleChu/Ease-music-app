import * as React from 'react'
import { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { HotRecommendWrapper } from './style'
import ThemeHeaderRmc from '../../../../../../components/RecommendHeader'
import { usePopularRecommendAction } from '../../store/actionCreator'
import SongCover from 'components/song-cover'

export default function HotRecommend() {
  // state

  // redux
  const { hotRecommends } = useSelector(
    (state) => ({ popularRecommend: state.recommendReducer.popularRecommend }),
    shallowEqual
  )

  const popularRecommend = usePopularRecommendAction()
  useEffect(() => {
    popularRecommend()
  }, [popularRecommend])

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRmc
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
      />
      <div className="recommend-list">
        {hotRecommends && hotRecommends.map(item => {
          return (
            <SongCover key={item.id} info={item} className="recommend-list">
              {item.name}
            </SongCover>
          )
        })}
      </div>
    </HotRecommendWrapper>
  )
}
