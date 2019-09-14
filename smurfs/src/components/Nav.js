import React from 'react'
import { Tab } from 'semantic-ui-react'
import SmurfsList from './SmurfsList';
import SmurfsForm from './SmurfsForm';




const panes = [
    { menuItem: 'List of Smurfs', render: () => <SmurfsList>Tab 1 Content</SmurfsList> },

    { menuItem: 'Become One', render: () => <SmurfsForm>Tab 2 Content</SmurfsForm> },
    
  ]
  
  const Nav = () => <Tab panes={panes} />
  
  
  

export default Nav;
