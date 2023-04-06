import React, { Component }  from 'react';
const AdminPUReport = () => {
    return (
        <div className = 'flex ml-[27vw] mr-[3vw]'>
            <div className = 'flex h-[12vh] border-2 border-black mt-[5vh] '>
            <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex justify-center'>
                    Employee ID
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex justify-center'>
                    Name
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex justify-center'>
                    Email
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex justify-center'>
                    Password
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex justify-center'>
                    Is_active
                </div>
                <div className = 'pt-[3vh] border-r-0 border-black w-[14vw] font-inter text-xl flex justify-center'>
                    permission
                </div>
                
            </div>
            <div className = 'flex h-[12vh] mt-[5vh] ml-[2vw]'>
                <div className = 'pt-[3vh] border-2 border-black w-[14vw] font-inter text-xl flex justify-center bg-yellow-200'>
                    Modify
                </div>
                
            </div>
        </div>
        
        
    )
}

export default AdminPUReport;