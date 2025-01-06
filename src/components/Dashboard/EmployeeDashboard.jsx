import { Header } from "../others/Header"
import { TaskGrid } from "../others/TaskGrid"
import { TaskLists } from "../others/TaskLists"


const EmployeeDashboard = () =>{

    return (
        
            <div className="bg-[#1c1c1c] h-screen">
                <Header/>
                <TaskGrid/>
                <TaskLists/>
            </div>
    
    )
}

export default EmployeeDashboard