import * as React from 'react'
import { setImageSize } from '../../../../../../../../utils/format'
import { SingerCoverWrapper } from './style'

export default function SingerCover(props) {
    const { info } = props
    return (
      <SingerCoverWrapper>
        <div className="image">
          <img src={setImageSize(info.picUrl, 62)} alt="" />
        </div>
        <div className="singer-title">
          <div className="text-nowrap singer-name">{info.name}</div>
          <div className="text-nowrap singer-detail">{info.alias[0] ? info.alias[0] : info.trans}</div>
        </div>
      </SingerCoverWrapper>
    )
  }