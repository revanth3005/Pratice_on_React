import React from 'react';
import useCustom from './useCustom';

const Hook = () => {

    const data=useCustom('http://localhost:4000/Student')

    return (
        <div>
            <h1>data</h1>
            {
                data.map((value)=>{
                   return(
                    <div key={value.id} style={{'display':'flex','gap':'20px'}}>
                        <div>{value.id}</div>
                        <div>{value.name}</div>
                        <div>{value.address}</div>
                    </div>
                   )
                })
            }
        </div>
    );
}

export default Hook;
