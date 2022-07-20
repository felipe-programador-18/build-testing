import React,{createContext} from 'react'

export const AuthContext = createContext()

export const AuthProviderContext = ({children, value}) => {

 return  <AuthContext.Provider value={value} >
         {children}
    </AuthContext.Provider>   
}