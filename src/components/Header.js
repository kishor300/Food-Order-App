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

    console.log('cartItems : ', cartItems);

    return (
        <div
            className="header flex justify-between items-center p-[2px] h-auto mx-4 
            sticky top-0 z-10 backdrop-blur"
        >
            <div className="h-[60px] overflow-hidden py-0 px-3">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo-IMG"
                        className="h-full box-border scale-[1.9]"
                    />
                </Link>
            </div>
            <div className="">
                <ul className="p-0 m-0 text-[1.1em] flex items-center list-none font-medium">
                    {/* <li className="py-0 px-[10px] mr-[10px]">
                        User :{loggedInUser}
                    </li> */}
                    <li className="py-0 px-[10px] mr-[10px]">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="py-0 px-[10px] mr-[10px]">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="py-0 px-[10px] mr-[10px]">
                        <Link to="/cart"
                            data-testid="my_cart"
                            cart-count={cartItems.length}
                        >
                            Cart ({cartItems.length})
                        </Link>
                    </li>
                    {/* <li className="py-0 px-[10px] mr-[10px]">
                        <Link to="/grocery">Grocery</Link>
                    </li> */}
                    <button className="bg-orange-500 w-20 rounded-3xl p-2 text-lg 
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