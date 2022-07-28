import React,{createContext, useContext} from 'react'

export const AuthContext = createContext()

export const AuthProviderContext = ({children, value}) => {

 return  <AuthContext.Provider value={value} >
         {children}
    </AuthContext.Provider>   
}

export const useValueAuth = () => {
    return useContext(AuthContext)
}