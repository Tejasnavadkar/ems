import { AllTask } from "../others/AllTask"
import { CreateTask } from "../others/CreateTask"
import { Header } from "../others/Header"



export const AdminDashboard = () => {

    return (
        <div className="h-screen">
            <Header />
            <CreateTask/>
            <AllTask/>
        </div>
    )
}