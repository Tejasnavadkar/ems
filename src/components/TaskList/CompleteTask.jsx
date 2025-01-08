
 export const CompleteTask = ({task}) =>{

    return (
        <div className="bg-blue-400 w-[300px] shrink-0  rounded-md p-4 ">
        <div className="flex justify-between text-sm" >
            <span className="bg-red-600 px-2 rounded-md py-1">{task?.category}</span>
            <span>{task?.taskDate}</span>
        </div>
        <div className="mt-4 flex flex-col gap-2">
            <div className="text-xl font-bold">{task?.taskTitle}</div>
            <div className="text-sm">{task?.taskDescription}</div>
        </div>
        <div className="mt-6">
            <button   className="bg-green-600 px-3 py-1 rounded-md w-full ">completed</button>
        </div>
       </div>
    )
}