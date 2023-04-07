import React, { Component }  from 'react';
import { baseUrl } from '../constants';
const PowerUserReport = (props)=>{
    return (
        <div className = 'flex w-[80vw] h-[12vh] border-2 border-black mt-[5vh] ml-[27vw]'>
            <div className = 'pt-[3vh] border-r-2 border-black w-[16vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Report Id</p>
                    <p>{props.id}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[16vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Submission Date</p>
                    <p>{props.submissionDate}</p>
                </div>
                <div className = 'pt-[3vh] border-r-2 border-black w-[16vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <p>Due Date</p>
                    <p>{props.dueDate}</p>
                </div>
                <div className = 'border-r-2 border-black w-[16vw] font-inter text-xl flex flex-col items-center justify-center'>
                    <a href={`${baseUrl}/users/generate-report?report_id=${props.id}`}>Download PDF</a>
                </div>
                <div className = 'border-r-0 border-black w-[16vw] font-inter text-xl flex justify-center flex-col items-center'>
                    <p>Report Status</p>
                    <p>{props.status}</p>
                </div>
        </div>
    )
}
export default PowerUserReport;