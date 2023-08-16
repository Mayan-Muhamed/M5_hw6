import React  from 'react'
import product from '../../json/data.json'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useDispatch } from 'react-redux'
import { shopCartActions } from '../../store/shopCartSlice.js'


const ProductList = () => {


    const dispatch = useDispatch()
    const handleAddToCartClick = (product) => {
        dispatch(shopCartActions.addToCart(product))
    }

    return (
        <div >
            {product.map(product => (
                <ProductCard
                    key={product._id}
                    name={product.name}
                    description={product.description}
                    picture={product.picture}
                    color={product.color}
                    price={product.price}
                    handleClick={() => {handleAddToCartClick(product)}}
                />
            ))}
        </div>
    )
}

export default ProductList