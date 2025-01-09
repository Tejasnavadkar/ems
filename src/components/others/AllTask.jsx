import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"


export const AllTask = () => {

    const [userData] = useContext(AuthContext)
    // console.log("contextData--", contextData.employees)
    // console.log('newtask--', contextData?.employees?.taskCounts?.active)

    return (
        <div>
        <div id="TaskList" className="bg-[#1c1c1c] mt-5 p-3 flex flex-col gap-2  ">
            <div className="bg-red-400 py-2 px-4 gap-2 rounded-md flex justify-between">
                <h2 className="w-1/5  text-center" >Employee name</h2>
                <h3 className="w-1/5  text-center" >new Task</h3>
                <h5 className="w-1/5  text-center" >Active Task</h5>
                <h5 className="w-1/5  text-center" > completed</h5>
                <h5 className="w-1/5  text-center" > failed</h5>
            </div>
        </div>
            <div id="TaskList" className="bg-[#1c1c1c] p-3 flex flex-col gap-2 h-52 overflow-y-auto">
                {userData?.employees?.map((elem) => {
                    return <div key={elem.id} className=" border border-emerald-700 py-2 gap-2 px-4 rounded-md flex justify-between">
                        <h2 className="w-1/5  text-center" >{elem?.name}</h2>
                        <h3 className="w-1/5  text-center" >{elem?.taskCounts?.active}</h3>
                        <h3 className="w-1/5  text-center" >{elem?.taskCounts?.newTask}</h3>
                        <h3 className="w-1/5  text-center" >{elem?.taskCounts?.completed}</h3>
                        <h3 className="w-1/5  text-center" >{elem?.taskCounts?.failed}</h3>
                    </div>
                })}
            </div>



        </div>
    )
}