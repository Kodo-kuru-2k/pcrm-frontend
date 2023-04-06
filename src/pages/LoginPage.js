import React, { Component }  from 'react';
import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl, headers } from '../constants';
const LoginPage = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signIn = async (email, password) => {
        const body = {
            "email":email,
            "password":password
        }
    const response  = await axios.post(`${baseUrl}/login`,body,headers);
    console.log(response)
    }
    return (
        <div className = "bg-white font-xl h-screen w-screen flex flex-col items-center justify-center">
            <div className = "w-[40vw] h-[75vh] bg-purple-300 border border-4 flex flex-col items-center border-stone-950">
                <p className = "mt-[7vh] font-fjalla text-4xl tracking-normal">COE Management System</p>
                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="bg-white text-black border border-black border-3 w-[20vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Email ID"
                />
                
                <input
                value={password}
                onChange={(pwd) => setPassword(pwd.target.value)}
                type="password"
                className="bg-white border border-black border-3 text-black w-[20vw] h-[5vh] mt-[5vh] text-center pr-2 rounded-md"
                placeholder="Password"
                />

                <div  className = "bg-purple-900 font-semibold text-white w-[12vw] h-[5vh] mt-[10vh] flex flex-col items-center justify-center rounded-md hover:bg-purple-700 hover:cursor-pointer ease-in duration-200"
                onClick={()=>{
                    signIn(email,password)
                    //redirect credentials to login page according to the user's privilege
                }}
                >
                <p>Submit</p>
                </div>
                <Link to = "/forgot" className="text-black mt-[5vh] font-semibold rounded-md hover:bg-purple-400 hover:cursor-pointer ease-in duration-200">Forgot Password?</Link>
                
            </div>
        </div>
    );



}

export default LoginPage;