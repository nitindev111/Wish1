import { SET_GRAPH_DATA,INCREMENT_COUNTER, DECREMENT_COUNTER,SUBMIT_BUTTON,CLEAR_BUTTON,SET_VALIDATION_STATUS } from '../constants/ActionTypes';
import {data} from './../data/Data.js'
console.log("fdsfsdfsd",data);

const initialState={
  questions:data,
  Result:
   [{text:"Correct",value:0},
   {text:"InCorrect",value:0}]
  
 
}

export default function QuestionReducer(state = initialState, action) {
  switch (action.type) {
 case SET_GRAPH_DATA:
      return Object.assign({},state,{
        Result:action.payload})
  default:
    return state;
  }
}


// export default function submit(state=initialState,action){
//   switch(action.type){
//     case SUBMIT_BUTTON:
//     return {...state,response:action.payload}
//   }
// }
