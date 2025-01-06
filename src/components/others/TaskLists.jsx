

export const TaskLists = () =>{

    return (
        <div id="TaskList" className="  w-full h-[40%] mt-8 px-4 flex flex-nowrap  gap-3 overflow-x-auto "> {/* grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] */}
           
           <div className="bg-red-400 w-[300px] shrink-0  rounded-md p-4 ">
            <div className="flex justify-between text-sm" >
                <span className="bg-red-600 px-2 rounded-md py-1">High</span>
                <span>20 feb 2024</span>
            </div>
            <div className="mt-4 flex flex-col gap-2">
                <div className="text-xl font-bold">Make a YouTube Video</div>
                <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, praesentium! Voluptas soluta fugiat nostrum se</div>
            </div>
           </div>

           <div className="bg-green-400 w-[300px] shrink-0  rounded-md p-4 ">
            <div className="flex justify-between text-sm" >
                <span className="bg-red-600 px-2 rounded-md py-1">High</span>
                <span>20 feb 2024</span>
            </div>
            <div className="mt-4 flex flex-col gap-2">
                <div className="text-xl font-bold">Make a YouTube Video</div>
                <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, praesentium! Voluptas soluta fugiat nostrum se</div>
            </div>
           </div>

           <div className="bg-blue-400 w-[300px] shrink-0  rounded-md p-4 ">
            <div className="flex justify-between text-sm" >
                <span className="bg-red-600 px-2 rounded-md py-1">High</span>
                <span>20 feb 2024</span>
            </div>
            <div className="mt-4 flex flex-col gap-2">
                <div className="text-xl font-bold">Make a YouTube Video</div>
                <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, praesentium! Voluptas soluta fugiat nostrum se</div>
            </div>
           </div>

           <div className="bg-yellow-400 w-[300px] shrink-0  rounded-md p-4 ">
            <div className="flex justify-between text-sm" >
                <span className="bg-red-600 px-2 rounded-md py-1">High</span>
                <span>20 feb 2024</span>
            </div>
            <div className="mt-4 flex flex-col gap-2">
                <div className="text-xl font-bold">Make a YouTube Video</div>
                <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, praesentium! Voluptas soluta fugiat nostrum se</div>
            </div>
           </div>
        
        </div>
    )
}