import React, { Component }  from 'react';
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import PowerUserReport from "../components/PowerUserReport";
import COEPUReport from "../components/COEPUReport";
import UserPUReport from "../components/UserPUReport";
import TopBar from "../components/TopBar";
import { baseUrl, headers } from '../constants';
import axios from 'axios';

const COEPage = () => {

    const [flag, setFlag] = useState(0)
    const [reports, setReports] = useState([])
    const [coes, setCOES] = useState([])
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const getData = async ()=>{
            const response = await axios.get(`${baseUrl}/power-user/all-reports`,headers);
            //console.log(response)
            setReports(response.data)
        }
        getData();    
    },[])

    useEffect(()=>{
        const getData = async ()=>{
            const response = await axios.get(`${baseUrl}/power-user/all-coe`,headers);
            console.log(response)
            setCOES(response.data)
        }
        getData();
    },[])

    useEffect(()=>{
        const getData = async ()=>{
            const response = await axios.get(`${baseUrl}/power-user/all-users`,headers);
            console.log(response)
            setUsers(response.data)
        }
        getData();
    },[])


    return (
        <div className = 'flex flex-col'>
            <TopBar/>
            <div className = "bg-purple-50 w-screen flex mt-[5vh]">
                <div className = "w-[25vw] h-screen bg-purple-100 border border-black border-4 flex flex-col fixed  ">
                    <div className= {`w-full h-[20vh] ${flag===0?"bg-purple-300":"bg-purple-500"} border border-b-black border-t-0 border-r-0 border-l-0 border-4 font-fjalla text-2xl flex flex-col justify-center items-center hover:cursor-pointer`} onClick={() => {setFlag(0)}}>All Reports</div>
                    <div className= {`w-full h-[20vh] ${flag===1?"bg-purple-300":"bg-purple-500"}  border border-b-black border-4 border-t-0 border-r-0 border-l-0 font-fjalla text-2xl flex flex-col justify-center items-center hover:cursor-pointer`} onClick={() => {setFlag(1)}}>All COEs</div>
                    <div className= {`w-full h-[20vh] ${flag===2?"bg-purple-300":"bg-purple-500"}  border border-b-black border-4 border-t-0 border-r-0 border-l-0 font-fjalla text-2xl flex flex-col justify-center items-center hover:cursor-pointer`} onClick={() => {setFlag(2)}}>All Users</div> 
                </div>

            {flag===0 && <div className="flex flex-col items-center ">
                
                {reports.map((r)=><PowerUserReport id = {r["report_id"]} submissionDate = {r["submission_date"]} dueDate = {r["due_date"]} 
                status = {r["report_status"]} />)}
            </div>}

            {flag===1 && <div className="flex flex-col items-center ">

                {coes.map((r)=><COEPUReport id = {r["center_id"]} centerName = {r["center_name"]} purpose = {r["purpose"]} 
                sponsor = {r["sponsor"]} dept_name = {r["department_name"]} />)}
            </div>}

            {flag===2 && <div className="flex flex-col tems-center ">

                {users.map((r)=><UserPUReport id = {r["emp_id"]} name = {r["name"]} email = {r["email"]} 
                password = {r["password"]} status = {r["is_active"]} permissions = {r["permissions"]} />)}

            </div>}

            </div>
        </div>
    )

    
    
}

export default COEPage;