import React, { Component }  from 'react';
import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import UserReport from "../components/UserReport";
import { baseUrl, headers, user_type} from '../constants';
import TopBar from '../components/TopBar';

const UserPage = ()=>{

    const [flag,setFlag] = useState(true)
    const [reports,setReports] = useState([])
    useEffect(()=>{
        const getData = async ()=>{
            const response = await axios.get(`${baseUrl}/users/submitted-reports`,{headers:headers});
            setReports(response.data)
            console.log(JSON.parse(response.data[0]["report"]))
        }
        getData();
        
        
    },[])
    

return (
<div className = 'flex flex-col'>
<TopBar/>
<div className = "bg-purple-50 mt-[5vh] w-screen h-screen flex ">
    <div className = "w-[25vw] h-screen bg-purple-100 border border-black border-4 flex flex-col">
        <div className= {`w-full h-[20vh] ${flag===true?"bg-purple-300":"bg-purple-500"} border border-b-black border-t-0 border-r-0 border-l-0 border-4 font-fjalla text-2xl flex flex-col justify-center items-center hover:cursor-pointer`} onClick={() => {setFlag(true)}}>Pending Reports</div>
        <div 
      
        className= {`w-full h-[20vh] ${flag===false?"bg-purple-300":"bg-purple-500"}  border border-b-black border-4 border-t-0 border-r-0 border-l-0 font-fjalla text-2xl flex flex-col justify-center items-center hover:cursor-pointer`} onClick={() => {
            setFlag(false)
            }}>Submitted Reports</div>
    </div>

    {flag && <div className = "flex flex-col w-[70vw] items-center">
        <div className="flex px-[8vw] justify-between w-full">
            <p className="mt-[7vh] font-fjalla text-xl tracking-normal">Report Pending: </p>
            <p className="mt-[7vh] font-fjalla text-xl tracking-normal">Due Date: </p>
            <p className="mt-[7vh] font-fjalla text-xl tracking-normal">Remaining days: </p>
        </div>
        <div className="w-[60vw] h-[70vh] border-black border-2"></div>
            <div className="flex px-[8vw] justify-between w-full">
            <Link to= "/usrlog" className = "bg-purple-900 font-semibold text-white w-[12vw] h-[5vh] mt-[10vh] flex flex-col items-center justify-center rounded-md hover:bg-purple-700 hover:cursor-pointer ease-in duration-200"
                onClick={()=>{
                    
                    //redirect credentials to login page according to the user's privilege
                }}>
                <p>Submit</p>
            </Link>

            <Link to= "/usrlog" className = "bg-purple-900 font-semibold text-white w-[12vw] h-[5vh] mt-[10vh] flex flex-col items-center justify-center rounded-md hover:bg-purple-700 hover:cursor-pointer ease-in duration-200"
                onClick={()=>{
                    //redirect credentials to login page according to the user's privilege
                }}>
                <p>Save as Draft</p>
            </Link>
        </div>
    </div>}
    {!flag && <div className = "flex flex-col w-[70vw] items-center ">
        {reports.map((r)=><UserReport id = {r["report_id"]} submissionDate = {r["submission_date"]} dueDate = {r["due_date"]}  />)}
        
    </div>}
</div>
</div>

)
}

export default UserPage;











