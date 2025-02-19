import React from 'react';
import { Link } from "react-router";
import github_logo from '../assets/github_logo.png';
import instagram_logo from '../assets/instagram_logo.png';
import twitter_logo from '../assets/twitter_logo.png';
import facebook_logo from '../assets/facebook_logo.png';

const Footer = () => {
    return (
        <div className='border-t my-4'>
            <div className='grid grid-cols-2 w-[90vw] sm:w-[45vw] mx-auto p-1 gap-3 text-sm sm:text-base justify-items-center'>
                <div className='w-[35vw] sm:w-[15vw] ml-5'>
                    <h1 className='font-bold mb-1'>Company</h1>
                    <Link to="/"><p>About Us</p></Link>
                    <Link to="/"><p>Careers</p></Link>
                    <Link to="/"><p>Team</p></Link>
                </div>
                <div className='w-[35vw] sm:w-[15vw]'>
                    <h1 className='font-bold mb-1'>Contact Us</h1>
                    <Link to="/"><p>Help & Support</p></Link>
                    <Link to="/"><p>Partner with us</p></Link>
                </div>
                <div className='w-[35vw] sm:w-[15vw] ml-5'>
                    <h1 className='font-bold mb-1'>Legal</h1>
                    <Link to="/"><p>Terms & Conditions</p></Link>
                    <Link to="/"><p>Privacy Policy</p></Link>
                </div>
                <div className='w-[35vw] sm:w-[15vw]'>
                    <h1 className='font-bold mb-1'>Follow us on</h1>
                    {/* Icons */}
                    <div className="flex gap-x-3">
                        <Link to="/">
                            <img
                                src={github_logo}
                                alt="github"
                                className="h-6 sm:h-7 border border-gray-400 p-1 rounded-full box-border"
                            />
                        </Link>
                        <Link to="/">
                            <img
                                src={facebook_logo}
                                alt="facebook"
                                className="h-6 sm:h-7 border border-gray-400 p-1 rounded-full box-border"
                            />
                        </Link>
                        <Link to="/">
                            <img
                                src={twitter_logo}
                                alt="twitter"
                                className="h-6 sm:h-7 border border-gray-400 p-1 rounded-full box-border"
                            />
                        </Link>
                        <Link to="/">
                            <img
                                src={instagram_logo}
                                alt="instagram"
                                className="h-6 sm:h-7 border border-gray-400 p-1 rounded-full box-border"
                            />
                        </Link>
                    </div>
                </div>
                {/* Copyright */}
                <div className='col-span-2'>
                    <p className='text-gray-500 text-center text-xs md:text-sm'>Kishor Deshmukh © 2025</p>
                </div>
            </div>
        </div>

    )
}

export default Footer;