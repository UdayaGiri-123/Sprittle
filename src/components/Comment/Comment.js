import React, { useState } from "react";
import { TextField,Button, Container } from "@material-ui/core";
import { getPosts,commentPost } from "../../redux/actions";
import { useDispatch } from "react-redux";
import useStyles from "./style";

function Comment(props){
    const [content,setcontent]=useState('');
    const classes = useStyles();
    const dispatch = useDispatch();
    const handlesubmit=(e)=>{
    e.preventDefault();
    props.closeModal(false);
     dispatch(commentPost(props.post._id,content));
     dispatch(getPosts());
    }
return(
    <Container>
    <form noValidate autoComplete="off" onSubmit={handlesubmit}>
     <TextField name='comment' label ='Add a comment..' 
     value={content}    
     onChange={(e)=>{setcontent(e.target.value)}}></TextField>
     <br/>
     <Button className={classes.feild} type='submit' variant="contained" color='primary'>post</Button>
    </form>    
    </Container>
)
}
export default Comment;