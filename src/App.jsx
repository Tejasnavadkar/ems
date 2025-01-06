import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { TaskLists } from './components/others/TaskLists'
import { AdminDashboard } from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

function App() {
  const [user, setUser] = useState(null)
  // useEffect(()=>{
  //   setLocalStorage()
  //   getLocalStorage()
  // },[])

  const handleLogin = (email,password) =>{

    if(email == 'admin@me.com' && password == '123'){
      console.log('this is admin')
    }else if(email == 'user@me.com' && password == '123'){
      console.log('this is user')
    }else{
      console.log('invalid credentials')
    }
  }

  return (
    <>
      
      <div>
        {!user ?<Login handleLogin={handleLogin} /> : ""}
        {/* <EmployeeDashboard/> */}
        {/* <AdminDashboard/> */}
       
      </div>
    </>
  )
}

export default App
