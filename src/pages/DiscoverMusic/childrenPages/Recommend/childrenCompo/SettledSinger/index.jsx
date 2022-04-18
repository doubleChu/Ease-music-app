import * as React from 'react'
import { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useSettledSingerAction } from '../../store/actionCreator'
import ArtistHeader from './SingerCompo/ArtistHeader'
import SingerCover from './SingerCompo/SingerCover'
import { SettledSingerWrapper } from './style'

export default function SettledSinger() {
  // redux hook
  const { settledSinger } = useSelector(
    (state) => ({ settledSinger: state.recommendReducer.settledSinger }),
    shallowEqual
  )

  // other hook
  const settledSingerAction = useSettledSingerAction()
  useEffect(() => {
    settledSingerAction(15, 3, 16)
  }, [settledSingerAction])

  return (
    <SettledSingerWrapper>
      <ArtistHeader titleSlot="歌手" rightSlot="查看全部 >" />
      <div className="singer-container">
        {settledSinger && settledSinger.slice(10).map(item => {
          return <SingerCover key={item.id} info={item} />
        })}
      </div>
    </SettledSingerWrapper>
  )
}
