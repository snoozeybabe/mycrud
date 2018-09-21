import * as types from '../constants/ActionTypes';

 const users = ( state = [], action) => {
  console.log("Actions" , action)
  switch (action.type){
    case types.FETCH_USER_LIST : 
      return state;
    case types.FETCH_USER_LIST_SUCCESS : 
      return action.payload;
    case types.USER_LIST : 
      return action.users;
    default :
      return state;
  }
}
export default users;