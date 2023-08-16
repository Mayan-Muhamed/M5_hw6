import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { shopCartActions } from '../../store/shopCartSlice'

const ShopCart = () => {
    const dispatch = useDispatch()
    const handleClearCartClick = () => {
        dispatch(shopCartActions.clearCart())
    }

    const state = useSelector(state => state.cart)
    return (
        <div >
            <h1 >Shoping Cart</h1>
            <ul>
                {state.map(product => (
                    <li key={product._id} >
                        <span>{product.name}</span>
                        <span >{product.price}</span>
                    </li>
                ))}
            </ul>
            <button onClick={handleClearCartClick}>Clear Cart</button>
        </div>
    )
}

export default ShopCart