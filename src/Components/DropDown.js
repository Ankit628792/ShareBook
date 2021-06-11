import React, { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import "./DropDown.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function DropDown({ className, items, defaultItem }) {
    const [selected, setSelected] = useState(defaultItem);
    const [dropDown, setDropDown] = useState(false);

    return (
        <>
            <button type="button" role="tab" className="flex text-sm rounded-full focus:outline-none focus:border-none focus:shadow-sm items-center" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDropDown((dropDown) => !dropDown);
            }}>
                <img role="tab" className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                {selected} <KeyboardArrowDownRoundedIcon className={dropDown ? "dropDown__icon dropDownOpen" : "dropDown__icon" } />
            </button>
            {dropDown && (
                <motion.ul
                    className="dropDown__menu"
                    initial={{ opacity: 0, y: "-10%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-10%" }}
                >
                    <>
                        <li>
                            <NavLink to="/myaccount" className="block px-4 py-2 text-sm text-gray-700 cursor-pointer">My Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/bookmarks" className="block px-4 py-2 text-sm text-gray-700 cursor-pointer">Bookmark</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signin" className="block px-4 py-2 text-sm text-gray-700 cursor-pointer">Sign Out</NavLink>
                        </li>
                    </>
                </motion.ul>
            )}
        </>
    );
}
export default DropDown;
