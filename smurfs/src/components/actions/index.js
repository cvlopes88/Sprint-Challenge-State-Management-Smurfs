import axios from 'axios';


export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE';
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURF_START });
  axios
    .get('https://api.kanye.rest')
    .then(res => {
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data.quote });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_SMURF_FAILURE,
        payload: `${err.response.message} code: ${err.response.code}`
      });
    });
};
