"use client";
import { useState } from "react";

export default function Header() {

    const [burgerBtn, setBurgerBtn] = useState(null);

    function handleClick() {
        setBurgerBtn(bgBtn => !bgBtn);
    }

    return (
        <header className="fixed top-0	w-full	z-10 bg-bl p-4 text-center	flex justify-between items-center ">
            <img src="/logo.png" alt="Logo" className="w-16 h-auto " />
            <nav className="grow sm:static relative" >
                <ul className={!burgerBtn ? "text-white items-center justify-center p-0 list-none  sm:flex sm:z-0 sm:bg-transparent sm:flex-row sm:static sm:inset-0 sm:inset-0 "
                    : "hidden   z-10 	bg-bl flex-col   absolute  top-0   left-0 "}>
                    <li className="sm:mr-4 mr-0 sm:mb-0 mb-4 text-lg	"><a href="#" className="hover:bg-gray-700 px-4 py-2 rounded">Home</a></li>
                    <li className="sm:mr-4 mr-0 sm:mb-0 mb-4 text-lg	"><a href="#services" className="hover:bg-gray-700 px-4 py-2 rounded">Services</a></li>
                    <li className="sm:mr-4 mr-0 sm:mb-0 mb-4 text-lg	"><a href="#contact_us" className="hover:bg-gray-700 px-4 py-2 rounded">Contact</a></li>
                </ul>
            </nav>
            <a href="#" className="icon block sm:hidden text-white text-xl mr-4" onClick={handleClick} >
                <i className="fa fa-bars"></i>
            </a>
        </header>
    );
}
