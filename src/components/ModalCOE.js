import axios from "axios";
import { useState } from "react";
import { baseUrl, headers } from "../constants";

const ModalCOE = () => {
    
    const [id, setID] = useState("")
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [purpose, setPurpose] = useState("")
    const [sponsor, setSponsor] = useState("")
    const [dept, setDept] = useState("")
    const [head,setHead] = useState("")
    const [done,setDone] = useState(0)

    const sendData = async()=>{
        
            const body = {
                "center_id":id,
                "center_name": name,
                "establishment_date": 0,
                "purpose": purpose,
                "sponsor": sponsor,
                "department_name": dept,
                "center_incharge": head
            }

            try{
                const response = await axios.post(`${baseUrl}/admin/create-ceo`,body,headers);
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
                placeholder="Center ID"
                />
                
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[50vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Center Name"
                />

                <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[50vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="establishment date"
                />

                <input
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[50vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Purpose"
                />


                <input
                value={sponsor}
                onChange={(e) => setSponsor(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[50vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Sponsor"
                />
                <input
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[50vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Dept Name"
                />
                <input
                value={head}
                onChange={(e) => setHead(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[50vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Center incharge"
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

export default ModalCOE;