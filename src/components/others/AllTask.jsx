import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"


export const AllTask = () =>{

   const contextData = useContext(AuthContext)
   console.log("contextData--",contextData.employees)

    return (
        <div id="TaskList" className="bg-[#1c1c1c] mt-5 p-3 flex flex-col gap-2 h-52 ">

<div className="bg-red-400 py-2 px-4 rounded-md flex justify-between">
                <h2>Employee name</h2>
                <h3>new Task</h3>
                <h5>Active Task</h5>
                <h5> completed</h5>
                <h5> failed</h5>
            </div>

            <div className="bg-[#1c1c1c] p-3 flex flex-col gap-2 h-52 overflow-y-auto">
            {contextData.employees.map((elem)=>{
                return <div className="bg-red-400 py-2 px-4 rounded-md flex justify-between">
                <h2>Tejas</h2>
                <h3>Make a UI Design</h3>
                <h5>Status</h5>
            </div>
            })}
            </div>
           
           

        </div>
    )
}