import { RESET_FORM,INCREMENT_COUNTER, DECREMENT_COUNTER,SUBMIT_BUTTON,CLEAR_BUTTON,SET_GRAPH_DATA } from '../constants/ActionTypes';



export function setGraph(data){
  console.log("set graph function data passsed",data);
  return{
    type:SET_GRAPH_DATA,
    payload:data
  }


}


export function reset(){
  return{
    type:RESET_FORM
  }
}
