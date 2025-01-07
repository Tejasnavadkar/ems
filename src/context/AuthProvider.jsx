import { createContext, useContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage"


export const AuthContext = createContext(null)

// export const useAuthContext = () =>{
//     if(AuthContext == null) throw Error('context is null ,wrapup')
    
//    return useContext(AuthContext)
// }

export const AuthProvider = ({children}) =>{
    const [userData,setUserData] = useState(null)
     
   useEffect(()=>{
    setLocalStorage()
    const {employees,admin} = getLocalStorage()
    setUserData({employees,admin})
    
   },[])
    


    return (
        <div>
            <AuthContext.Provider value={userData}>
               {children}
            </AuthContext.Provider>
            
        </div>
    )
}