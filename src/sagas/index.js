import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import * as types from '../constants/ActionTypes';
import { requestUsers, requestUsersSuccess,deleteUserSuccess } from '../actions';
import { deleteUserApi,insertUsers } from '../userApi/userApi';
import  { fetchData }  from '../utils/helpers';


export default function* mySaga(){
  yield takeLatest(types.FETCHED_USERS, fetchUsers);
  yield takeEvery(types.REMOVE_USER, removeUser);
  yield takeEvery(types.UPDATE_USER, updateUser);
}

 function* fetchUsers(){
  try {
    yield put(requestUsers());
    const data = yield call(() => {
      return fetchData('/users');
    });
    yield put(requestUsersSuccess(data));
  }catch(e){
      console.log(e);
  }
}

function* removeUser({ id }){
  try{
      const newList = yield call(deleteUserApi, id);
      yield put(deleteUserSuccess(id));
  }catch(e){
    console.log(e);
  }
}

function* updateUser(datas){
  try{
      yield call(insertUsers(datas));
      
  }catch(e){
    console.log(e)
  }
}


