import React from "react";
import {createPost} from "../../redux/actions";
import {useDispatch} from 'react-redux';
import { useState} from "react";
import {Paper,TextField,Button,Grid, Typography} from "@material-ui/core";

import useStyles from './styles.js';

function Form(){
  const [postData,setpostData] = useState({
    name:'',body:''
   })
   const classes= useStyles();
   const dispatch = useDispatch();
   const handleSubmit =(e)=>{
      e.preventDefault();
      dispatch(createPost(postData),[dispatch]);
      clear()
    }
    const clear=()=>{
      setpostData({
        name:'',body:''
   });
    }
    return <Paper className={classes.paper}>
        <form noValidate autoComplete="off" className={classes.form} onSubmit={handleSubmit} >
        <Typography variant="h6" >Enter a Comment</Typography>
        <TextField name ='name' className ={classes.feild} label="Name"  variant ="outlined" color='primary' value={postData.name} fullWidth onChange={(e)=>setpostData({...postData, name:e.target.value})} required />
         <br/>
        <TextField name='body' className ={classes.feild} label="What I did interesting today.."  multiline rows={8} variant="outlined" fullWidth
          value={postData.body}  onChange={(e)=>setpostData({...postData, body:e.target.value})}
           required />
           <br/>
           <Grid container justify="center">
          <Button type="submit" color='primary' variant ='contained' className={classes.feild}
         onClick={handleSubmit}>Submit</Button></Grid>
        </form>
    </Paper>
}

export default Form; 