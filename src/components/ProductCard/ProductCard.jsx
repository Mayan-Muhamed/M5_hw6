import React from 'react'

const ProductCard = ({ name, price, picture, color, description, handleClick }) => {
    return (
        <div  >
            <img  src={picture} alt="picture" />
            <h2 style={{ background: color }}>{name}</h2>
            <p>{description}</p>
            <div >
                <p >{price}</p>
                <button  onClick={handleClick}>Buy</button>
            </div>
        </div>
    )
}

export default ProductCard