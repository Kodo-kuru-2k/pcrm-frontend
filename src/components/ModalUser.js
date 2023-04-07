import axios from "axios";
import { useState } from "react";
import { baseUrl, headers } from "../constants";

const ModalUser = () => {
    
    const [id, setID] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isactive, setActive] = useState(false)
    const [permissions, setPermissions] = useState("")
    const [done,setDone] = useState(0)

    const sendData = async()=>{
        
            const body = {
                "emp_id":id,
                "name": name,
                "email": email,
                "password": password,
                "is_active": true,
                "permissions": permissions
            }
            try{
                const response = await axios.post(`${baseUrl}/admin/create-user`,body,headers);
                if (199 < response.status < 300){
                    setDone(1)
                            console.log(response.data)

            }
            }
            
            catch(e){
                console.log('error')
                setDone(2)
            }
        }
    


    return(
        <div className ="flex flex-col w-[70vw] border-2 border-black items-center">
            <p>Modify User</p>
                <div className="flex flex-col w-[70vw] border-2 border-black items-center">
                <input
                value={id}
                onChange={(e) => setID(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[50vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Employee ID"
                />
                
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[50vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Name"
                />

                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[50vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Email"
                />

                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[50vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Password"
                />

                <div className="border-black border-3 w-[20vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-lg flex">
                    <div onClick = {()=>{setActive(true)}}
                    className={`${isactive?"bg-green-500":"bg-green-300"} rounded-md w-[10vw]`}>True</div>
                    <div onClick = {()=>{setActive(false)}} className={`${!isactive?"bg-red-500":"bg-red-300"} rounded-md w-[10vw] `}>False</div>
                </div>

                <input
                value={permissions}
                onChange={(e) => setPermissions(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[50vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Permissions"
                />
                <div  className = {`${done===0?"bg-purple-900":done===1?"bg-green-500":"bg-red-500"} font-semibold text-white w-[12vw] h-[5vh] mt-[10vh] flex flex-col items-center justify-center rounded-md hover:cursor-pointer ease-in duration-200 mb-[2vh]`}
                onClick={()=>{
                    sendData()
                    //redirect credentials to login page according to the user's privilege
                }}
                >
                <p>{done===0?"Submit":done===1?"Success":"FAIL"}</p>
                </div>
                </div>
        </div>
    )

}

export default ModalUser;