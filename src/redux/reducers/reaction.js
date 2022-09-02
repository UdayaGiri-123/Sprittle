import { Like_Post,Comment_Post } from "../actionTypes";

export default function reactions(state={},action){
    switch(action.type){
        case Like_Post:{
        return console.log(' post is liked');
         
        }
        case Comment_Post :{
          return  console.log(' post is commented');
        }
        default:
            {return state;}
    }
}