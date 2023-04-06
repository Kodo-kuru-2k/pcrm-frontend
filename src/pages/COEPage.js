import React, { Component }  from 'react';
import {useState} from "react";
import { Link } from "react-router-dom";
import PowerUserReport from "../components/PowerUserReport";
import COEPUReport from "../components/COEPUReport";
import UserPUReport from "../components/UserPUReport";
import TopBar from "../components/TopBar";

const COEPage = () => {

    const [flag, setFlag] = useState(0)

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
                
                <PowerUserReport/>
                <PowerUserReport/>
                <PowerUserReport/>
                <PowerUserReport/>
                <PowerUserReport/>
                <PowerUserReport/>
                <PowerUserReport/>
                <PowerUserReport/>
            </div>}

            {flag===1 && <div className="flex flex-col items-center ">

                <COEPUReport/>    
                <COEPUReport/>    
                <COEPUReport/>    
                <COEPUReport/>    
                <COEPUReport/>    
                <COEPUReport/>
                <COEPUReport/>    
                <COEPUReport/>    
                <COEPUReport/>        
            </div>}

            {flag===2 && <div className="flex flex-col tems-center ">
                <UserPUReport/>
                <UserPUReport/>
                <UserPUReport/>
                <UserPUReport/>
                <UserPUReport/>
                <UserPUReport/>
                <UserPUReport/>
                <UserPUReport/>

            </div>}

            </div>
        </div>
    )

    
    
}

export default COEPage;