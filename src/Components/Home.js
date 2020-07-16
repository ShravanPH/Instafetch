import React from 'react'
import { Grid, Typography } from '@material-ui/core'

function Home()
{




    return(
        <React.Fragment>
          
                        
            <Grid container >
                <Grid item xs={5} >
            
                    <img src={require("../Images/wallpap.jpg")} style={{margin:50,marginLeft:65,height:540,width:1145,borderRadius:20}} ></img>            
                
                </Grid>    
               



            </Grid>
        </React.Fragment>
        

    )
}export default Home