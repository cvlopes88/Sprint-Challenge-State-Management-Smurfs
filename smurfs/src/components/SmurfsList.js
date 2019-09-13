import React from "react";
import SmurfsCard from './SmurfsCard';


const SmurfsList = (props) => {
   
    return (
        <div>
            <h1>All the Smurfs</h1>
            <ol>
                {props.smurfs.state.smurfs.map(smurf => (
            <SmurfsCard key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height}/>
            ))}
            </ol>
        </div>
    )
}

export default SmurfsList;