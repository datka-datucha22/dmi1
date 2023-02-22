import React from 'react'
import UserImg from '../img/sadasd.png'
import '../styles/MainDiv/user/user.css'

export default function User(props) {
    return (
        <div className='user'>
            <img src={UserImg} alt={props.imgAlt} />
            <span>{props.creation}</span>
            <p>{props.userName}</p>


        </div>
    )
}
