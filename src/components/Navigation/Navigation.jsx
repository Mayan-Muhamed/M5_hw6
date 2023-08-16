import React from 'react'
import {BsCart4} from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Navigation = ({handleClick}) => {
    const state = useSelector(state => state.cart)

    return (
        <nav>
            <ul >
                <li >
                    Home
                </li>
                <li  onClick={handleClick}>
                    <BsCart4/>
                    <span >{state.length}</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation