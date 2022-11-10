import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const UseRef = () => {

    let useRefConcept=useRef(0)

    const onClickBut = () =>{
        useRefConcept.current.value++;
        useRefConcept.current.focus()
    }
    useEffect(() => {
        useRefConcept.current.focus()
    }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-12">

                <input type="text" ref={useRefConcept} />
                <button onClick={onClickBut} >
                    click
                </button>

            </div>
        </div>
      </div>
    </div>
  );
}

export default UseRef;
