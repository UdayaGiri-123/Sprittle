import * as api  from "../api/posts";

// createpost 
export const createPost = (post)=>async(dispatch)=>{
     try {
        await api.createposts(post);
        dispatch({type:"Create_Post",payload:post}) 
        } 
    catch (error) {
        console.log(error.message);
       }     
       };

//getPosts
export const getPosts =()=>async(dispatch)=>{
    try {
       const post= await api.fetchposts();
       dispatch({type:"Get_Posts",payload:post.data})     
        } 
    catch (error) {
        console.log(error.message);
        }
        };

//likepost
export const likePost =(id)=>async(dispatch)=>{
    try {
        const { data } = await api.likePost(id)
         dispatch({type:"Like_Post",payload:data})
        } 
    catch (error) {
        console.log(error);
        }
        }

//commentpost
export const commentPost=(id,comment)=>async(dispatch)=>{
    try {
        const data = await api.commentpost(id,comment)
        console.log(data);
        dispatch({type:"Comment_Post",payload:data.data})

        } 
    catch (error) {
        console.log(error);
       }
}



