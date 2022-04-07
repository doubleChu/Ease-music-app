import * as React from "react"
//import { useSelector, shallowEqual} from 'react-redux'
import { setImageSize } from "../../utils/format"
import { TopListWrapper } from "./style"

// TODO: add events to play in bottom player
export default function TopList(props) {
  const { info } = props
  const { tracks } = info

  return (
    <TopListWrapper>
      <div className="ranking-header">
        <div className="image">
          <img src={setImageSize(info.coverImgUrl, 80)} alt="" />
          <div className="image_cover ">{info.name}</div>
        </div>
        <div className="title">
          <div>
            <h3>{info.name}</h3>
          </div>
          <div className="btn">
            <a
              href="/discover/recommend"
              className="no-link sprite_02 text-indent play" >
              播放
            </a>
            <a
              href="/discover/recommend"
              className="no-link sprite_02 text-indent favorite" >
              收藏
            </a>
          </div>
        </div>
      </div>
      <div className="ranking-list">
        {tracks &&
          tracks.length > 0 &&
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="number" style={index < 3 ? {color: '#c10d0c'}: {}}>{index + 1}</div>
                <a href="/play" className="song-name text-nowrap">
                  {item.name}
                </a>
                <div className="operation">
                  <a
                    href="/discover/recommend"
                    className="sprite_02 btn play"
                  >
                    {item.name}
                  </a>
                  <a
                    href="/discover/recommend"
                    className="sprite_icon2 btn add-to"
                  >
                    {item.name}
                  </a>
                  <a href="/play" className="no-link sprite_02 btn favorite">
                    {item.name}
                  </a>
                </div>
              </div>
            )
          })}
      </div>
      <div className="ranking-footer">
        <a href={"/discover/toplist?id="+ info.id} className="no-link show-all">
          查看全部&gt;
        </a>
      </div>
    </TopListWrapper>
  )
}
