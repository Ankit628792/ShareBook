import React, { useState, useEffect } from "react";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import "./DropDown.css";
import Avatar from '@material-ui/core/Avatar';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function DropDown({item, userName}) {
    
    const [dropDown, setDropDown] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDropDown(false)
        }, 3000);
        return () => clearTimeout(timer);
      }, [dropDown]);

    return (
        <>
            <button type="button" role="tab" className="flex text-sm rounded-full focus:outline-none focus:border-none items-center" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDropDown((dropDown) => !dropDown);
            }}>
                <Avatar className="btn-bg">{userName}</Avatar>
                 <KeyboardArrowDownRoundedIcon className={dropDown ? "dropDown__icon dropDownOpen" : "dropDown__icon" } />
            </button>
            {dropDown && (
                <motion.ul
                    className="dropDown__menu"
                    initial={{ opacity: 0, y: "-10%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-10%" }}
                >
                    <>
                    {
                        item.map((item) => (
                             <li key={item.id}>
                            <NavLink to={item.redirect} className="block px-4 py-2 text-sm h-text cursor-pointer">{item.navText}</NavLink>
                        </li>
                        ))
                    }
                    </>
                </motion.ul>
            )}
        </>
    );
}
export default DropDown;
