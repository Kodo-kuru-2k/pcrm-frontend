import React, { Component }  from 'react';
const AdminCOEReport = () => {
    return (
        <div className = 'flex ml-[27vw] mr-[3vw]'>
            <div className = 'flex h-[12vh] border-2 border-black mt-[5vh] '>
            <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex justify-center'>
                    Center ID
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex justify-center'>
                    Center Name
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex justify-center'>
                    Purpose
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex justify-center'>
                    sponser
                </div>
                <div className = 'pt-[3vh] border-r-0 border-black w-[14vw] font-inter text-xl flex justify-center'>
                    Department Name
                </div>
                
            </div>
            <div className = 'flex h-[12vh] mt-[5vh] ml-[2vw]'>
                <div className = 'pt-[3vh] border-2 border-black w-[14vw] font-inter text-xl flex justify-center bg-yellow-200'>
                    Modify
                </div>
                <div className = 'pt-[3vh] border-2 ml-[1vw] border-black w-[14vw] font-inter text-xl flex justify-center bg-red-500'>
                    Delete
                </div>
            </div>
        </div>
        
        
    )
}

export default AdminCOEReport;