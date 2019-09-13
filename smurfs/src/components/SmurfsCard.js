import React, { useEffect } from "react";






const SmurfsCard = props => {



    return (
        <li>
            Name: {props.name},
              Age: {props.age},
              Height:{props.height}
        </li>
    )
}

export default SmurfsCard;
