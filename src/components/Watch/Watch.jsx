import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
     const [steps, setSteps] = useState(0);

     const increaseSteps = () => {
          const nextStep = steps + 1;
          setSteps(nextStep);
     }

     useEffect(() => {
          console.log(steps);
     }, [steps])

     return (
          <div style={{border:'2px solid lightpink', margin:'10px', borderRadius: '7px'}}>
               <h2>This is my smart Watch!</h2>
               <p>Steps: {steps}</p>
               <button onClick={increaseSteps}>Run....</button>
               <Dial steps={steps}></Dial>
          </div>
     );
};

export default Watch;