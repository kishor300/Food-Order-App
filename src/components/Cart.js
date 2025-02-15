import React from 'react'
import ItemList from './ItemList'
import { useDispatch, useSelector } from 'react-redux'
import { cartSliceAction } from '../utils/cartSlice'

const Cart = () => {

    // Reading data from store OR Subscribing to redux_store using `useSelector` Hook
    const cartItems = useSelector((store) => { return (store.cart.items) })   // path of appStore and cartSlice
    const dispatchAction = useDispatch();
    const handleClearCart = () => {
        return (dispatchAction(cartSliceAction.clearCart()))
    }
    return (
        <div className='text-center m-4 p-4'>
            <h1 className='text-2xl font-bold'>Cart</h1>
            <button
                className='p-2 m-2 rounded-lg bg-gray-500 text-white font-semibold'
                onClick={handleClearCart}
            >
                Clear
            </button>
            {/* Cart Items */}
            <div className='w-6/12 m-auto'>
                {
                    cartItems.length === 0 ?
                        <h1>Cart is empty!! Add items to Cart</h1>
                        :
                        <ItemList items={cartItems} />
                }
            </div>
        </div>
    )
}

export default Cart