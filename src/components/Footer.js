import React from 'react';
import { Link } from "react-router";
import github_logo from '../assets/github_logo.png';
import instagram_logo from '../assets/instagram_logo.png';
import twitter_logo from '../assets/twitter_logo.png';
import facebook_logo from '../assets/facebook_logo.png';

const Footer = () => {
    return (
        <div className='my-4 flex flex-col gap-y-4 border-t p-2 bottom-0'>
            {/* Icons */}
            <div className="flex justify-center gap-x-10">
                <Link to="/">
                    <img
                        src={github_logo}
                        alt="github"
                        className="h-8 border border-gray-400 p-1 rounded-full box-border"
                    />
                </Link>
                <Link to="/">
                    <img
                        src={facebook_logo}
                        alt="facebook"
                        className="h-8 border border-gray-400 p-1 rounded-full box-border"
                    />
                </Link>
                <Link to="/">
                    <img
                        src={twitter_logo}
                        alt="twitter"
                        className="h-8 border border-gray-400 p-1 rounded-full box-border"
                    />
                </Link>
                <Link to="/">
                    <img
                        src={instagram_logo}
                        alt="instagram"
                        className="h-8 border border-gray-400 p-1 rounded-full box-border"
                    />
                </Link>
            </div>
            {/* Nav */}
            <div className="flex justify-center text-sm gap-x-5 sm:gap-x-10 ">
                <Link><p>Home</p></Link>
                <Link><p>Services</p></Link>
                <Link><p>About</p></Link>
                <Link><p>Terms</p></Link>
                <Link><p>Privacy Policy</p></Link>
            </div>
            {/* Copyright */}
            <div className='text-gray-500 text-center text-xs'>Kishor Deshmukh © 2025</div>
        </div>
    )
}

export default Footer;