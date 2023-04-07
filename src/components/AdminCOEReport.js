import axios from 'axios';
import React, { Component, useState }  from 'react';
import { baseUrl, headers } from '../constants';
const AdminCOEReport = (props) => {
    const [deleted,setDeleted] = useState(false)
    const deleteCOE  = async (id)=>{
        const response = await axios.delete(`${baseUrl}/admin/delete-coe?center_id=${id}`,headers);
        console.log(response.data)
        console.log('deleted')
        if (200<=response.status<=300)
            setDeleted(true)


    }
    return (
        <div className = {`${deleted?"hidden":"visible"} flex ml-[27vw] mr-[3vw] ${props.className}`}>
            <div className = 'flex h-[12vh] border-2 border-black mt-[5vh] '>
            <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Center ID</p>
                    <p>{props.id}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Center Name</p>
                    <p>{props.name}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Purpose</p>
                    <p>{props.purpose}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Sponsor</p>
                    <p>{props.sponsor}</p>
                </div>
                <div className = 'pt-[3vh] border-r-0 border-black w-[14vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Department Name</p>
                    <p>{props.dept_name}</p>
                </div>
                
            </div>
            <div className = 'flex h-[12vh] mt-[5vh] ml-[2vw]'>
                <div className = 'pt-[3vh] border-2 border-black w-[14vw] font-inter text-xl flex justify-center bg-yellow-200'>
                    Modify
                </div>
                <div onClick={()=>{
                    deleteCOE(props.id)
                }} 
                className = 'pt-[3vh] border-2 ml-[1vw] border-black w-[14vw] font-inter text-xl flex justify-center bg-red-500'>
                    Delete
                </div>
            </div>
        </div>
        
        
    )
}

export default AdminCOEReport;