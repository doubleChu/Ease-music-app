import * as React from 'react'
import { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import qs from 'query-string'
import { TopListLeft, TopListRight, TopListWrapper } from './style'
import TopListTitle from './childrenPages/TopListTitle'
import { useAllTopListAction, useTopListDetailAction } from './store/actionCreator'
import { useLocation } from 'react-router-dom'
import TopListType from './childrenPages/TopListType'
import TopListSongs from './childrenPages/TopListSongs'

export default function TopListMain () {
  const { allTopList, topListID } = useSelector(
    (state) => ({
      allTopList: state.topListReducer.allTopList,
      topListID: state.topListReducer.topListID,
    }),
    shallowEqual
  )

  const allTopListAction = useAllTopListAction()
  const topListDetailAction = useTopListDetailAction()

  useEffect(() => {
    allTopListAction()
  }, [allTopListAction])

  const location = useLocation()
  useEffect(() => {
    let { id } = qs.parse(location.search)
    id = id ? id : topListID
    topListDetailAction(id)
  }, [topListDetailAction, location.search, topListID])

  return (
    <TopListWrapper className="wrap-bg2">
      <div className="content w980">
        <TopListLeft>
          <div className="top-list-container"></div>
          <TopListType allTopList={allTopList}/>
        </TopListLeft>
        <TopListRight>
          <TopListTitle />
          <TopListSongs />
        </TopListRight>
      </div>
    </TopListWrapper>
  )
}
