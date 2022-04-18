import * as React from 'react'
import { setImageSize } from '../../../../../../../utils/format'
import { DjCoverWrapper } from './style'

export default function DjCover(props) {
    const { info } = props
    return (
      <DjCoverWrapper>
        <div className="artist-image">
          <img src={setImageSize(info.picUrl, 40)} alt="" />
        </div>
        <div className="artist-info">
          <a href={"https://music.163.com/#/user/home?id="+ info.dj.userId} className="artist-name">{info.name}</a>
          <span className="artist-detail text-nowrap">{info.copywriter}</span>
        </div>
      </DjCoverWrapper>
    )
  }