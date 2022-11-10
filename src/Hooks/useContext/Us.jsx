import React from 'react';
import { useContext } from 'react';
import UserContext from './UseContext'

const Us = () => {
    const data=useContext(UserContext)
  return (
    <div>{data}
      
    </div>
  );
}

export default Us;
