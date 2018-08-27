import React from 'react';
import Today from '@material-ui/icons/Today';
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
        <li><Today/></li>
        <li>OMG</li>
        <li>OMG</li>
        <li>OMG</li>
      </ul>
    </div>
  );
}

export default FeaturesList; 