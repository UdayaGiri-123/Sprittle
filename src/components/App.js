import React from "react";
import {  useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container,Grid } from "@material-ui/core";
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import { getPosts } from "../redux/actions";
import useStyles from "../styles";

function App(){
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(getPosts());
    },[dispatch]);

    return <Container maxwidth >
        <Grid container item lg={12} spacing={2} className={classes.container}>
        <Grid item lg={6} sm={12} className={classes.item}><Posts /></Grid>
        <Grid item lg={6} sm={12} className={classes.item}><Form /></Grid>
        </Grid>
    </Container>
}

export default App;