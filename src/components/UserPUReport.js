import React, { Component }  from 'react';
const UserPUReport = () => {
    return (
        <div className = 'flex w-[91vw] h-[12vh] border-2 border-black mt-[5vh] ml-[27vw]'>
            <div className = 'pt-[3vh] border-r-2 border-black w-[15vw] font-inter text-xl flex justify-center'>
                    Employee ID
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[15vw] font-inter text-xl flex justify-center'>
                    Name
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[15vw] font-inter text-xl flex justify-center'>
                    Email
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[15vw] font-inter text-xl flex justify-center'>
                    Password
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[15vw] font-inter text-xl flex justify-center'>
                    Status
                </div>
                <div className = 'pt-[3vh] border-r-0 border-black w-[15vw] font-inter text-xl flex justify-center'>
                    Permissions
                </div>
                
        </div>
    )
}

export default UserPUReport;