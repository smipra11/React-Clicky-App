import React from 'react';
import "./style.css"

function FriendCard({clickHandler,id,name,image}){
    return(
    <div className="card">
      <div className="img-container">
        <img alt={name} src={image}
        onClick={() => clickHandler(id)}
     
        
        />
      </div>
      
      
    </div>
  );
}

export default FriendCard;


