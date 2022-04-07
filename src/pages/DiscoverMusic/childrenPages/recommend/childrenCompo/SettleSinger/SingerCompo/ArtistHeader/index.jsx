import * as React from 'react'
import { ArtistHeaderLineWrapper } from './style'

export default function ArtistHeader(props){
    const { titleSlot, rightSlot } = props
    return (
      <ArtistHeaderLineWrapper>
        <div className="hot-artist">{titleSlot}</div>
        <a href="/discover/singer/signed" className="show-all">{rightSlot}</a>
      </ArtistHeaderLineWrapper>
    )
}