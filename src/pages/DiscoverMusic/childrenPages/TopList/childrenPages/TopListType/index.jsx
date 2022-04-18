import * as React from 'react'
import { Fragment } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setImageSize } from '../../../../../../utils/format';
import { changeTopListIDAction } from '../../store/actionCreator'
import { TopListTypeWrapper } from './style';
import { NavLink, useNavigate } from 'react-router-dom';

export default function TopListType(props) {
  // props/state
  const { allTopList } = props;
  const navigate = useNavigate()
  // redux hook
  const dispatch = useDispatch()
  const topListID = useSelector(
    (state) => state.topListReducer.topListID,
    shallowEqual
  )

  // other function
  const clickItem = (e, id) => {
    e.preventDefault();
    // dispatch
    dispatch(changeTopListIDAction(id))
    // 修改URL
    navigate(`/discover/toplist?id=${id}`)
  };

  return (
    <TopListTypeWrapper>
      {allTopList.map((item, index) => {
        return (
          <Fragment key={item.id}>
            <h3 style={{ marginTop: index === 4 ? '17px' : '' }}>
              {index === 0 ? '云音乐特色榜' : index === 4 ? '全球媒体榜' : ''}
            </h3>
            <NavLink
              className={"info " + (item.id === topListID ? 'bg' : '')}
              onClick={(e) => clickItem(e, item.id)}
              to={{pathname: `/discover/songs`, search: `?id=${item.id}`}}
            >
              <div className="image">
                <img src={setImageSize(item.coverImgUrl, 44)} alt="" />
              </div>
              <div className="info-right">
                <div className="info-title">{item.name}</div>
                <div className="info-update">{item.updateFrequency}</div>
              </div>
            </NavLink>
          </Fragment>
        );
      })}
    </TopListTypeWrapper>
  );
}
