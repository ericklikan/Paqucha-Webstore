import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Tabs, {Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import ShoppingCart from 'material-ui-icons/ShoppingCart';
import Logo from './assets/logo.svg';
import SmallLogo from './assets/logo_min.svg';
import './style/App.css';

//Components:
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';

class App extends Component {
  state = {
    value:0,
    width: window.innerWidth,
  };

  handleChange = (event,value) =>{
    this.setState({value});
  };

  handleResize = ()=>{
    this.setState({width:window.innerWidth});
  };

  componentWillMount(){
    var tabs = ['/','/about','/shop','/contact'];
    this.setState({value:tabs.indexOf(window.location.pathname)});
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  componentDidMount(){
    window.addEventListener('resize', this.handleResize);
  }

  render() {
    const {value,width} = this.state;
    const isMobile = width <= 600;
    return (
      <div className="App">
        <Grid container spacing={0} alignItems={'center'} justify="center">
          <Grid item xs={12}>
            
            <div className='root'>
              <div id="header">
              <Grid container spacing={0} alignItems={'center'} justify="center">
                <Grid item xs={10} sm={6} lg={4} xl={3}>
                  <div id="title" justify="center">
                    <img style={{width:"100%"}} src={Logo} alt="Mountain"/>
                  </div>
                </Grid>
                </Grid>
              </div>
              <Router>
                <div>
                  <AppBar position="static" id="tabs">
                      <Toolbar>
                        <Grid container spacing={0} alignItems={'center'} justify="space-between">
                          {isMobile && 
                            <Grid item xs={12} sm={1}>
                              <IconButton color="inherit" href="/shopcart">
                                <ShoppingCart/>
                              </IconButton>
                            </Grid>
                          }
                          {!isMobile &&
                          <Grid item xs={12} sm={1}>
                            <img src={SmallLogo} style={{width:"32px",height:"32px"}} alt="small logo" />
                          </Grid>
                          }
                          <Grid item xs={12} sm={8} md={8} lg={6}>
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
                          </Grid>
                          {!isMobile && 
                            <Grid item xs={12} sm={1}>
                              <IconButton color="inherit" href="/shopcart">
                                <ShoppingCart/>
                              </IconButton>
                            </Grid>
                          }
                        </Grid>
                      </Toolbar>
                  </AppBar>
                  <Route exact path="/" component={Home}/>
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
