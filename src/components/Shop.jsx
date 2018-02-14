import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import SearchBar from 'material-ui-search-bar'

import '../style/shop.css';

class Shop extends Component{

    render(){
        return(
        <div id="shop">
            <Grid container spacing={8} justify="center" alignItems="flex-start">
                <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
                    <Grid style={{backgroundColor:'blue'}}>
                        <div id="side-menu">
                            <SearchBar
                                onChange={() => console.log('onChange')}
                                onRequestSearch={() => console.log('onRequestSearch')}
                                style={{
                                    margin: '0 auto',
                                    maxWidth: 800,
                                    borderRadius:"5px",
                                    marginTop:"5px",
                                    marginBottom:"5px"
                                }}
                            />
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={7} xl={8}>
                    <Grid style={{backgroundColor:'red'}}>
                        This is Home
                    </Grid>
                </Grid>
            </Grid>
        </div>
        );
    }
}

export default Shop;