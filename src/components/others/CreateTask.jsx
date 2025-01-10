import { useContext, useState } from "react"
import { setLocalStorage } from "../../utils/LocalStorage"
import { AuthContext } from "../../context/AuthProvider"


export const CreateTask = () =>{

    const [userData,setUserData] = useContext(AuthContext)
    
   
  const [creatTaskInputs,setCreateTaskInputs] = useState({
    taskTitle:'',
        taskDate:'',
        assignTo:'',
        category:'',
        taskDescription:''

    })

    const [Newtask,setNewTask] = useState({})

    const submitHandler = (e) =>{
        // setLocalStorage()
        // setLocalStorage()
        e.preventDefault()
        // console.log(creatTaskInputs)
        setNewTask({...creatTaskInputs,newTask:true,active:true,completed:false,failed:false})  // spread and add new props also

    //    const EmpData = userData.employees
    //    console.log('EmpData outside loop--',EmpData)
    //    console.log('EmpData--',EmpData)
    const updatedEmpData = userData.employees?.map(employee => {
        console.log('inside EmpData')
        if(employee.name === creatTaskInputs.assignTo){
            // element.taskCounts.newTask += 1
            // element.tasks.push(Newtask)
            return {
                ...employee,
                taskCounts: { ...employee.taskCounts, newTask: employee.taskCounts.newTask + 1 },
                tasks: [...employee.tasks, Newtask], // Add the new task
            };
        }
        return employee;
        // setUserData(EmpData)
        // console.log('newEmp',EmpData)
       });

       setUserData({ employees: updatedEmpData });

       localStorage.setItem('employees',JSON.stringify(updatedEmpData))
       console.log('newEmp',userData.employees)
        setCreateTaskInputs({
            taskTitle:'',
            taskDate:'',
            assignTo:'',
            category:'',
            taskDescription:''
        })
    }
 
    // console.log('Newtask--',Newtask)

    return (
        <div>
            <form onSubmit={(e)=>submitHandler(e)} className="grid grid-cols-2 bg-[#1c1c1c] mt-4" >
                <div className="mt-4 flex flex-col px-20 gap-3 py-3">
                    <div className="text-2xl font-bold">Create Task</div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Task Title</label>
                        <input value={creatTaskInputs.taskTitle} onChange={(e)=>{
                            setCreateTaskInputs({
                                ...creatTaskInputs,
                                taskTitle:e.target.value
                            })
                        }} type="text" className="bg-slate-700 py-2 px-3 rounded-lg" placeholder="Task...." />
                    </div>


                    <div className="flex flex-col gap-2" >
                        <label htmlFor="">Date </label>
                        <input value={creatTaskInputs.taskDate} onChange={(e)=>{
                            setCreateTaskInputs({
                                ...creatTaskInputs,
                                taskDate:e.target.value
                            })
                        }} className="bg-slate-700 py-2 px-3 rounded-lg" type="date" name="" id="" />
                    </div>

                    <div className="flex flex-col gap-2" >
                        <label htmlFor="">Assign to </label>
                        <input value={creatTaskInputs.assignTo} onChange={(e)=>{
                            setCreateTaskInputs({
                                ...creatTaskInputs,
                                assignTo:e.target.value
                            })
                        }} className="bg-slate-700 py-2 px-3 rounded-lg" type="text" name="" id="" />
                    </div>

                    <div className="flex flex-col gap-2" >
                        <label htmlFor="">Category </label>
                        <input value={creatTaskInputs.category} onChange={(e)=>{
                            setCreateTaskInputs({
                                ...creatTaskInputs,
                                category:e.target.value
                            })
                        }} className="bg-slate-700 py-2 px-3 rounded-lg" type="text" placeholder="Design, Development etc.." />
                    </div>

                </div>

                <div className="mt-4 flex flex-col px-20 gap-3 py-3">
                  <div className="flex flex-col gap-2" >
                        <label htmlFor="">Description </label>
                        <textarea value={creatTaskInputs.taskDescription} onChange={(e)=>{
                            setCreateTaskInputs({
                                ...creatTaskInputs,
                                taskDescription:e.target.value
                            })
                        }} className="bg-slate-700 py-2 px-3 rounded-lg" type="text" cols={30} rows={10} placeholder="Description...." />
                    </div>
                    <div>
                        <button className="bg-emerald-600 w-full py-2 rounded-lg" >Create Task</button>
                    </div>
                  </div>
            </form>
        </div>
    )
}