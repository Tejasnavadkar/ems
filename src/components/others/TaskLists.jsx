import { AcceptedTask } from "../TaskList/AcceptTask"
import { CompleteTask } from "../TaskList/CompleteTask"
import { FailedTask } from "../TaskList/FailedTask"
import { NewTask } from "../TaskList/NewTask"


export const TaskLists = ({ data }) => {

    return (
        <div id="TaskList" className="  w-full h-[40%] mt-8 px-4 flex flex-nowrap  gap-3 overflow-x-auto "> {/* grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] */}

            {data.tasks.map((task,idx) => {
                if (task.active) {
                    return <AcceptedTask key={idx} task={task} />
                // } else if (task.newTask) {
                //     return <NewTask key={idx} task={task} />
                // } 
                }else if (task.completed) {
                    return <CompleteTask key={idx} task={task} />
                } else if (task.failed) {
                    return <FailedTask key={idx} task={task} />
                }
            })}

             {/* using switch case */}
            {/* {data.tasks.map((task) => {
                // Determine task status to use in the switch
                const taskStatus = task.active ? 'active' :
                             task.newTask ? 'newTask' :
                             task.completed ? 'completed' :
                             task.failed ? 'failed' : '';

                switch (taskStatus) {
                    case 'active':
                        return <AcceptedTask />;
                    case 'newTask':
                        return <NewTask />;
                    case 'completed':
                        return <CompleteTask />;
                    case 'failed':
                        return <FailedTask />;
                    default:
                        return null; // Or you can handle any default case, if needed
                }
            })} */}

        </div>
    )
}