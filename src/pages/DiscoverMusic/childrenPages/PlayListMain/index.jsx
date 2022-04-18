import * as React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { useSelectedPlayListAction } from './store/actionCreator'
import { shallowEqual, useSelector } from 'react-redux';
import RecommendHeader from '../../../../components/RecommendHeader'
import SongCover from '../../../../components/SongCover'
import { HotButton, SongListWrapper } from './style'
import { Pagination } from 'antd'

export default function PlayListMain() {
  const SONG_LIST_LIMIT = 35

  const [offset, setOffset] = useState(0)
  const [category, setCategory] = useState("全部")
  // redux hook
  const playListPerPage = useSelector(
    (state) => state.playListReducer.playListPerPage,
    shallowEqual
  )

  const selectedPlayListAction = useSelectedPlayListAction()
  useEffect(() => {
    selectedPlayListAction("全部", SONG_LIST_LIMIT, 0)
  }, [selectedPlayListAction])

  useEffect(() => {
    selectedPlayListAction(category, SONG_LIST_LIMIT, offset)
  }, [category, offset, selectedPlayListAction])

  // other function
  const changePage = useCallback((currentPage) => {
    // offset=(当前页数-1)*limit
    const targePageCount = (currentPage - 1) * SONG_LIST_LIMIT
    setOffset(targePageCount)
    window.scroll(0, 0)
  }, [])

  const rightSlot = <HotButton onClick={() => setCategory("全部")}>热门</HotButton>
  return (
    <SongListWrapper className="w980">
      <RecommendHeader title="全部" rightSlot={rightSlot}/>
      <div className="content">
        {playListPerPage.map((songItem) => {
          return <SongCover key={songItem.id} songList={songItem} width={150} />
        })}
      </div>
      <Pagination
        defaultCurrent={1}
        pageSize={35}
        total={666}
        onChange={(currentPage) => changePage(currentPage)}
      />
    </SongListWrapper>
  )
}