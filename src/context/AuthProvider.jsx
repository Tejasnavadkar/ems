import { createContext, useContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage"


export const AuthContext = createContext()

// export const useAuthContext = () =>{
//     if(AuthContext == null) throw Error('context is null ,wrapup')
    
//    return useContext(AuthContext)
// }

export const AuthProvider = ({children}) =>{
    const [userData,setUserData] = useState(null)
    // setLocalStorage()
   useEffect(()=>{
    setLocalStorage()
    const {employees} = getLocalStorage()
    setUserData({employees})
    
   },[])
    


    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
               {children}
            </AuthContext.Provider>
            
        </div>
    )
}