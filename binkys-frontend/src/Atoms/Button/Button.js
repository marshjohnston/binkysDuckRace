import React from "react"
import './Button.css'

const Button = (props) => (
    <div
        id={props.id}
        className={`Button ${props.type ? props.type : ''} ${props.disabled ? 'disabled' : ''} ${props.className ? props.className : ''} `}
        style={props.style}
        onClick={!props.disabled && props.onClick || function () { }}
    >
        {props.children}
    </div>
)

export default Button