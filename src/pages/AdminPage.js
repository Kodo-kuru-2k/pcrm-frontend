import React, { Component }  from 'react';
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import AdminUserReport from "../components/AdminUserReport";
import AdminCOEReport from "../components/AdminCOEReport";
import AdminPUReport from "../components/AdminPUReport";
import TopBar from "../components/TopBar";
import ModalUser from '../components/ModalUser';
import { baseUrl, headers } from '../constants';
import axios from 'axios';
import ModalCOE from '../components/ModalCOE';
import ModalReport from '../components/ModalReport';



const AdminPage = () => {

    const [flag, setFlag] = useState(0)
    const [userflag, setUFlag] = useState(false)
    const [reports, setReports] = useState([])
    const [coes, setCOES] = useState([])
    const [users, setUsers] = useState([])
    
    

    useEffect(()=>{
        const getData = async ()=>{
            const response = await axios.get(`${baseUrl}/admin/all-reports`,headers);
            //console.log(response)
            setReports(response.data)
        }
        getData();    
    },[])

    useEffect(()=>{
        const getData = async ()=>{
            const response = await axios.get(`${baseUrl}/admin/all-coe`,headers);
            console.log(response)
            setCOES(response.data)
        }
        getData();
    },[])

    useEffect(()=>{
        const getData = async ()=>{
            const response = await axios.get(`${baseUrl}/admin/all-users`,headers);
            //console.log(response)
            setUsers(response.data)
        }
        getData();
    },[])

    return (
        <div className = 'flex flex-col'>
            <TopBar/>
            <div className = " flex mt-[5vh] bg-purple-50 w-screen">
                <div className = "w-[25vw] h-screen bg-purple-100 border-black border-4 border-t-0 flex flex-col fixed  ">
                    <div className= {`w-full h-[20vh] ${flag===0?"bg-purple-300":"bg-purple-500"} border border-b-black border-t-0 border-r-0 border-l-0 border-4 font-fjalla text-2xl flex flex-col justify-center items-center hover:cursor-pointer`} onClick={() => {setFlag(0)}}>All Reports</div>
                    <div className= {`w-full h-[20vh] ${flag===1?"bg-purple-300":"bg-purple-500"}  border border-b-black border-4 border-t-0 border-r-0 border-l-0 font-fjalla text-2xl flex flex-col justify-center items-center hover:cursor-pointer`} onClick={() => {setFlag(1)}}>All COEs</div>
                    <div className= {`w-full h-[20vh] ${flag===2?"bg-purple-300":"bg-purple-500"}  border border-b-black border-4 border-t-0 border-r-0 border-l-0 font-fjalla text-2xl flex flex-col justify-center items-center hover:cursor-pointer`} onClick={() => {setFlag(2)}}>All Users</div> 
                </div>
                

            {flag===0 && <div className="flex flex-col items-center ">
                {userflag && <ModalReport/>}
                    <div className = {`rounded-md border-2 border-black w-[15vw] h-[12vh] flex text-xl font-inter items-center justify-center ${!userflag?"visible":"hidden"}`}
                    onClick={()=>{setUFlag(true)}}>
                        Create New Report
                    </div>
                {reports.map((r)=><AdminUserReport id = {r["report_id"]} submissionDate = {r["submission_date"]} dueDate = {r["due_date"]} status = {r["report_status"]}/>)}

            </div>}

            {flag===1 && <div className="flex flex-col items-center mt-[1vh]">
                {userflag && <ModalCOE/>}
                    <div className = {`rounded-md border-2 border-black w-[15vw] h-[12vh] flex text-xl font-inter items-center justify-center ${!userflag?"visible":"hidden"}`}
                    onClick={()=>{setUFlag(true)}}>
                        Create New COE
                    </div>
                {coes.map((r)=><AdminCOEReport id = {r["center_id"]} name = {r["center_name"]} purpose = {r["purpose"]} sponsor = {r["sponsor"]} dept_name = {r["department_name"]}/>)}
            </div>}


            {flag===2 && <div className="flex flex-col items-center mt-[1vh]">
                {userflag && <ModalUser/>}
                    <div className = 'rounded-md border-2 border-black w-[15vw] h-[12vh] flex text-xl font-inter items-center justify-center'
                    onClick={()=>{setUFlag(true)}}>
                        Create New User
                    </div>
                    <div>
                        {users.map((r)=><AdminPUReport id = {r["emp_id"]} name = {r["name"]} email = {r["email"]} status = {r["is_active"]} permissions = {r["permissions"]}/>)}
                    </div>
                    
                

            </div>}

            </div>
        </div>
    
    )
    
    
}

export default AdminPage;