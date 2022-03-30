import * as React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar'
import { HeaderCategory } from './style'

export default function DiscoverMusic() {
  return (
    <HeaderCategory>
      <NavBar/>
      <Outlet/>
    </HeaderCategory>
  )
}
