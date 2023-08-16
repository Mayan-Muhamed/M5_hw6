import './App.css'
import Navigation from './components/navigation/Navigation'
import ProductList from './pages/ProductList/ProductList'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { useState } from 'react'
import ShopCart from './components/ShopCard/ShopCard.jsx'

function App() {

    const [activeShopCart, setActiveShopCart] = useState(false)
    const handleActiveShopCart = () => {
        setActiveShopCart(prev => !prev)
    }

    const handleDisactiveShopCart = () => {
        activeShopCart ? setActiveShopCart(false) : null
    }

    return (
        <Provider store={store}>
            <div className='container m-auto' onClick={handleDisactiveShopCart}>
                <Navigation handleClick={handleActiveShopCart} />
                <ProductList />
                {activeShopCart && <ShopCart />}
            </div>
        </Provider>
    )
}

export default App