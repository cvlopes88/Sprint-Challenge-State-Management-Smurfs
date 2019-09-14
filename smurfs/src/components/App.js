import React from "react";
import "./App.scss";
import { connect } from 'react-redux';
import Nav from './Nav';







const App = (state) => {
  return (
    <div className='app'>
      <Nav /> 
    </div>
  )
}



const mapStateToProps = state => {
  
  return {
    
    state: state
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);


