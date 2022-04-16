import * as React from 'react'
import { useEffect, useRef } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { scrollTo } from '../../../../utils/animatedScrollTo'
import { LyricContentWrapper } from './style'

export default function LyricRight() {
  // redux hook
  const { lyricList, lyricIndex } = useSelector(
    state => ({
      lyricList: state.playBarReducer.lyricList,
      lyricIndex: state.playBarReducer.lyricIndex,
    }),
    shallowEqual
  )

  // other hooks
  const panelRef = useRef()
  useEffect(() => {
    if (lyricIndex > 0 && lyricIndex < 3) return
    scrollTo(panelRef.current, (lyricIndex - 3) * 32, 300)
  }, [lyricIndex])

  return (
    <LyricContentWrapper ref={panelRef}>
      <div className="lyric-content">
        {lyricList && lyricList.map((item, index) => {
          return (
            <div
              key={index}
              className={
                'lyric-item ' + (lyricIndex === index ? 'active' : '')
              }
            >
              {item.content}
            </div>
          )
        })}
      </div>
    </LyricContentWrapper>
  )
}