import * as React from 'react'
import { setImageSize } from '../../utils/format'
import { AlbumCoverWrapper } from './style'

export default function AlbumCover(props) {
  // 传递该组件: width height  做默认值
  // 对图片使用工具函数限制大小
  const { info, size = 130, width = 153, bgp = "-845px" } = props

  return (
    <AlbumCoverWrapper width={width} bgp={bgp} size={size}>
      <div className="album-image">
        <img src={setImageSize(info.picUrl, size)} alt={info.name} />
        <a href={"/album?id="+ info.id } className="no-link image_cover cover">{info.name}</a>
      </div>
      <div className="album-name text-nowrap">{info.name}</div>
      <div className="artist text-nowrap">{info.artist.name}</div>
    </AlbumCoverWrapper>
  )
}
