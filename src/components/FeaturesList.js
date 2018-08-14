import React from 'react';
//import fontawesome from '@fortawesome/fontawesome';


const FeaturesList = (props) => {

  const listStyle ={
    listStyle : 'none',
    display : 'inline-flex',
  }

  // const myList = [
  //   {
  //     text: 'OMG'
  //   },
  //   {
  //     text: 'OMG'
  //   },
  //   {
  //     text: 'OMG'
  //   }
  //];


  return(
    <div className={props.className}>

    
      <ul style={listStyle}>
        <li>OMG</li>
        <li>OMG</li>
        <li>OMG</li>
        <li>OMG</li>
      </ul>
    </div>
  );
}

export default FeaturesList; 