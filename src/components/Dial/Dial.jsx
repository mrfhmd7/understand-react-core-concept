import React from 'react';

const Dial = (props) => {
     return (
          <div style={{ border: '2px solid blue', borderRadius: '7px', margin: '15px' }}>
               <h3>This is dial components</h3>
               <h5>Your steps count: {props.steps}</h5>
          </div>
     );
};

export default Dial;