import React, { Component }  from 'react';
const UserPUReport = (props) => {
    return (
        <div className = 'flex w-[75vw] h-[12vh] border-2 border-black mt-[5vh] ml-[27vw]'>
            <div className = 'pt-[3vh] border-r-2 border-black w-[15vw] font-inter text-xl flex flex-col items-center justify-center '>
                    <p>Employee ID</p>
                    <p>{props.id}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[15vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Name</p>
                    <p>{props.name}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[15vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Email</p>
                    <p>{props.email}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[15vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Status</p>
                    <p>{props.status}</p>
                </div>
                <div className = 'pt-[3vh] border-r-0 border-black w-[15vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Permissions</p>
                    <p>{props.permissions}</p>
                </div>
                
        </div>
    )
}

export default UserPUReport;