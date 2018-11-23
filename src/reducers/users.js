import * as types from '../constants/ActionTypes';

const initialState = {
  loading : false,
  users : []
}

 export default ( state = initialState, { type, data, id, newUpdate }) => {
  switch (type){
    case types.FETCH_USER_LIST : 
      return {
        loading : true,
        users : []
      } ;
    case types.FETCH_USER_LIST_SUCCESS:
      return {
        loading : false,
        users : data
      };
    case types.REMOVE_USER: 
      return {
        state
      }
    case types.REMOVE_USER_SUCCESS:
    const newState = state.state.users.filter(user => user.id !== id)
      return {
        loading : false,
        users   : newState
      }
    case types.UPDATE_USER:
      return {
        state,
        //user : state.data.slice(0, id),
        newUpdate,
        //dataU : state.users.slice(id+1)

      }
    default :
      return state;
  }
}
