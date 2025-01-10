import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { TaskLists } from './components/others/TaskLists'
import { AdminDashboard } from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  const [user, setUser] = useState(null)
  const [loggedinUserData,setLogedinUserData] = useState(null)
 

  const [userData] = useContext(AuthContext)

   useEffect(()=>{

    setLocalStorage()
    const LoggedInUser = JSON.parse(localStorage.getItem('LogedInUser'))
    console.log('LoggedInUser---------------------======',LoggedInUser)
    if(LoggedInUser){
      setUser(LoggedInUser.role)
      setLogedinUserData(LoggedInUser.data)
    }

  
    
  },[])

  // console.log('find',AuthData?.employees?.find((emp)=> emp.email === 'employee3@example.com' && emp.password === '123'))

  const handleLogin = (email,password) =>{

    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('LogedInUser',JSON.stringify({role:'admin'}))
      console.log('this is admin')
    }else if(userData){
      // setUser('user')
     const employee = userData?.employees?.find((emp)=> emp.email === email && emp.password === password)
    //  console.log('employee--',employee)
     if(employee){
      setUser('employee')
      setLogedinUserData(employee)
      localStorage.setItem('LogedInUser',JSON.stringify({role:'employee',data:employee}))
      console.log('this is user')
     }else{
      console.log('hey from 1')
      alert('invalid credentials')
     }
    
    }else{
      console.log('hey from 2')
      alert('invalid credentials')
    }
  }

  
  // const data = useAuthContext()
  

  return (
    <>
      
      <div>
        {!user ?<Login handleLogin={handleLogin} /> : ""}
        {user == 'admin' ? <AdminDashboard setUser={setUser} /> : (user == 'employee' ?  <EmployeeDashboard user={loggedinUserData} setUser={setUser} /> : null) }
        {/* <EmployeeDashboard/> */}
        {/* <AdminDashboard/> */}
       
      </div>
    </>
  )
}

export default App
