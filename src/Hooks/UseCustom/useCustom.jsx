import React, { useState } from 'react';
import { useEffect } from 'react';


const useCustom = (url) => {
    const [data,setData]=useState([])
    useEffect(() => {
       fetch(url)
       .then(res=>res.json())
       .then(res=>setData(res))
    }, [])
    return data
}

export default useCustom;
