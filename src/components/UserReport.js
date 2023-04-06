import React, { Component }  from 'react';
const UserReport = ()=>{
    return (
        <div className = 'flex w-[60vw] h-[12vh] border-2 border-black mt-[5vh] '>
            <div className = 'pt-[3vh] border-r-2 border-black w-[15vw] font-inter text-xl flex justify-center'>
                    Report Id
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[15vw] font-inter text-xl flex justify-center'>
                    Submission Date
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[15vw] font-inter text-xl flex justify-center'>
                    Due Date
                </div>
                <div className = 'border-r-0 border-black w-[15vw] font-inter text-xl flex items-center justify-center'>
                    Download PDF
                </div>
        </div>
    )
}
export default UserReport;