

export const TaskGrid = ({data}) => {

    return (
        <>

            <div className="px-3 grid grid-cols-4 gap-3 mt-4">
                <div className="bg-red-600 rounded-lg py-4 px-3">
                    <h2 className="text-3xl font-semibold">0</h2>
                    <h3 className="text-xl font-medium ">New Task</h3>
                </div>
                <div className="bg-blue-600 rounded-lg py-4 px-3">
                    <h2 className="text-3xl font-semibold">0</h2>
                    <h3 className="text-xl font-medium ">New Task</h3>
                </div>
                <div className="bg-gray-600 rounded-lg py-4 px-3">
                    <h2 className="text-3xl font-semibold">0</h2>
                    <h3 className="text-xl font-medium ">New Task</h3>
                </div>
                <div className="bg-yellow-600 rounded-lg py-4 px-3">
                    <h2 className="text-3xl font-semibold">0</h2>
                    <h3 className="text-xl font-medium ">New Task</h3>
                </div>
            </div>

        </>
    )
}