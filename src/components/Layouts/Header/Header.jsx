import React from 'react'
import './header.css'
export const Header = ({ children }) => {
    return (
        <div className='header'>
            {children}
        </div>
    )
}