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
        <div className='text-center my-4'>
            <h1 className='text-2xl font-bold'>Cart</h1>
            {/* Clear Cart Button */}
            {
                cartItems.length === 0 ?
                    <span></span>
                    :
                    <button
                        className='p-2 m-2 rounded-lg  bg-orange-500 text-white font-medium'
                        onClick={handleClearCart}
                    >
                        Clear
                    </button>
            }
            {/* Cart Items */}
            <div className='w-[80vw] sm:w-[50vw] m-auto'>
                {
                    cartItems.length === 0 ?
                        <div>
                            <p>Cart is empty !!</p>
                            <p>Add items to Cart</p>
                        </div>
                        :
                        <ItemList items={cartItems} />
                }
            </div>
        </div>
    )
}

export default Cart