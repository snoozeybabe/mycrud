import * as types from '../constants/ActionTypes';
import userApi from '../userApi/userApi';
import { CALL_API } from 'redux-api-middleware';


const getUser= _ =>{
}


// export const addUser = user => ({
//   type  : types.ADD_USER,
//   user
// });

// export const removeUser = id =>({
//   type : type.REMOVE_USER,
//   id
// });

// export const updateUser = user =>({
//   type : type.UPDATE_USER,
//   user
// });

export const fetchUsersList = () => {return {
  [CALL_API]: {
    endpoint : 'http://localhost:3001/users',
    method : 'GET',
    types : [types.FETCH_USER_LIST, 
             {
               type : types.FETCH_USER_LIST_SUCCESS,
               payload: (action, state, res) => {
                 return res.json().then(json => {
                   console.log(json);
                    return json.data;
                 })
               }
             }
            , types.FETCH_USER_LIST_FAILURE],
  }
}}

export const getUserList = users =>{
 return {
  type : types.USER_LIST,
  users
}};


export function displayUserList(){
  return dispatch => {
    return fetch('/users')
    .then(res => res.json())
    .then(({ data }) => {   
      console.log(data)
      dispatch(getUserList(data));
    })
    .catch(error =>{
      throw(error);
    })
  }
}

