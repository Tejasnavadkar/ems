

export const CreateTask = () =>{

    return (
        <div>
            <form className="grid grid-cols-2 bg-[#1c1c1c] mt-4" >
                <div className="mt-4 flex flex-col px-20 gap-3 py-3">
                    <div className="text-2xl font-bold">Create Task</div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Task Title</label>
                        <input type="text" className="bg-slate-700 py-2 px-3 rounded-lg" placeholder="Task...." />
                    </div>

                  

                    <div className="flex flex-col gap-2" >
                        <label htmlFor="">Date </label>
                        <input className="bg-slate-700 py-2 px-3 rounded-lg" type="date" name="" id="" />
                    </div>

                    <div className="flex flex-col gap-2" >
                        <label htmlFor="">Assign to </label>
                        <input className="bg-slate-700 py-2 px-3 rounded-lg" type="text" name="" id="" />
                    </div>

                    <div className="flex flex-col gap-2" >
                        <label htmlFor="">Category </label>
                        <input className="bg-slate-700 py-2 px-3 rounded-lg" type="text" placeholder="Design, Development etc.." />
                    </div>

                </div>

                <div className="mt-4 flex flex-col px-20 gap-3 py-3">
                  <div className="flex flex-col gap-2" >
                        <label htmlFor="">Description </label>
                        <textarea className="bg-slate-700 py-2 px-3 rounded-lg" type="text" cols={30} rows={10} placeholder="Description...." />
                    </div>
                    <div>
                        <button className="bg-emerald-600 w-full py-2 rounded-lg" >Create Task</button>
                    </div>
                  </div>
            </form>
        </div>
    )
}