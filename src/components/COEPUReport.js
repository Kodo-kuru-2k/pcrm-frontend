import React, { Component }  from 'react';
const COEPUReport = (props)=>{
    return (
        <div className = 'flex h-[12vh] border-2 border-black mt-[5vh] ml-[27vw]'>
            <div className = 'pt-[3vh] border-r-2 border-black w-[16vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Center ID</p>
                    <p>{props.id}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[16vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Center Name</p>
                    <p>{props.centerName}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[16vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Purpose</p>
                    <p>{props.purpose}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[16vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Sponsor</p>
                    <p>{props.sponsor}</p>
                </div>
                <div className = 'pt-[3vh] border-r-0 border-black w-[16vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Department Name</p>
                    <p>{props.dept_name}</p>
                </div>
        </div>
    )
}
export default COEPUReport;