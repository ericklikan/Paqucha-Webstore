import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Tabs, {Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import Logo from './assets/logo.svg';
import './App.css';

class App extends Component {
  state = {
    value:0
  }

  handleChange = (event,value) =>{
    this.setState({value});
  };

  render() {
    const {value} = this.state;
    console.log(this);
    return (
      <div className="App">
        <Grid container spacing={0} alignItems={'center'} justify="center">
          <Grid item xs={12} sm={9} lg={8}>
            <div className='root'>
              <div id="header">
                <div id="title" justify="center">
                  <img src={Logo} alt=""/>
                </div>
              </div>
              <AppBar position="static" id="tabs">
                <Tabs 
                centered
                value={value} 
                onChange={this.handleChange}
                indicatorColor="white"
                fullWidth>
                  <Tab className="tab" label="Home"/>
                  <Tab className="tab" label="About"/>
                  <Tab className="tab" label="Shop"/>
                  <Tab className="tab" label="Contact"/>
                </Tabs>
              </AppBar>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
