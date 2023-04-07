import axios from 'axios';
import React, { Component,useState }  from 'react';
import { baseUrl, headers } from '../constants';
const AdminUserReport = (props) => {
        const [deleted,setDeleted] = useState(false)
    const deleteReport  = async (id)=>{
        const response = await axios.delete(`${baseUrl}/admin/delete-report?report_id=${id}`,headers);
        console.log(response.data)
        console.log('deleted')
        if (200<=response.status<=300)
            setDeleted(true)


    }
    return (
        <div className = {`${deleted?"hidden":"visible"} flex ml-[27vw] mr-[3vw]`}>
            <div className = 'flex h-[12vh] border-2 border-black mt-[5vh] '>
            <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Report ID</p>
                    <p>{props.id}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Submission Date</p>
                    <p>{props.submissionDate}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Due Date</p>
                    <p>{props.dueDate}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[14vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <a href={`${baseUrl}/users/generate-report?report_id=${props.id}`}>Download PDF</a>
                </div>
                <div className = 'pt-[3vh] border-r-0 border-black w-[14vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Status</p>
                    <p>{props.status}</p>
                </div>
            </div>
            <div className = 'flex h-[12vh] mt-[5vh] ml-[2vw]'>
                <div className = 'pt-[3vh] border-2 border-black w-[14vw] font-inter text-xl flex justify-center bg-yellow-200'>
                    Modify
                </div>
                <div onClick = {()=>{
                    deleteReport(props.id)
                }}
                 className = 'pt-[3vh] border-2 ml-[1vw] border-black w-[14vw] font-inter text-xl flex justify-center bg-red-500'>
                    Delete
                </div>
            </div>
        </div>
        
        
    )
}

export default AdminUserReport;