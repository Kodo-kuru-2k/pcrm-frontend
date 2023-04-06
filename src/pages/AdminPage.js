import React, { Component }  from 'react';
import {useState} from "react";
import { Link } from "react-router-dom";
import AdminUserReport from "../components/AdminUserReport";
import AdminCOEReport from "../components/AdminCOEReport";
import AdminPUReport from "../components/AdminPUReport";
import TopBar from "../components/TopBar";
import ModalUser from '../components/ModalUser';



const AdminPage = () => {

    const [flag, setFlag] = useState(0)
    const [userflag, setUFlag] = useState(false)

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
                
                <AdminUserReport/>
                <AdminUserReport/>
                <AdminUserReport/>
                <AdminUserReport/>
                <AdminUserReport/>

            </div>}

            {flag===1 && <div className="flex flex-col items-center mt-[1vh]">
                <div className = 'rounded-md border-2 border-black w-[15vw] h-[12vh] flex text-xl font-inter items-center justify-center'>
                    Create New COE
                </div>
                <AdminCOEReport/>
                <AdminCOEReport/>
                <AdminCOEReport/>
                <AdminCOEReport/>
                <AdminCOEReport/>
                <AdminCOEReport/>
            </div>}
            {flag===2 && <div className="flex flex-col items-center mt-[1vh]">
                {userflag && <ModalUser/>}
                    <div className = 'rounded-md border-2 border-black w-[15vw] h-[12vh] flex text-xl font-inter items-center justify-center'
                    onClick={()=>{setUFlag(true)}}>
                        Create New User
                    </div>
                    <div>
                        <AdminPUReport/>
                    <AdminPUReport/>
                    <AdminPUReport/>
                    <AdminPUReport/>
                    <AdminPUReport/>
                    <AdminPUReport/>
                    </div>
                    
                

            </div>}

            </div>
        </div>
    
    )
    
    
}

export default AdminPage;