import axios from 'axios';
import React, { Component }  from 'react';
import {useState} from "react";
import { Link } from "react-router-dom";
import { baseUrl, headers } from '../constants';

const ForgotPasswordPage = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const recover = async() => {
        const response = await axios.get(`${baseUrl}/forgot-password?email_id=${email}`,headers);
    }

    return(
        <div className = "bg-white font-xl h-screen w-screen flex flex-col items-center justify-center">
            <div className = "w-[40vw] h-[75vh] bg-purple-300 border border-4 flex flex-col items-center border-stone-950">
                <p className = "mt-[7vh] font-fjalla text-4xl">Report Management System</p>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[20vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Email ID"
                />

                <div className = "bg-purple-900 font-semibold text-white w-[12vw] h-[5vh] mt-[10vh] flex flex-col items-center justify-center rounded-md hover:bg-purple-700 hover:cursor-pointer ease-in duration-200"
                onClick={()=>{
                    recover()
                    //redirect credentials to login page according to the user's privilege
                }}
                >
                <p>Send Recovery Link</p>
                </div>

                <Link to = "/" className="text-black mt-[5vh] font-semibold rounded-md hover:bg-purple-400 hover:cursor-pointer ease-in duration-200">Back to Login</Link>


            </div>
        </div>
    )
}

export default ForgotPasswordPage;