import React from 'react';
import MobileDetails from '../MobileDetails/MobileDetails';

const Mobile = (props) => {
     console.log(props);
     return (
          <div>
               <h2>This is my Mobile: {props.name}</h2>
               <MobileDetails price={props.price}></MobileDetails>
          </div>
     );
};

export default Mobile;