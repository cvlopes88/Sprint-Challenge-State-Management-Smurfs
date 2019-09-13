import React from "react";
import "./App.css";
import { connect } from 'react-redux';

import SmurfsList from './SmurfsList';

const App = (state) => {
  return (
    <div className='app'>
      <SmurfsList smurfs={state} />
    </div>
  )
}



const mapStateToProps = state => {
  
  return {
    //Name of the prop: state
    state: state
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
