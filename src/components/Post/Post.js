import React from "react";
import {Avatar, Card,CardContent,CardHeader, CardActions,Button,Typography} from '@material-ui/core';
import FavoriteIcon  from '@material-ui/icons/Favorite';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import { getPosts, likePost } from "../../redux/actions";
import { useState } from "react";
import moment from "moment";
import  Comment  from "../Comment/Comment";

function Post(props){
  const [openModal,setopenModal]=useState(false);
  const dispatch = useDispatch();
  const classes=useStyles();
  return <Card className={classes.card}>
       <CardHeader 
        avatar={
            <Avatar  >{props.post.name[0]}</Avatar>
        }
        action={
          <Button>
            < MoreVertIcon/>
          </Button>
          }
          title={props.post.name}
          subheader={moment(props.post.createdAt).fromNow()}
          >
    </CardHeader>
    <CardContent>
    <Typography variant ='body2' gutterBottom color='textSecondary'>{props.post.body}</Typography>
    
    </CardContent>
    <CardActions disableSpacing>
        <Button onClick={() =>{
          dispatch(likePost(props.post._id))
          dispatch(getPosts())}} >
          <FavoriteIcon color="primary" />{' '}
          <Typography variant="body2">{props.post.likeCount} </Typography>
        </Button>
        <Button onClick={()=>{
            setopenModal(true);
          }}>
          
        <InsertCommentIcon color="primary"/>
        <Typography variant="body2">{' '}{props.post.commentCount}{' '}comments</Typography>
    </Button>
    </CardActions>
    {openModal && <Comment closeModal={setopenModal} post={props.post}/> }
    </Card>
}

export default Post;