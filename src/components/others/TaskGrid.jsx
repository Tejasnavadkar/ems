

export const TaskGrid = ({data}) => {

    return (
        <>

            <div className="px-3 grid grid-cols-4 gap-3 mt-4">
                <div className="bg-blue-600 rounded-lg py-4 px-3">
                    <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
                    <h3 className="text-xl font-medium ">New Task</h3>
                </div>
                <div className="bg-green-600 rounded-lg py-4 px-3">
                    <h2 className="text-3xl font-semibold ">{data.taskCounts.completed}</h2>
                    <h3 className="text-xl font-medium  ">Completed Task</h3>
                </div>
                <div className="bg-yellow-600 rounded-lg py-4 px-3">
                    <h2 className="text-3xl font-semibold text-black">{data.taskCounts.active}</h2>
                    <h3 className="text-xl font-medium text-black">Accepted Task</h3>
                </div>
                <div className="bg-pink-600 rounded-lg py-4 px-3">
                    <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
                    <h3 className="text-xl font-medium ">Failed Task</h3>
                </div>
            </div>

        </>
    )
}