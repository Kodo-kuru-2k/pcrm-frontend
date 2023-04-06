import React, { Component }  from 'react';
const TopBar = ()=>{
    return (
        <div className = 'flex bg-purple-900 w-screen h-[5vh] text-2xl text-white items-center font-inter font-semibold fixed '>
            <p className = 'self-center justify-self-center ml-[45vw]'>COE Management System</p>
            <div className  = 'text-xl font-inter ml-[20vw]'>
                Hello puthucode
            </div>
            <div className = 'w-[2vw] h-[2vw] ml-[8px] rounded-full bg-purple-300 text-lg flex items-center justify-center text-purple-900'>
                P
            </div>
        </div>
    )
}

export default TopBar;