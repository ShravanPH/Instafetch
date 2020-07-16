import React, { useState } from 'react'
import {  CardMedia, Card, Popover, Typography, Grid, Button, Backdrop, makeStyles } from '@material-ui/core'
import {Cancel,ArrowBackIosRounded,ArrowForwardIosRounded, CheckCircleOutline, ErrorOutline} from '@material-ui/icons'
import '../Styles/item.css'
import axios from 'axios'



function Item(props)
{
    
   const styles=makeStyles(
    (theme)=>
 (
    {
        titles:{
            fontSize:30,
            lineHeight:1.5,
            margin:0,
            marginTop:150,
            marginLeft:50,
            marginBottom:5,
            fontFamily:"Montserrat",
            [theme.breakpoints.down("md")]:
            {
                fontSize:50,
                lineHeight:1.5,
                marginLeft:100,
                marginTop:0,
                marginBottom:155,
                textAlign:"center",
                marginTop:30,
                fontFamily:"Montserrat",

            }
        

        },
        titles2:{
            fontSize:30,
            lineHeight:1.5,
            margin:0,
            marginTop:150,
            marginBottom:5,
            fontFamily:"Montserrat",
            [theme.breakpoints.down("md")]:
            {
                fontSize:60,
                width:1000,
                lineHeight:1.5,
                marginLeft:100,
                marginTop:0,
                marginBottom:155,
                textAlign:"center",
                marginTop:30,
                fontFamily:"Montserrat",

            }
        

        },
        titles3:{
            marginTop:100,
            marginLeft:300,
            fontSize:15,
            lineHeight:1.5,
            width:100,
            color:"#65097D",
            fontFamily:"Montserrat",
            [theme.breakpoints.down("md")]:
            {
                marginTop:100,
                marginLeft:230,
                fontSize:55,
                lineHeight:1.5,
                width:400,
                color:"#65097D",
                fontFamily:"Montserrat",

            }
        

        },
        titles4:{
            marginTop:100,
            marginLeft:150,
            fontSize:15,
            lineHeight:1.5,
            width:100,
            color:"#65097D",
            fontFamily:"Montserrat",
            [theme.breakpoints.down("md")]:
            {
                
                marginTop:100,
                marginLeft:450,
                fontSize:55,
                lineHeight:1.5,
                width:400,
                color:"#65097D",
                fontFamily:"Montserrat",
            }
        

        },
        titles5:{
            margin:50,
            marginTop:0,
            fontSize:40,
            lineHeight:1.5,
            color:"#65097D",
            fontFamily:"Montserrat",
            [theme.breakpoints.down("md")]:
            {
                marginLeft:130,
                marginRight:165,
                marginBottom:200,
                fontSize:80,
                lineHeight:1.5,
                color:"#65097D",
                fontFamily:"Montserrat",

            }
        

        },
        card:{
            maxWidth:1670,
            width:450,
            margin:43,
            marginLeft:110,
            borderRadius:15,
            boxShadow:"20px 20px 50px #DF65FF",
            [theme.breakpoints.down("md")]:
            {
                maxWidth:2670,
                margin:100,
                marginLeft:125,
                marginTop:150,
                width:1000,
                borderRadius:15,
                boxShadow:"20px 20px 50px #DF65FF",

            }
        },
        cardMedia:{
            cursor:"pointer",
            width:450,
            height:450,
            borderRadius:15,
            [theme.breakpoints.down("md")]:
            {
                cursor:"pointer",
                width:1000,
                height:1000,
                borderRadius:15,

            }
        },
        cardMedia2:{
            cursor:"pointer",
            marginTop:50,
            marginLeft:0,
            marginRight:0,
            marginBottom:30,
            width:450,
            height:450,
            borderRadius:15,
            boxShadow:"20px 20px 100px #DF65FF",
            [theme.breakpoints.down("md")]:
            {
                cursor:"pointer",
                width:1000,
                height:1000,
                margin:100,
                marginRight:30,
                marginTop:180,
                borderRadius:15,

            }
        },
        cardMedia3:{
            cursor:"pointer",
            marginTop:50,
            marginLeft:0,
            marginRight:0,
            marginBottom:50,
            width:450,
            height:450,
            borderRadius:15,
            boxShadow:"20px 20px 100px #DF65FF",
            [theme.breakpoints.down("md")]:
            {
                cursor:"pointer",
                width:990,
                height:990,
                margin:100,
                marginLeft:0,
                marginRight:30,
                marginTop:180,
                borderRadius:15,

            }
        },
        butt:{
            marginLeft:565,
            marginTop:40,
            marginRight:50,
            borderRadius:90,
            padding:2.5,
            minWidth:0,
            [theme.breakpoints.down("md")]:
            {
                marginLeft:457,


            }
        },
        butt2:{
            marginTop:250,
            marginRight:10,
            marginLeft:20,
            borderRadius:90,
            padding:2.5,
            minWidth:0,
            [theme.breakpoints.down("md")]:
            {
             
                marginLeft:65,
                marginBottom:100,
                marginTop:1350


            }
        },
        butt3:{
            marginTop:250,
            marginLeft:80,
            marginRight:25,
            borderRadius:90,
            padding:2.5,
            minWidth:0,
            [theme.breakpoints.down("md")]:
            {
                marginLeft:500,
                marginRight:30,
                marginTop:1350,
                marginBottom:50


            }
        },
        butt4:{
            marginLeft:1000,
            marginTop:40,
            marginRight:50,
            borderRadius:90,
            padding:2.5,
            minWidth:0,
            [theme.breakpoints.down("md")]:
            {
                marginLeft:485,


            }
        },
        butt5:{
          
            marginLeft:302.5,
            padding:0,
            borderRadius:360,
            [theme.breakpoints.down("md")]:
            {
                marginLeft:282.5,
                marginBottom:200,
                padding:0,
                borderRadius:360,

            }
        },
        butt6:{
          
            marginLeft:152.5,
            padding:0,
           
            borderRadius:360,
            [theme.breakpoints.down("md")]:
            {
                marginLeft:490.5,
                marginBottom:200,
                padding:0,
                borderRadius:360,



            }
        },
        icon:{
            fontSize:40,
            color:"#65097D",
            [theme.breakpoints.down("md")]:
            {
                fontSize:125,
                // margin:60,
                color:"#65097D",

            }


            
        },
        icon2:{
            fontSize:50,
            margin:50,
            color:"limegreen",
            [theme.breakpoints.down("md")]:
            {
                fontSize:150,
                marginRight:100,
                marginTop:100,
                marginBottom:100,
                color:"limegreen",

            }


            
        },
        icon3:{
            fontSize:50,
            margin:50,
            color:"#ff0000",
            [theme.breakpoints.down("md")]:
            {
                fontSize:150,
                marginRight:100,
                marginTop:100,
                marginBottom:100,
                color:"#ff0000",

            }


            
        },
        Grid:{
           marginTop:50,
           marginLeft:50,
          
            [theme.breakpoints.down("md")]:
            {
            marginLeft:0,
             marginRight:500
            }


            
        },
        Grid2:{
            marginLeft:255,
           
            [theme.breakpoints.down("md")]:
            {
              marginLeft:200
            }


            
        },
        Grid4:{
        marginLeft:20,
            [theme.breakpoints.down("md")]:
            {
             marginLeft:-80,
             marginTop:100,
            }


            
        },
        Grid5:{
          
            marginTop:40,
            marginLeft:250,
            marginBottom:20,
            paddingLeft:10,
            height:25,
      
    
            [theme.breakpoints.down("md")]:
            {
           
                marginTop:40,
                marginLeft:110,
                marginBottom:20,
                paddingLeft:10,
                height:90,
                width:600,
                fontSize:30
            
            }


            
        },
        Grid6:{
          
            width:90,
            height:30,
            backgroundColor:"#F2C1FF",
            color:"#65097D",
            cursor:"pointer",
            [theme.breakpoints.down("md")]:
            {   
                width:250,
                height:100,
                fontSize:40,
                
                border:"none",
                backgroundColor:"#F2C1FF",
                color:"#65097D",
                borderRadius:200,
                fontFamily:"Montserrat",
            
            }


            
        },
        Grid7:{
          
            marginTop:40,
            marginLeft:100,
            marginBottom:20,
            paddingLeft:10,
            height:25,
      
    
            [theme.breakpoints.down("md")]:
            {
           
                marginTop:40,
                marginLeft:320,
                marginBottom:20,
                paddingLeft:25,
                height:90,
                width:600,
                fontSize:30
            
            }


            
        },
        Grid8:{
          
            width:90,
            height:30,
            backgroundColor:"#F2C1FF",
            color:"#65097D",
            cursor:"pointer",

      
    
            [theme.breakpoints.down("md")]:
            {
                width:250,
                height:100,
                fontSize:40,
                
                border:"none",
                backgroundColor:"#F2C1FF",
                color:"#65097D",
                borderRadius:200,
                fontFamily:"Montserrat",
            
            }


            
        }

    }
 
 
 )
 
 )
 
 const classes=styles()


    const axios=require('axios').default
    const[scroll,setScroll]=useState(1000)
    const[pop,setPop]=useState(false)
    const[img,setImg]=useState([])
    const[email,setEmail]=useState("")
    const[emailCheck,setEmailCheck]=useState(false)
    const[status,setStatus] = useState()

    const design_access_token="IGQVJXM3gzS244V3hheUhpVEk1ZAjZAJSXNnODRhNF9ZAaFhleGVJcXlxVHJRVGkySnRKWk1UYjhJaU1aeml0akZAkcHZAWZA3R5Q3ZA1amZAzTTB3SGZAkd0thR2gwakEwektjUFgzV3A1VnFCOG04ekJ5NTZAfbAZDZD"



    const togglePop=()=>
    {
        setPop(pop?false:true)

    }


    const titleMaker=()=>
    {
        let string=""
        for(let i=0;i<props.props.caption.length;i++)
        {
            string=string+props.props.caption[i]

            if(props.props.caption[i]&&props.props.caption[i+1]=="\n")
            {
                
                break;  
            }
        }

        return string

    }
const mailSend=(event)=>
{
    
    if(email!="")
    {  
        
        try{
            event.preventDefault()
          
    axios.get(`http://Eraboot-env.eba-3m9py2ee.ap-south-1.elasticbeanstalk.com/api/sendEmail/${email}/${props.props.caption}`)
    .then((res)=>handleAxiosStateTrue(),console.log("axios",status)).catch((Res)=>handleAxiosStateFalse())
        }
        catch{

        }

    setEmail("")

    }

}

const handleAxiosStateTrue=()=>{
    setEmailCheck(true)
    setStatus(true)

}
const handleAxiosStateFalse=()=>{
    setEmailCheck(true)
    setStatus(false)

}



const changeHandlerEmail=(event)=>{setEmail(event.target.value)}
const changePop=()=>{setEmailCheck(false)}

    const imageControl=()=>{
        if(props.props.media_type=="CAROUSEL_ALBUM")
        {
            const qs = require('qs')
           
        //    console.log( JSON.stringify(props.props.id))
          

            // axios.get(`http://192.168.1.68:8080/api/getChildren/${props.props.id}`)
            // .then(
            //     (res)=>    
            //         JSON.parse(res.data.data)
            //         .data.map(
            //             (e)=>
            //             // axios(
            //             //     {
            //             //     method: 'post',
            //             //     url: 'http://192.168.1.68:8080/api/postChildrenData',
            //             //     data: {
            //             //       id:e.id
            //             //     }
            //             //    }).
            //             //    then(
            //                 axios.get(`http://192.168.1.68:8080/api/getChildrenData/${e.id}`)
            //                     .then((res)=>console.log(res))


            //                //)
                           
            //                )
                    
            //     )
              
                // axios({
                //     method: 'post',
                //     url: 'http://192.168.1.68:8080/api/postChildrenData',
                //     data: {
                //       id: JSON.parse(res.data.data).
                //       data.map(
                //           (e)=>e
                //           ).map(
                //               (e)=>e.id
                //               ).map(
                //                   (e)=>e
                //               )
                  
                //     }
                //    })

              //  )

            // axios({
            //     method: 'post',
            //     url: 'http://192.168.1.68:8080/api/postChildren',
            //     data: {
            //       id:props.props.id
            //     }
            //    })
            //.then(

            //   axios({
            //     method: 'get',
            //     url: 'http://192.168.1.68:8080/api/getChildren/',
            //     data: {
            //       id:17852467453641288
            //     }}
            //   )
            // .then((res)=>console.log(res));
           

            return(
        <React.Fragment>

            <Grid item xs={0.5}>
                <Button className={classes.butt2} onClick={togglePop}>
                    <ArrowBackIosRounded className={classes.icon} style={{color:"transparent"}} />
                </Button>
            </Grid>

            <Grid item xs={4} className={classes.Grid4} >            
            <CardMedia image={props.props.media_url} 
                    className={classes.cardMedia3} 
                   >
            </CardMedia>  
            </Grid>
        
            <Grid item xs={1}>
                <Button className={classes.butt3} onClick={togglePop}>
                    <ArrowForwardIosRounded className={classes.icon} style={{color:"transparent"}}/>
                </Button>
            </Grid>

            <Grid item xs={1}>
            <Button className={classes.butt} onClick={togglePop}>
                <Cancel className={classes.icon} />
            </Button>
            </Grid>
         
            <Grid item xs={5}  >
            <Typography className={classes.titles2} >
  
               {titleMaker()}  
               {/* {props.props.caption} */}

            </Typography>
            <Grid item xs={1}>
                <form onSubmit={mailSend}> 
                    <Typography className={classes.titles4}>BUY NOW ?</Typography>
                    <input type="text" placeholder="Email"className={classes.Grid7} value={email} onChange={changeHandlerEmail}></input>
                    <Button className={classes.butt6} >    
                    <input type="Submit" placeholder="submit"className={classes.Grid8}   ></input>
                    </Button>
                </form>
                <Popover
                open={emailCheck}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  onClick={changePop}
               >
                   {console.log(status)}
               {status?<React.Fragment>
                   <CheckCircleOutline className={classes.icon2}/>
                   <Typography className={classes.titles5} > Please check your email.   </Typography> 
                  
                   </React.Fragment>:
                   
                   <React.Fragment>
                        <ErrorOutline className={classes.icon3}/>
                       <Typography  className={classes.titles5} >
                        INVALID EMAIL  
                        </Typography>

                    </React.Fragment> }
               
                </Popover>
        </Grid>
          </Grid>

        </React.Fragment>
            
            )

        }
        else{
            return(
            <React.Fragment>
            <Grid item xs={1} className={classes.Grid}>            
            <CardMedia image={props.props.media_url} 
                  className={classes.cardMedia2}
                  >
            </CardMedia>  
            </Grid>
            <Grid item xs={1}>
              <Button className={classes.butt4} onClick={togglePop}>
                  <Cancel className={classes.icon} />
              </Button>
              </Grid>

            {handleGridChange()}

              </React.Fragment>
            
            )
            
        }


}
   
 const   handleGridChange=()=>{
     return(
        <React.Fragment>
       
      <Grid item xs={7}  className={classes.Grid2}  >
            <Typography className={classes.titles} >
  
        {titleMaker()}  
        {/* {props.props.caption} */}

        </Typography>
        <Grid item xs={1}>
               
                <form onSubmit={mailSend}>
                    <Typography className={classes.titles3}>BUY NOW ? </Typography>
                    <input type="text" placeholder="Email"className={classes.Grid5} value={email} onChange={changeHandlerEmail}></input>
                    <Button className={classes.butt5} >    
                    <input type="Submit" placeholder="submit"className={classes.Grid6}  ></input>
                    </Button>
                </form>

                <Popover
                open={emailCheck}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  onClick={changePop}
               >
                   {console.log(status)}
               {status?<React.Fragment>
                   <CheckCircleOutline className={classes.icon2}/>
                   <Typography className={classes.titles5} >Please check your email.  </Typography> 
                  
                   </React.Fragment>:
                   
                   <React.Fragment>
                        <ErrorOutline className={classes.icon3}/>
                       <Typography  className={classes.titles5} >
                        INVALID EMAIL  
                        </Typography>

                    </React.Fragment> }
               
                </Popover>



        </Grid>
             
              
    </Grid>
    </React.Fragment>
     )
}


    return(
        <React.Fragment>
                
             <Card className={classes.card} >

               
                <CardMedia image={props.props.media_url} 
                className={classes.cardMedia}
                 onClick={togglePop}>
                </CardMedia>   
              
                <Popover open={pop}
                 anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                 
                  >
                    <Grid container>      

                        {imageControl()}

                      {/* {handleGridChange()} */}

                    </Grid> 

             </Popover>

            </Card>

                 




        </React.Fragment>

    )
}
export default Item