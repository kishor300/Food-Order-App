import React from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    console.log(`RestaurantCategory --> data :`, data);

    // const [showItems, setShowItems] = useState(false);

    return (
        <div className='w-6/12 mx-auto bg-gray-50 shadow-md my-4'>
            {/* Accordion Header */}
            <div
                data-testid='accordion_header'
                className='flex justify-between p-4 font-bold cursor-pointer'
                onClick={setShowIndex}
            >
                <span>
                    {data.title}-({data.itemCards.length})
                </span>
                <span>
                    {/* Change Arrow Up & Down */}
                    {showItems ? <span>▲</span> : <span>▼</span>}
                </span>
            </div>

            {/* Accordion Body */}
            {showItems && <ItemList items={data.itemCards} />}
            {/* ABOVE `&& operator` logic is as same as BELOW */}
            {/* {showItems ? <ItemList items={data.itemCards} /> : null} */}
        </div>
    )
}

export default RestaurantCategory;