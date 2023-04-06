import React, { Component }  from 'react';
import { baseUrl } from '../constants';
const UserReport = (props)=>{
    return (
        <div className = 'flex w-[60vw] h-[12vh] border-2 border-black mt-[5vh] '>
            <div className = 'pt-[3vh] border-r-2 border-black w-[15vw] font-inter text-xl flex justify-center items-center flex-col'>
                    <p>Report Id</p>
                    <p>{props.id}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[15vw] font-inter text-xl flex justify-center items-center flex-col'>
                    <p>Submission Date</p>
                    <p>{props.submissionDate}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[15vw] font-inter text-xl flex justify-center items-center flex-col'>
                    <p>Due Date</p>
                    <p>{props.dueDate}</p>
                </div>
                <div className = 'border-r-0 border-black w-[15vw] font-inter text-xl flex items-center justify-center flex-col'>
                    <a href={`${baseUrl}/users/generate-report?report_id=${props.id}`}>Download PDF</a>
                </div>
        </div>
    )
}
export default UserReport;