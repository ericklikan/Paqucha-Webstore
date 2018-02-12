import React, {Component} from 'react';
import Grid from 'material-ui/Grid';

class Home extends Component{

    render(){
        console.log(this);
        return(
        <div>
            <Grid container spacing={0} justify="center" alignItems="flex-start">
                <Grid item xs={12} sm={10} md={8}>
                    <Grid>
                        This is Home
                    </Grid>
                </Grid>
            </Grid>
        </div>
        );
    }
}

export default Home;