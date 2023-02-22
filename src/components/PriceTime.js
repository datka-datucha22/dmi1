import React from 'react'
import '../styles/MainDiv/Price-time/priceTime.css'

export default function PriceTime(props) {
    return (
        <div className='price-time'>
            <div className='price'>
                <svg width="20" height="25" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0L10.9961 9.16875L5.5 12.4312L0 9.16875L5.5 0ZM11 10.2165L5.5 18L0 10.2165L5.5 13.479L11 10.2165Z" fill="#00FFF8" />
                </svg>

                <span>{props.price}</span>
            </div>
            <div className='time'>
                <svg width="20" height="25" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.638336 6.67388C0.638336 2.99199 3.6231 0.00721741 7.305 0.00721741C9.07311 0.00721741 10.7688 0.709596 12.019 1.95984C13.2693 3.21008 13.9717 4.90577 13.9717 6.67388C13.9717 10.3558 10.9869 13.3406 7.305 13.3406C3.6231 13.3406 0.638336 10.3558 0.638336 6.67388ZM7.305 7.34055H9.97167C10.3399 7.34055 10.6383 7.04207 10.6383 6.67388C10.6383 6.30569 10.3399 6.00722 9.97167 6.00722H7.97167V4.00722C7.97167 3.63903 7.67319 3.34055 7.305 3.34055C6.93681 3.34055 6.63834 3.63903 6.63834 4.00722V6.67388C6.63834 7.04207 6.93681 7.34055 7.305 7.34055Z" fill="#8BACD9" />
                </svg>


                <span>{props.time}</span>
            </div>



        </div>
    )
}
