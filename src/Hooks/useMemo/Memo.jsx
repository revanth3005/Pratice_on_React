import React, { useMemo } from 'react'
import { useState } from 'react'

const Memo = () => {

    const[count,setCount]=useState(0)
    const[num,setNum]=useState(5)

   
     let factorial = useMemo(()=>{
        return fact(num)
     })

     function fact(n){
        let res=1;
        for(let i=n; i>=1; i--){
            res=res*i
        }
        return res
    }

   
    

  return (
    <div>
        <div className="container">
        <div className="row">
            <div className="col-md-12">

                <h1>count:{count}</h1>
                <button onClick={()=>setCount(count+1)}>
                    click
                </button>

                <h1>Fact:{factorial}</h1>
                <button onClick={()=>setNum(num+1)}>
                    click
                </button>
            </div>
        </div>
      </div>
    </div>
  )
  
}

export default Memo
