import React from 'react';
import { imgCDN } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { cartSliceAction } from '../utils/cartSlice';

const ItemList = ({ items }) => {

    // Creating dispatch function using `useDispatch` Hook
    const dispatchAction = useDispatch(); // Returns the dispatch function from the Redux store.

    // Dispatch an Action
    const handleAddItem = (cartItem) => {
        // Adding new item to store using dispatch function 'addItem()'.
        dispatchAction(cartSliceAction.addItem(cartItem))
    }

    return (
        <>
            {items.map((item) => {
                return (
                    <div
                        data-testid='resto_item'
                        key={item.card.info.id}
                        className='flex justify-between pl-2 pt-2 pb-5 m-2 border-gray-200 border-b-2'
                    >
                        {/* Item Card - Left Side*/}
                        <div className='w-10/12'>
                            <div className='pb-2'>
                                <span>{item.card.info.name}</span>
                                <span> - ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                            </div>
                            <p className='text-xs'>{item.card.info.description}</p>
                        </div>

                        {/* Item Card - Right Side */}
                        <div className='w-24 h-24 relative'>
                            <img
                                src={imgCDN + item.card.info.imageId}
                                alt="item img"
                                className='rounded-xl w-full h-full' />
                            <button
                                data-testid="add_button"
                                className='bg-white hover:bg-gray-200 border-[1px] border-gray-200 text-[#1ba672] shadow-md font-bold rounded-lg px-3 absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%]'

                                onClick={() => { handleAddItem(item) }} // Passing item to dispatch function 
                            >
                                ADD
                            </button>
                            {/* absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] */}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ItemList;