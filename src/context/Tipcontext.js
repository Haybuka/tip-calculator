import React,{ createContext,useState } from "react";

export const Tipcontext = createContext()
export function TipProvider(props) {
  const [mode,setMode] = useState(false)
  return (
    <Tipcontext.Provider value={{mode,setMode}}>
      {props.children}
    </Tipcontext.Provider>
  )
}
