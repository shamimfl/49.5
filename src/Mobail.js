import React from 'react';
import { useState } from 'react';

const Mobail = () => {

    const [charge, setCharge] = useState(100)
    const controlCharge=()=>{
        if(charge > 0){
            setCharge(charge - 10)
        }
        
    }
    return (
        <div className='mobail'>
            <h1>{charge + '%'}</h1>
            <button onClick={controlCharge}>Bettery Down</button>
        </div>
    );
};

export default Mobail;