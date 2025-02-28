import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png"
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { Menu, X } from 'lucide-react';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [btnName, setBtnName] = useState("Login");

    // const { loggedInUser } = useContext(UserContext); // useContext Example

    // Reading data from store OR Subscribing to redux_store using `useSelector` Hook
    const cartItems = useSelector((store) => { return (store.cart.items) }); // path of appStore and cartSlice

    console.log('ReduxStore cartItems : ', cartItems);

    return (
        <>
            <div className="header flex justify-between items-center h-[52px] md:h-[64px] px-2 sticky top-0 z-10 backdrop-blur"
            >
                {/* Left Side */}
                <div className="flex items-center space-x-3 ">
                    {/* Hamburger */}
                    <div className="md:hidden mt-3">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="h-11 md:h-[60px]">
                        <Link to="/">
                            <img src={logo} alt="Logo" className="h-full box-border" />
                        </Link>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-3">
                    {/* Account */}
                    <div className="h-7 md:hidden">
                        <Link to="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="black"
                                height="34px"
                            >
                                <circle cx="12" cy="8" r="4" stroke="black" strokeWidth="1.5px" fill="none" />
                                <path
                                    d="M4 20c0-4 4-6 8-6s8 2 8 6"
                                    stroke="black"
                                    strokeWidth="1.5px"
                                    fill="none"
                                />
                            </svg>

                        </Link>
                    </div>

                    {/* Cart in Mobile */}
                    < div className="relative h-7 md:hidden">
                        <Link to="/cart" data-testid="my_cart" cart-count={cartItems.length}>
                            <img src={cart_icon} alt="Cart" className="h-full box-border" />
                            <p className="text-[13px] absolute left-[9px] top-[2px] font-bold text-orange-500 w-4 text-center">
                                {cartItems.length}
                            </p>
                        </Link>
                    </div>

                    {/* Laptop */}
                    <ul className="hidden md:flex items-center space-x-2 md:space-x-7 list-none font-medium text-xs md:text-lg">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/">Account</Link>
                        </li>
                        {/* Login */}
                        {/* <button
                            className="bg-orange-500 w-[52px] sm:w-20 rounded-3xl p-1 sm:p-2 sm:text-lg outline-none cursor-pointer text-white font-medium"
                            onClick={() => {
                                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                            }}
                        >
                            {btnName}
                        </button> */}
                        <li>
                            {/* Cart in Laptop */}
                            < div className="relative h-10">
                                <Link to="/cart" data-testid="my_cart" cart-count={cartItems.length}>
                                    <img src={cart_icon} alt="Cart" className="h-full box-border" />
                                    <p className=" absolute left-3 top-[2px] font-bold text-orange-500 w-6 text-center">
                                        {cartItems.length}
                                    </p>
                                </Link>
                            </div>
                        </li>
                        {/* <li>
                            User :{loggedInUser}
                        </li> */}
                    </ul>
                </div >

            </div >

            {/* Mobile */}
            {
                isOpen && (
                    <ul className="bg-[#f0f0f0] z-10 fixed top-auto w-full shadow-lg md:hidden p-4 space-y-2 list-none font-medium text-xs md:text-lg"
                    >
                        {/* <li>
                    User :{loggedInUser}
                </li> */}
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/">Partner with Us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/">Privacy Policy</Link>
                        </li>
                    </ul>
                )
            }
        </>

    );
};

export default Header;