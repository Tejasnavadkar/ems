import { useContext, useState } from "react"
import { setLocalStorage } from "../../utils/LocalStorage"
import { AuthContext } from "../../context/AuthProvider"


export const CreateTask = () =>{

    const [userData,setUserData] = useContext(AuthContext)
    
   
  const [creatTaskInputs,setCreateTaskInputs] = useState({
        title:'',
        date:'',
        assignTo:'',
        category:'',
        description:''

    })

    const [Newtask,setNewTask] = useState({})

    const submitHandler = (e) =>{
        setLocalStorage()
        // setLocalStorage()
        e.preventDefault()
        // console.log(creatTaskInputs)
        setNewTask({...creatTaskInputs,newTask:true,active:true,completed:false,failed:false})  // spread and add new props also

       const EmpData = userData.employees
       console.log('EmpData outside loop--',EmpData)
    //    console.log('EmpData--',EmpData)
       EmpData?.forEach(element => {
        console.log('inside EmpData')
        if(element.name === creatTaskInputs.assignTo){
            element.taskCounts.newTask += 1
            element.tasks.push(Newtask)
            
        }
        setUserData(EmpData)
        console.log('newEmp',EmpData)
       });

    //    localStorage.setItem('employees',JSON.stringify(EmpData))
        setCreateTaskInputs({
            title:'',
            date:'',
            assignTo:'',
            category:'',
            description:''
        })
    
       


    }
 
    // console.log('Newtask--',Newtask)

    return (
        <div>
        {JSON.stringify(creatTaskInputs)}
            <form onSubmit={(e)=>submitHandler(e)} className="grid grid-cols-2 bg-[#1c1c1c] mt-4" >
                <div className="mt-4 flex flex-col px-20 gap-3 py-3">
                    <div className="text-2xl font-bold">Create Task</div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Task Title</label>
                        <input value={creatTaskInputs.title} onChange={(e)=>{
                            setCreateTaskInputs({
                                ...creatTaskInputs,
                                title:e.target.value
                            })
                        }} type="text" className="bg-slate-700 py-2 px-3 rounded-lg" placeholder="Task...." />
                    </div>

                  

                    <div className="flex flex-col gap-2" >
                        <label htmlFor="">Date </label>
                        <input value={creatTaskInputs.date} onChange={(e)=>{
                            setCreateTaskInputs({
                                ...creatTaskInputs,
                                date:e.target.value
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
                        <textarea value={creatTaskInputs.description} onChange={(e)=>{
                            setCreateTaskInputs({
                                ...creatTaskInputs,
                                description:e.target.value
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