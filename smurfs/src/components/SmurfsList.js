import React, { useEffect }  from "react";
import SmurfsCard from './SmurfsCard';
import { getSmurfs } from './actions';
import { connect } from 'react-redux';

const SmurfsList = ({smurfs, getSmurfs}) => {
    useEffect(() => {
        getSmurfs();


    }, []);
    
   
    return (
        
       
        <div className='memberslist'>
          
            <h1>All the Smurfs</h1>
            {smurfs.map(item => (

            
            <ul>  
            <SmurfsCard  name={item.name} age={item.age} height={item.height}/>
              
            </ul>
            ))}
            <button className='refresh' onClick={getSmurfs}>Refresh</button>
        </div>
    )
}



const mapStateToProps = state => {
    console.log("smurfs", state.smurfs)
    return {
     smurfs: state.smurfs
    }
  };
  
  export default connect(
    mapStateToProps,
    { getSmurfs }
  )(SmurfsList);