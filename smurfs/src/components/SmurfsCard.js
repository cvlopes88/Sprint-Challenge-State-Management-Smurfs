import React from "react";






const SmurfsCard = (props) => {

console.log( "notprop", props)



    return (
        <div>
         
             
        <li>
            
            Name: {props.name},
              Age: {props.age},
              Height:{props.height}
        </li>
             
                
        </div>
    )
}


export default SmurfsCard;