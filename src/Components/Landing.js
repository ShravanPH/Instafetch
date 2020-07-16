import React, { useState } from 'react'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import { CssBaseline, Typography, Grid, makeStyles, Divider, AppBar, Button, Popover, useMediaQuery } from '@material-ui/core'
import Home from './Home'
import Item from './Item'
import Data from './Data'
import axios from 'axios'
import { Cancel } from '@material-ui/icons'

function Landing()
{
    const axios=require('axios').default
    const client_id=563865970932811
    const client_secret="e3e961edaed1d2173e415ab387d5a8bb"
    const long_access_token="IGQVJXVHM0ZADJISjFpdXpzenVaNVFxS29CSFhlVW9qb3JnelYzU3p5Q3c3dGpnUDlJUzZAzMlowYU53ejlobjNNSDB6Q0MtRDhLSk94aFMzb2FvOTZAadGd0OU0wal9JTlNrS3UzeF9n"
    const design_access_token="IGQVJXM3gzS244V3hheUhpVEk1ZAjZAJSXNnODRhNF9ZAaFhleGVJcXlxVHJRVGkySnRKWk1UYjhJaU1aeml0akZAkcHZAWZA3R5Q3ZA1amZAzTTB3SGZAkd0thR2gwakEwektjUFgzV3A1VnFCOG04ekJ5NTZAfbAZDZD"
    const final_access_token="IGQVJWNVZABZAUVVblZA2SnU1cVJJTUZAOdHBjYlNoN1kwNEY1dVUtNWJOYTNQSWJxZAzJtVVYzaTF0bWlnZAmhjS0ZAYVFM1bDZAVVUNvc1pjdnJUcmJDNGZAYcXpJcE5WMEwzZAkt4NWtRa0h2ZAVhKVmFBeXJBRAZDZD"
    const user_id="563865970932811"

    const [dataFlag,setDataFlag]=useState(1)
    const [data,setData]=useState(null)  
    const [newData,setNewData]=useState(null)
    


    const[theme,setTheme]=useState({
        typography:{
            useNextVarients : true,
              "fontFamily":` "Great Vibes"`,
              "fontSize":15
          },
            palette:{
                primary:{
                    main:"#000000",
                },
                secondary:{
                    main:"#65097D",
                },
                
                
                background:{
                 default:"#F1D7F6",
                },
        },
overrides:{
    MuiPopover:{
            paper:{     
                // height:550,
                // width:1150,
                backgroundColor:"#FFE8FF"
            }
        },
        MuiPaper:{
            elevation4:{
                boxShadow:0

            }
        }


    }
   }
)


   const styles=makeStyles(
       (theme)=>
    ({
    titles:{
        paddingLeft:100
            },
    
    title:{
        margin:20,
        marginLeft:50,
        fontSize:20,
        letterSpacing:10,
        fontFamily:"Montserrat Subrayada",
        backgroundColor:"#F1D7F6",
        borderRadius:10,
        width:160,
        
        cursor:"pointer",
       [theme.breakpoints.down('md')]:{

        margin:20,
        marginTop:100,
        marginLeft:50,
        fontSize:60,
        letterSpacing:10,
        fontFamily:"Montserrat",
        backgroundColor:"#F1D7F6",
        borderRadius:10,
        width:360,
        cursor:"pointer",

       }


    },
    title2:{
        margin:20,
        marginLeft:325,
        fontSize:20,
        letterSpacing:10,
        fontFamily:"Montserrat Subrayada",
        backgroundColor:"#F1D7F6",
        borderRadius:10,
        width:162,
        cursor:"pointer",
       [theme.breakpoints.down('md')]:{

        margin:20,
        marginTop:100,
        marginRight:5,
        marginLeft:26,
        fontSize:60,
        letterSpacing:10,
        fontFamily:"Montserrat ",
        backgroundColor:"#F1D7F6",
        borderRadius:10,
        width:365,
        cursor:"pointer",

       }


    },
    title3:{
        margin:20,
        marginLeft:405,
        fontSize:20,
        letterSpacing:10,
        fontFamily:"Montserrat Subrayada",
        backgroundColor:"#F1D7F6",
        borderRadius:10,
        width:150,
        cursor:"pointer",
    
       [theme.breakpoints.down('md')]:{

        
        marginLeft:0,
        marginTop:100,
        fontSize:60,
        letterSpacing:10,
        fontFamily:"Montserrat ",
        backgroundColor:"#F1D7F6",
        borderRadius:10,
        width:340,
        cursor:"pointer"

       }


    },
    heading:{
        fontFamily:"Great Vibes",
        letterSpacing:50,
        marginTop:150,
        marginLeft:75,
        marginBottom:100,
        fontSize:120,
        [theme.breakpoints.down('md')]:{

        fontFamily:"Great Vibes",
        letterSpacing:20,
        marginTop:250,
        marginLeft:75,
        marginBottom:100,
        fontSize:190,


                }


    },
    desc:{
        marginLeft:100,
        marginTop:200,
        marginBottom:200,
        fontSize:40,
        letterSpacing:10,
        width:2400,
        [theme.breakpoints.down('md')]:{

            marginLeft:80,
            marginTop:100,
            marginBottom:0,
            fontSize:120,
            width:1950,
            letterSpacing:10

                }


    }
    

}



)
   )

    const[pop,setPop]=useState(false)

    const togglePop=()=>
    {
        setPop(pop?false:true)

    }

    const MuiTheme=createMuiTheme(theme)
    const classes=styles()




    const handleLink=()=>{
            
            window.open("https://www.instagram.com/xonthronex3ra/")

    }
   
    const handleAPI=()=>{
        if((dataFlag==1)&&(data==null))
        {
       
        
        axios.get("http://Eraboot-env.eba-3m9py2ee.ap-south-1.elasticbeanstalk.com/api/getData")
        .then((r)=> setData(JSON.parse(r.data.data)))
        
        


        }

    
}


const handlePosts=()=>
{
   
        
    if((data!=null)&&(dataFlag==1)) 
    {
        
      
    
        console.log("Data is not null",data,"flag",dataFlag)
        setDataFlag((flag)=>flag+1)
        
    
    }
  
  
    else{

        return null
    
    }


}

            




     {handleAPI()}

    
    
    return(
        <React.Fragment>
                <MuiThemeProvider theme={MuiTheme} >    
                     <CssBaseline>
                 
        <Grid container style={{width:1250}}>  

    <AppBar color="transparent" className="bar">
        

    <Grid container>  
     
            <Typography color="primary" className={classes.title}>
                LANDING
            </Typography>   
     

        <Grid item xs={3} >
            
            <Typography color="primary" 
           
              className={classes.title2}
            
              onClick={togglePop}
                
              >
               CONTACT
            </Typography>   

            <Popover open={pop}>

                <Typography>hello</Typography>
                <Button style={{marginLeft:540,marginBottom:50,borderRadius:90,padding:2.5,minWidth:0}} onClick={togglePop}>
                    <Cancel style={{fontSize:30,color:"#B9A0BE"}} />
                </Button>

            </Popover>


        </Grid>
       
        <Grid item xs style={{marginLeft:120}}>
            <Typography color="primary" 
              onClick={handleLink}  
              className={classes.title3}
             
              >
                FOLLOW
            </Typography>   
        </Grid>
    </Grid>
</AppBar>
        
        <Grid item xs={12}>
            
            <Typography color="primary" className={classes.heading} >Bruhbruhbruh
            </Typography>

        </Grid>

         <Home/>


        
            <Typography color="primary" 
            className={classes.desc}
            >
                A website depicting my Instagram bruhbruh page.

            </Typography>   
      
        
        
{
    handlePosts()
}

{
    
    dataFlag==2&&data!=null?data.data.map((p)=><Item props={p}/>):null
}

{/* {
    dataFlag==2&&data!=null?<Grid item xs={6} ><Item props={data.data}/></Grid>:<h1>h</h1>
} */}




        </Grid>
        
        


            
        
            </CssBaseline>
            </MuiThemeProvider>
        </React.Fragment>
    )

}export default Landing