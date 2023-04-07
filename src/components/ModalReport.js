import axios from "axios";
import { useState } from "react";
import { baseUrl, headers } from "../constants";

const ModalReport = () => {
    
    const [year, setYear] = useState("")
    const [quarter, setQuarter] = useState("")
    
    const [done,setDone] = useState(0)

    const sendData = async()=>{
        
            const body = {
               "year":year,
               "quarter":quarter
            }

            try{
                const response = await axios.post(`${baseUrl}/admin/create-report-for-each-quarter`,body,headers);
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
                value={year}
                onChange={(e) => setYear(e.target.value)}
                type="number"
                className="bg-white text-black border border-black border-3 w-[50vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Year"
                />
                
                <input
                value={quarter}
                onChange={(e) => setQuarter(e.target.value)}
                type="text"
                className="bg-white text-black border border-black border-3 w-[50vw] h-[5vh] mt-[10vh] text-center pr-2 rounded-md"
                placeholder="Quarter"
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

export default ModalReport;