import React from "react";
import {useSelector} from "react-redux";
import {Grid} from '@material-ui/core';

import Post from "../Post/Post";
import useStyles from "./styles.js";

const Posts= ()=>{
    const posts = useSelector((state)=>state.posts);
    const classes=useStyles();

    return  (
       !posts.length? null:(
       <Grid container xs={12} spacing={3} className={classes.container} >
        { posts.map((post)=>(
                <Grid item xs={12} key={post._id} >
                <Post post={post} />
                </Grid>
            ))
        }
       </Grid>)
    ) 
}
export default Posts;