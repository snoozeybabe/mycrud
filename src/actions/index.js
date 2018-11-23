import * as types from '../constants/ActionTypes';


export const requestUsers = () => {
  return {
     type : types.FETCH_USER_LIST, 
     loading  : true,
  }};

export const requestUsersSuccess = ({ data }) => {
  return  { type: types.FETCH_USER_LIST_SUCCESS, data : data, loading : false} 
};

export const fetchedUsers = () => {
  return { type : types.FETCHED_USERS};
};

export const deleteUser = (id) => {
  return {
    type : types.REMOVE_USER,
    id
    
  }
};

export const deleteUserSuccess = (id) => {
  console.log('Trying to delete', id);
  return { 
    type : types.REMOVE_USER_SUCCESS, 
    id 
  }
}

export const updateUser = (data) => {
  return {
    type : types.UPDATE_USER,
    data
  }
};
export const updateUserSuccess = (data) => {
  return {
    type : types.UPDATE_USER_SUCCESS,
    data
  }
};




