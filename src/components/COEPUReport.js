import React, { Component }  from 'react';
const COEPUReport = ()=>{
    return (
        <div className = 'flex h-[12vh] border-2 border-black mt-[5vh] ml-[27vw]'>
            <div className = 'pt-[3vh] border-r-2 border-black w-[16vw] font-inter text-xl flex justify-center'>
                    Center ID
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[16vw] font-inter text-xl flex justify-center'>
                    Center Name
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[16vw] font-inter text-xl flex justify-center'>
                    Purpose
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[16vw] font-inter text-xl flex justify-center'>
                    Sponsor
                </div>
                <div className = 'pt-[3vh] border-r-0 border-black w-[16vw] font-inter text-xl flex justify-center'>
                    Department Name
                </div>
        </div>
    )
}
export default COEPUReport;