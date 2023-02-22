import React from 'react'
import '../styles/MainDiv/div-txt/div-txt.css'

export default function DivTxt(props) {
    return (
        <div className='div-txt'>
            <h2>{props.name}</h2>
            <p>{props.text}</p>


        </div>
    )
}
