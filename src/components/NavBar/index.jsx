import * as React from 'react'
import { CategoryList, NavBarWrapper } from './style'
import { NavLink } from 'react-router-dom'

const discoverMenu = [
  {
    title: '推荐',
    link: '/',
  },
  {
    title: '排行榜',
    link: 'toplist',
  },
  {
    title: '歌单®',
    link: 'playlist',
  },
  {
    title: '主播电台',
    link: 'djradio',
  },
  {
    title: '歌手',
    link: 'artist',
  },
  {
    title: '新碟上架',
    link: 'album',
  },
]
export default function NavBar() {
  return (
    <NavBarWrapper>
      <div className='w1100'>
      <CategoryList style={{marginTop: '-2.5px'}}>
        {discoverMenu.map((item) => {
            return (
              <li key={item.title} className='item'>
                <NavLink
                 to={item.link}
                 className={({isActive}) => isActive ? "menu-active" : ""} >
                   <em>{item.title}</em>
                </NavLink>
              </li>
            )
          })}
      </CategoryList>
      </div>
    </NavBarWrapper>
  )
}

