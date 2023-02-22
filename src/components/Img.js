import React from 'react'
import Crypto from '../img/Untitled.png'

export default function Img(props) {
    return (
        <img className='nft-img' src={Crypto} alt={props.alt} />
    )
}
