import React, { Component }  from 'react';
const PowerUserReport = ()=>{
    return (
        <div className = 'flex w-[80vw] h-[12vh] border-2 border-black mt-[5vh] ml-[27vw]'>
            <div className = 'pt-[3vh] border-r-2 border-black w-[16vw] font-inter text-xl flex justify-center'>
                    Report Id
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[16vw] font-inter text-xl flex justify-center'>
                    Submission Date
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[16vw] font-inter text-xl flex justify-center'>
                    Due Date
                </div>
                <div className = 'border-r-2 border-black w-[16vw] font-inter text-xl flex items-center justify-center'>
                    Download PDF
                </div>
                <div className = 'border-r-0 border-black w-[16vw] font-inter text-xl flex items-center justify-center'>
                    Status
                </div>
        </div>
    )
}
export default PowerUserReport;