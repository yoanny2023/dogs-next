"use client"
import logout from "@/actions/logout"
import validateToken from "@/actions/validate-token"
import React from "react"

type IUserContext = {
  user: User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null>>

}

type User = {
  id: number;
  username:string;
  nome:string;
  email:string
}
const UserContext = React.createContext<IUserContext | null>(null);

export function useUser(){
  const context = React.useContext(UserContext);
  if(!context) throw new Error("useContext deve estar dentro do provider")
  return context;
}

export function UserContextProvider({children,user}: {
  children: React.ReactNode,
  user: User | null
}){
  const[userState,setUser] = React.useState<User | null>(user);

  React.useEffect(()=>{
   async function validate(){
     const{ok} = await validateToken()
     if(!ok) await logout();
   }
   if(userState) validate()
  },[userState])

  return (
  <UserContext.Provider value={{user:userState,setUser}}>
    {children}
  </UserContext.Provider>
  )
}