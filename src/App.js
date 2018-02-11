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

//Components:
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';

class App extends Component {
  state = {
    value:0
  };

  handleChange = (event,value) =>{
    this.setState({value});
  };

  componentDidMount(){
    var tabs = ['/','/about','/shop','/contact'];
    this.setState({value:tabs.indexOf(window.location.pathname)});
  }

  render() {
    const {value} = this.state;
    return (
      <div className="App">
        <Grid container spacing={0} alignItems={'center'} justify="center">
          <Grid item xs={12}>
            
            <div className='root'>
              <div id="header">
              <Grid container spacing={0} alignItems={'center'} justify="center">
                <Grid item xs={10} sm={6} lg={4} xl={3}>
                  <div id="title" justify="center">
                    <img style={{width:"100%"}} src={Logo} alt=""/>
                  </div>
                </Grid>
                </Grid>
              </div>
              <Router>
                <div>
                  <AppBar position="static" id="tabs">
                    <Tabs 
                    centered
                    value={value} 
                    onChange={this.handleChange}
                    indicatorColor="white"
                    fullWidth>
                      <Tab className="tab" label="Home" component={Link} to="/"/>
                      <Tab className="tab" label="About" component={Link} to="/about"/>
                      <Tab className="tab" label="Shop" component={Link} to="/shop"/>
                      <Tab className="tab" label="Contact" component={Link} to="/contact"/>
                    </Tabs>
                  </AppBar>
                  {this.props.location}
                  <Route exact path="/" component={Home} test="this is a test"/>
                  <Route path="/about" component={About}/>
                  <Route path="/shop" component={Shop}/>
                  <Route path="/contact" component={Contact}/>
                </div>
              </Router>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
