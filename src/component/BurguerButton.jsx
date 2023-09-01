import React from 'react'
import '../assets/burguer.css'

const BurguerButton = (props) => {
    return (
        <div onClick={props.presClicked} className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default BurguerButton
