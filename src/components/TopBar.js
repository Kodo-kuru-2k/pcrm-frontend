import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import { user_type } from '../constants';
const TopBar = ()=>{
    return (
        <div className = 'flex bg-purple-900 w-screen h-[5vh] text-2xl text-white items-center font-inter font-semibold fixed '>
            <p className = 'self-center justify-self-center ml-[45vw]'>COE Management System</p>
            <div className  = 'text-xl font-inter ml-[20vw]'>
                Hello {user_type.type}
            </div>
            <Link to="/" className = 'w-[2vw] h-[2vw] ml-[8px] rounded-full bg-purple-300 text-lg flex items-center justify-center text-purple-900'>
                {user_type.type.charAt(0)}
            </Link>
        </div>
    )
}

export default TopBar;