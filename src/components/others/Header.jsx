import { useEffect, useState } from "react"


export const Header = ({data,setUser}) =>{
    // console.log('Header-data',data)
   const [user,setUser1] = useState('')

   useEffect(()=>{
    if(!data){
        setUser1('admin')
    }else{
        setUser1(data.name)
    }
   },[])

    return (
        <div className="flex justify-between px-6 pt-3 ">
            <div className="flex flex-col ">
                <span className="text-lg">Hello </span>
                <span className="text-3xl font-bold">{user} 👋</span>
            </div>
            <div>
            <button onClick={()=>{
                localStorage.removeItem('LogedInUser');
                // window.location.reload(); // force page relaod
                setUser('')
                
                }} className="bg-red-600 rounded-md px-4 py-2 ">Log Out</button>
            </div>
        </div>
    )
}