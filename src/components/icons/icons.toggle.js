import React from 'react'
import { svgStyles } from './style'

export const Toggle = ( iconOn ) => {
    if(iconOn){
        return (
            <svg style={svgStyles()} xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 100 100">
                <path d="M24.4,65.4a15.4,15.4,0,0,1,0-30.7H70.6a15.4,15.4,0,0,1,0,30.7H24.4m0,5H70.6A20.4,20.4,0,0,0,91,50h0A20.4,20.4,0,0,0,70.6,29.6H24.4A20.4,20.4,0,0,0,4,50H4A20.4,20.4,0,0,0,24.4,70.4h0Z"/>
                <circle cx="61" cy="50" r="31.6" fill="#fff"/>
                <path d="M61,85A35,35,0,1,1,96,50,35,35,0,0,1,61,85Zm0-63.2A28.2,28.2,0,1,0,89.2,50,28.2,28.2,0,0,0,61,21.8Z"/>
                <polygon points="56.1 55.3 46.9 44.7 40.6 51 56.1 65.1 81.4 41.1 75.1 34.9 56.1 55.3"/>
            </svg>
        )
    }
    return (
        <svg style={svgStyles()} xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 100 100">
            <path d="M75.6,34.6a15.4,15.4,0,0,1,0,30.7H29.4a15.4,15.4,0,0,1,0-30.7H75.6m0-5H29.4A20.4,20.4,0,0,0,9,50H9A20.4,20.4,0,0,0,29.4,70.4H75.6A20.4,20.4,0,0,0,96,50h0A20.4,20.4,0,0,0,75.6,29.6h0Z"/>
            <circle cx="39" cy="50" r="31.6" fill="#fff"/>
            <path d="M39,85A35,35,0,1,1,74,50,35,35,0,0,1,39,85Zm0-63.2A28.2,28.2,0,1,0,67.2,50,28.2,28.2,0,0,0,39,21.8Z"/>
            <path d="M24.8,59.5L34.1,50l-9.3-9.5,5-4.9L39,45l9.2-9.4,5,4.9L43.9,50l9.3,9.5-5,4.9L39,55l-9.2,9.4Z"/>
        </svg>
    )
}