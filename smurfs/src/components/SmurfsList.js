import React, { useEffect }  from "react";
import SmurfsCard from './SmurfsCard';
import { getSmurfs } from './actions';
import { connect } from 'react-redux';

const SmurfsList = (state) => {
   console.log("dddddd", )
    return (
        
        <div>
            <h1>All the Smurfs</h1>
            <ol>
                {/* {props.smurfs.state.smurfs.map(smurf => ( */}
            <SmurfsCard key={state.id} name={state.name}/>
            {/* ))} */}
            </ol>
            <button onClick={getSmurfs}>fetch Smurfs</button>
        </div>
    )
}



const mapStateToProps = state => {
    console.log('nnnnowwww',state.smurfs.name)
    return {
     state: state
    };
  };
  
  export default connect(
    mapStateToProps,
    { getSmurfs }
  )(SmurfsList);