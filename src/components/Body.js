import React, { useState, useEffect, useContext } from "react";
// import mockData from "../utils/mockData.json" assert {type: 'json'};
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import WithPromotedLabel from "./WithPromotedLabel";
import UserContext from "../utils/UserContext";
import JSON_DATA from "../utils/mock_jsonData_main.json";

// const restoData = mockData.data.restaurants;

// Access promoted resto from High-Order-Component `WithPromotedLabel`
const PromotedRestaurantCard = WithPromotedLabel(RestaurantCard);

const Body = () => {

    // Declaring state_varaible and its function to update value
    // const [restoArr, setRestoArr] = useState(restoData);
    const [restoArr, setRestoArr] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        // [1] Usign Dynamic Data

        // // Below code needs CORS extension to be installed in Browser.
        // // CORS plugin bypass the CORS issue.
        // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING');

        // const jsonData = await data.json();
        // console.log("jsonData -->", jsonData);

        // [2] Usign Static Data
        const jsonData = JSON_DATA;

        const jsonDataCards = jsonData?.data?.cards || [];
        console.log('jsonDataCards : ', jsonDataCards);

        let restoData;
        for (let i = 0; i < jsonDataCards.length; i++) {
            const myRestaurants = jsonDataCards[i]?.card?.card;
            if (myRestaurants?.gridElements?.infoWithStyle?.restaurants) {
                console.log(` i'th card has restaurant data : `, i);
                restoData = myRestaurants?.gridElements?.infoWithStyle?.restaurants;
                break;
            }
        }

        console.log("hierarchy -->", restoData);

        setRestoArr(restoData);
    }

    // return <Shimmer />
    return restoArr.length === 0 ? (<Shimmer />) : (
        <BodyWithData restoArr={restoArr} setRestoArr={setRestoArr} />
    );

};

const BodyWithData = ({ restoArr, setRestoArr }) => {

    console.log("Body Rendered !!");

    // Another state variable used to filter restaurants
    const [filteredRestoArr, setFilteredRestoArr] = useState(restoArr);

    // state variable for input search
    const [searchText, setSearchText] = useState("");

    // // Accessing the values passed by context provider from App.js
    // const { loggedInUser, setUserName } = useContext(UserContext);

    return (
        <div className="body mx-2 sm:mx-4">

            {/* Use Of Context */}
            {/* <div>
                <label>User Name</label>
                <input
                    type="text"
                    className="border-[0.5px] m-2 p-2 rounded-md outline-none"
                    // `loggedInUser` is the Context from UserContext
                    value={loggedInUser}
                    // Context will update when this callback fun is called on every change
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div> */}

            {/* Action */}
            <div className="flex gap-4 w-fit mx-auto my-4 text-xs sm:text-base">

                {/* Search Restaurant */}
                <div className="flex items-center">
                    <input
                        data-testid="search-input"
                        type="text"
                        className="h-8 p-2 rounded-l-[40px] outline-none border-[0.5px] border-[#c6c6c6] border-r-0 
                        w-[45vw] sm:w-fit"
                        placeholder="Search"
                        value={searchText}
                        onChange={(event) => {
                            setSearchText(event.target.value);
                        }}
                    />
                    <button
                        data-testid="search-button"
                        className="border-[0.5px] p-1 rounded-r-[40px] bg-orange-500
                         outline-none border-[#c6c6c6] h-8
                         w-[10vw] sm:w-fit"
                        onClick={() => {
                            // search restaurant from main array
                            const searchedResto = restoArr.filter((res) => {
                                return (
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                    // Never forget to write this in return() else won't work !
                                )
                            })
                            console.log("searchedResto :", searchedResto);
                            // update only to filtered array
                            setFilteredRestoArr(searchedResto);

                        }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            height="18"
                            width="18"
                            viewBox="0 0 24 24"
                            focusable="false"
                            aria-hidden="true"
                            style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}
                        >
                            <path
                                clipRule="evenodd"
                                d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                                fillRule="evenodd"
                                stroke="white"
                                strokeWidth="1"
                            />
                        </svg>
                    </button>
                </div>

                {/* Filter Restaurant */}
                <button
                    className="h-8 m-2 cursor-pointer bg-orange-500 rounded-md px-1 text-white font-medium 
                    w-[26vw] sm:w-fit box-border"
                    onClick={() => {

                        const filteredResto = restoArr.filter((res) => {
                            return res.info.avgRating >= 4.5;
                        });

                        // console.log("filteredResto = ", filteredResto);

                        // update only to filtered array
                        setFilteredRestoArr(filteredResto);

                    }}
                >Top Restaurants</button>
            </div>

            {/* Restaurant Container */}

            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-2 justify-items-center">

                {/* {console.log("filteredRestoArr ==> ", filteredRestoArr)} */}

                {
                    filteredRestoArr.map((my_restaurant) => {

                        return (
                            <div key={my_restaurant.info.id}>
                                {
                                    my_restaurant.info.avgRating > 4.5
                                        ? <PromotedRestaurantCard resData={my_restaurant} />
                                        : <RestaurantCard resData={my_restaurant} />
                                }
                            </div>

                        )
                    })
                }
            </div>

        </div >
    );
}

export default Body;
