import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import './App.css';

const style = theme =>({
  middle:{
    textAlign:'center'
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container className="middle">
        test
        </Grid>
      </div>
    );
  }
}

export default App;
