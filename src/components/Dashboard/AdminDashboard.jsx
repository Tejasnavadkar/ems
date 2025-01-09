import { setLocalStorage } from "../../utils/LocalStorage"
import { AllTask } from "../others/AllTask"
import { CreateTask } from "../others/CreateTask"
import { Header } from "../others/Header"



export const AdminDashboard = ({setUser}) => {
    setLocalStorage()

    return (
        <div className="h-screen">
            <Header setUser={setUser} />
            <CreateTask/>
            <AllTask/>
        </div>
    )
}