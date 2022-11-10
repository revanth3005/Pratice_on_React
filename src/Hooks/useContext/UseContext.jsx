import React, { useState } from 'react'
import { useContext } from 'react'

const UserContext=React.createContext()
const UseContext = () => {
  const [data,setData]=useState('Revanth')
  return (
    <div>
      <UserContext.Provider value={data}>
        I am from UseContext {data}
        <UseContext1/>
      </UserContext.Provider>
      
      
    </div>
  )
}
const UseContext1 = () => {
  const data=useContext(UserContext)
  return (
    <div>
      value from 1={data}
      {/* <UseContext2/> */}
    </div>
  )
}
// const UseContext2 = () => {
//   const data=useContext(UserContext)
//   return (
//     <div>
//       I'm from UseContext2{data}
      
//     </div>
//   )
// }

export default UseContext 
