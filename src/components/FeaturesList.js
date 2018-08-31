import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCloud} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faDatabase, faCloud,fab);



const FeaturesList = (props) => {


  const labelStyle = {
    marginTop : '10px',
    fontStyle: 'bold'
  }

  const iconList = [
    {
      key : 1,
      textIcon : "cloud",
      myLabel : "Stored somewhere", 
    },
    {
      key : 2,
      textIcon : "database",
      myLabel : "Made with the best framework", 
    },
    {
      key : 3,
      textIcon : ['fab','react'],
      myLabel : "Stored somewhere", 
    },
  ];

  return(
    <div className={props.className}>
      <div className="row">
      {iconList.map( el => 
          <div key={el.key} className="col-sm-3 offset-1">
            <FontAwesomeIcon icon={el.textIcon} size="7x" />
            <h6 style={labelStyle}>{el.myLabel}</h6>
          </div>
      )}
      </div>
    </div>
  );
}

export default FeaturesList; 