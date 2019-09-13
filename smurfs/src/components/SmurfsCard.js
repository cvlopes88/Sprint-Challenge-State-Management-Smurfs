import React from "react";

import { connect } from 'react-redux';




const SmurfsCard = props => {
    return (
        <li>
            Name: {props.name},
              Age: {props.age},
              Height:{props.height}
        </li>
    )
}



export default connect(
    null,
    {  }
  )(SmurfsCard);