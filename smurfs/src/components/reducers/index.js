import {  FETCHING_SMURF_SUCCESS } from '../actions';
const initialState = {
 smurfs:[
  
 ]

  

};


export const reducer = (state = initialState, action) => {

  switch (action.type) {
    // case FETCHING_SMURF_START:
    //   return {
    //     ...state,
    //     isFetching: true,
    //     error: ''
    //   };
    case FETCHING_SMURF_SUCCESS:
      
    return {
     ...state, smurfs: action.payload.data
    
        
       
     
  
   
    

    }
    
      
      
        

        
      
    default: return state;



  }
}