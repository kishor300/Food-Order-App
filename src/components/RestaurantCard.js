import React from "react";
import { imgCDN } from "../utils/constants.js";
import { Link } from "react-router";

const RestaurantCard = (props) => {

    // console.log("props.key ==== ", props.key);
    // console.log("props.resData ==== ", props.resData);

    const restaurantInfo = props.resData.info; // here resData is because, we passed props as resData in Body.js

    const imgURL = imgCDN + restaurantInfo.cloudinaryImageId;

    // console.log("imgURL ==== ", imgURL);


    return (
        <div
            data-testid="resto_card"
            // className="bg-[#f0f0f0] pt-1 px-1 pb-3 w-[200px] h-[360px] rounded-md
            // hover:border-[1px] border-black cursor-pointer"
            className="bg-[#f0f0f0] px-1 pt-1 pb-3 w-[45vw] sm:w-[30vw] md:w-[15vw] rounded-md
            hover:border-[1px] border-black cursor-pointer"
        >
            <Link to={"/restaurants/" + restaurantInfo.id}>
                <img
                    className="w-full rounded-md"
                    src={imgURL}
                    alt="res-card"
                />
            </Link>
            <p
                className="font-medium text-base whitespace-nowrap text-ellipsis overflow-clip">
                {restaurantInfo.name}
            </p>
            <div className="text-sm flex flex-col overflow-clip gap-y-1">
                <p className="whitespace-nowrap text-ellipsis overflow-clip">
                    {restaurantInfo.cuisines.join(", ")}
                </p>
                <p
                    ratings={restaurantInfo.avgRating}
                // attribute added for testing purpose
                >
                    {restaurantInfo.avgRating} stars
                </p>
                <p>{restaurantInfo.costForTwo}</p>
                <p>{restaurantInfo.sla.deliveryTime} minutes</p>
                <p>{restaurantInfo.areaName}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;