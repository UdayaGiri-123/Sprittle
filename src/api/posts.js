import axios from 'axios';
const url="https://sprittle-project.herokuapp.com/";

export const fetchposts=()=>axios.get(url);
export const createposts=(newpost)=>axios.post(url,newpost);
export const likePost=(id)=>axios.patch(`${url}/likepost/${id}`);
export const commentpost=(id,comment)=>axios.patch(`${url}/commentpost/${id}/${comment}`)



