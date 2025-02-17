import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    // const { loggedInUser } = useContext(UserContext); // useContext Example

    // Reading data from store OR Subscribing to redux_store using `useSelector` Hook
    const cartItems = useSelector((store) => { return (store.cart.items) }); // path of appStore and cartSlice

    console.log('ReduxStore cartItems : ', cartItems);

    return (
        <div
            className="header flex justify-between items-center p-[2px] h-auto px-2 
            sticky top-0 z-10 backdrop-blur"
        >
            {/* Logo overflow-hidden py-0 px-3 */}
            <div className="h-10 sm:h-[60px]">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo-IMG"
                        // className="h-full box-border scale-[1.9]"
                        className="h-full box-border"
                    />
                </Link>
            </div>
            {/* Nav items */}
            <div className="">
                <ul
                    className="flex items-center gap-2 sm:gap-7 list-none font-medium text-xs sm:text-lg">
                    {/* <li>
                        User :{loggedInUser}
                    </li> */}
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/cart"
                            data-testid="my_cart"
                            cart-count={cartItems.length}
                        >
                            Cart ({cartItems.length})
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/grocery">Grocery</Link>
                    </li> */}
                    <button className="bg-orange-500 w-[52px] sm:w-20 rounded-3xl p-1 sm:p-2 sm:text-lg 
                    outline-none cursor-pointer text-white font-medium"
                        onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;