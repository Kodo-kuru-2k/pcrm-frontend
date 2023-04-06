import { useState } from "react";

const ModalUser = () => {
    
    const [id, setID] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isactive, setActive] = useState(false)
    const [permissions, setPermissions] = useState("")


    return(
        <div className ="flex flex-col border-2 border-black items-center">
            <p>Modify User</p>
                <div className="flex flex-col border-2 border-black items-center">
                <input
                value={id}
                onChange={(e) => setID(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[20vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Employee ID"
                />
                
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[20vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Name"
                />

                <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[20vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Email"
                />

                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[20vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Password"
                />

                <div className="border-black border-3 w-[20vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md flex">
                    <div className={`${isactive?"bg-green-700":"bg-green-300"} w-[10vw]`}>True</div>
                    <div className={`${isactive?"bg-red-700":"bg-red-300"} w-[10vw]`}>False</div>
                </div>

                <input
                value={permissions}
                onChange={(e) => setPermissions(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[20vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Permissions"
                />

                </div>
        </div>
    )

}

export default ModalUser;