import { Create_Post,Get_Posts,Like_Post,Comment_Post} from "../actionTypes";

// Initial state
export default function posts(posts=[],action){

    switch(action.type){
        case Create_Post:
            return [...posts,action.payload]
        case Get_Posts:
            return action.payload
        case Like_Post:
            return posts.map((post)=>post._id===action.payload._id?action.payload:post)
        case Comment_Post:
            return posts.map((post)=>post._id===action.payload._id?action.payload:post)
        default:
            return posts
    }
}