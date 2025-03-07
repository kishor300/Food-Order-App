import React, { useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import RES_INFO from '../utils/mock_resInfo.json';

function RestaurantMenu() {

    /*
    // [1] Dynamic Way
    const { resId } = useParams(); // Accessing parameters from URL
    // Custome Hook
    const resInfo = useRestaurantMenu(resId);
    console.log(`resInfo : `, resInfo);
    */
    // [2] Static Way
    const resInfo = RES_INFO;

    console.log("Menu Info ===== ", resInfo?.data?.cards[2]?.card?.card?.info);

    const { name, avgRating, cuisines, costForTwoMessage, cloudinaryImageId, totalRatingsString } =
        resInfo?.data?.cards[2]?.card?.card?.info || {};

    // =============================================================================================

    // 1] Manually find itemCards in cards[4] array
    // const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card || {};

    // 2] Dynamically find the correct card containing itemCards in cards[4] array
    const allMenuCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    console.log('allMenuCards ==> ', allMenuCards);

    /* 
    // Used for Old Way
    let itemCards = [];

    for (let i = 0; i < allMenuCards.length; i++) {
        const card = allMenuCards[i]?.card?.card;
        if (card?.itemCards) {
            itemCards = card.itemCards; // Assign itemCards if found
            break; // Exit loop once found
        }
    }
    */

    // console.log("itemCards  ===== ", itemCards);

    // =============================================================================================
    // Logic for Category in Restaurant Menu
    const menuCategories = allMenuCards.filter((my_category) => {
        return (
            my_category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    });
    console.log('RestaurantMenu --> menuCategories : ', menuCategories);

    // =============================================================================================
    // State varible for Show Item-Card of Restaurant Menu
    const [showIndex, setShowIndex] = useState(null);

    // function for toggle RestaurantCategory
    const toggleCategory = (index) => {

        // IF `prev-category-index` IS EQUAL TO `clicked-category-index` THEN SHOW null
        // ELSE UPDATE showIndex TO `clicked-category-index`
        return showIndex === index ? setShowIndex(null) : setShowIndex(index);
    }

    // =============================================================================================

    if (resInfo === null) {
        return (<Shimmer />)
    } else {
        return (
            <>
                <div className='text-center font-bold mx-2'>
                    <h1 className='my-4 text-2xl'>{name}</h1>
                    <p className='text-lg'>
                        {cuisines.join(" ,")} - {costForTwoMessage}
                    </p>
                    <p>
                        <span className='text-green-800'>★ {avgRating}</span>
                        <span className='text-gray-500'> ({totalRatingsString})</span>
                    </p>
                </div>
                {/* Categories Accordion */}

                {menuCategories.map((my_category, index) => {
                    return (
                        <RestaurantCategory
                            key={my_category.card.card.title}  // No unique Id available other than title
                            data={my_category.card.card}
                            showItems={index === showIndex ? true : false}
                            setShowIndex={() => { return toggleCategory(index) }
                            }
                        // Passing toggleCategory as a empty Function that returns `toggleCategory(index)` when it called in ReastaurantCategory Component
                        />
                    )
                })}

                {/* Used for Old Way */}
                {/* <ul>
                    {
                        itemCards.map((item) => {
                            return (
                                <li key={item.card.info.id}>
                                    {item.card.info.name} -{" ₹"}
                                    {(item.card.info.defaultPrice) / 100 || (item.card.info.price) / 100}
                                </li>
                            )
                        })
                    }
                </ul > */}
            </>
        )
    }

}

export default RestaurantMenu;