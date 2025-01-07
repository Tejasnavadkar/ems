import { Header } from "../others/Header"
import { TaskGrid } from "../others/TaskGrid"
import { TaskLists } from "../others/TaskLists"


const EmployeeDashboard = ({user}) =>{

    console.log('user--',user)

    return (
        
            <div className="bg-[#1c1c1c] h-screen">
                <Header data={user} />
                <TaskGrid data={user} />
                <TaskLists data={user} />
            </div>
    
    )
}

export default EmployeeDashboard