import axios from 'axios';
import React, { Component, useState }  from 'react';
import { baseUrl, headers } from '../constants';
const AdminPUReport = (props) => {
    const [deleted,setDeleted] = useState(false)
    const deleteUser  = async (id)=>{
        const response = await axios.delete(`${baseUrl}/admin/delete-coe?center_id=${id}`,headers);
        console.log(response.data)
        console.log('deleted')
        if (200<=response.status<=300)
            setDeleted(true)
        
    }
    return (
        <div className = {`${deleted?"hidden":"visible"} flex ml-[27vw] mr-[3vw]`}>
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
                <div onClick={()=>{
                    deleteUser(props.id)
                }} 
                className = 'pt-[3vh] border-2 ml-[1vw] border-black w-[14vw] font-inter text-xl flex justify-center bg-red-500'>
                    Delete
                </div>
            </div>
        </div>
        
        
    )
}

export default AdminPUReport;