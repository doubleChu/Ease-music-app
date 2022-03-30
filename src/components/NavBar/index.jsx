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
    title: '歌单',
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
    title: '每日推荐',
    link: 'album',
  },
]
export default function NavBar() {
  return (
    <NavBarWrapper>
      <CategoryList className='w1100'>
        {discoverMenu.map((item) => {
            return (
              
            )
          })}
      </CategoryList>
    </NavBarWrapper>
  )
}

