import React, { Component }  from 'react';
const AdminPUReport = (props) => {
    return (
        <div className = 'flex ml-[27vw] mr-[3vw]'>
            <div className = 'flex h-[12vh] border-2 border-black mt-[5vh] '>
            <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex justify-center flex-col items-center'>
                    <p>Employee ID</p>
                    <p>{props.id}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex justify-center flex-col items-center'>
                    <p>Name</p>
                    <p>{props.name}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex justify-center flex-col items-center'>
                    <p>Email</p>
                    <p>{props.email}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex justify-center flex-col items-center'>
                    <p>Status</p>
                    <p>{props.status}</p>
                </div>
                <div className = 'pt-[3vh] border-r-0 border-black w-[14vw] font-inter text-xl flex justify-center flex-col items-center'>
                    <p>Permissions</p>
                    <p>{props.permissions}</p>
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