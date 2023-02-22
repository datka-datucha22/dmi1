import React from 'react'
import Img from './Img'
import '../styles/MainDiv/mainDiv.css'
import DivTxt from './DivTxt'
import PriceTime from './PriceTime'
import Line from './Line'
import User from './User'

export default function MainDiv() {
    return (
        <div className="main-div">
            <div className='card'>
                <Img alt='nft img' />
                <DivTxt name='Equilibrium #3429' text='Our Equilibrium collection promotes balance and calm.' />
                <PriceTime time='3 days left' price='0.041 ETH' />
                <Line />
                <User imgAlt='user img' creation='Creation of' userName='Jules Wyvern' />
            </div>
        </div>
    )
}
