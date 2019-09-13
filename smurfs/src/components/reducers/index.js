import {  FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS } from '../actions';
const initialState = {
           isFetching: false,
           error: '',
   smurfs: [
        {
          name: "Brainey",
          age: 200,
          height: "5cm",
          id: 0
        },
        {
            name: "paulos",
            age: 100,
            height: "8cm",
            id: 1
          }
      ]
      
};


export const reducer = (state = initialState, action) => {
    console.log("this is payload", state)
    switch (action.type) {
      case FETCHING_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCHING_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload ],
        isFetching: false
      };
       default: return state;
            
        

    }
}