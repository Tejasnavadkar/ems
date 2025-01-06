import { useState } from "react"




const Login = ({handleLogin}) =>{

   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')

    const Formhandler = (e) =>{
        e.preventDefault()

        handleLogin(email,password)

        console.log("form Submitted")
        setEmail('')
        setPassword('')
    }

    return (
        <>
        
        <div className="h-screen flex justify-center items-center ">
            <div className="border border-emerald-600 rounded-lg flex flex-col p-20">

          <form onSubmit={(e)=>Formhandler(e)} className="flex flex-col gap-3 ">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} required className=" border border-emerald-600 rounded-full text-xl px-5 py-2 outline-none bg-transparent" type="email" placeholder="Email" />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} required className=" border border-emerald-600 rounded-full text-xl px-5 py-2 outline-none bg-transparent" type="password" placeholder="password"/>
          <button className=" text-white  bg-emerald-600 rounded-full text-xl px-5 py-2 outline-none" >Login</button>
          </form>

            </div>
        </div>

        </>
    )
}

export default Login