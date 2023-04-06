import React, { Component }  from 'react';
const UserSidebar = () => {
    return(
        <div className = "w-[25vw] h-screen bg-purple-100 border border-black border-4 flex flex-col">
            <div className= "w-full h-[20vh] bg-purple-500 border border-b-black border-t-0 border-r-0 border-l-0 border-4 font-fjalla text-2xl flex flex-col justify-center items-center">Pending Reports</div>
            <div className= "w-full h-[20vh] bg-purple-300 border border-b-black border-4 border-t-0 border-r-0 border-l-0 font-fjalla text-2xl flex flex-col justify-center items-center">Submitted Reports</div>
        </div>
    )
}

export default UserSidebar;