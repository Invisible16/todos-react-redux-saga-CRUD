import { put, takeEvery } from 'redux-saga/effects'
import getItems from '../fetchAPI/getItems'
import createItemAPI from '../fetchAPI/createItemAPI'
import updateItemAPI from '../fetchAPI/updateItemAPI'
import deleteItemAPI from '../fetchAPI/deleteItemAPI'
import searchItemAPI from '../fetchAPI/searchItemAPI'
import pageAPI from '../fetchAPI/pageAPI'


import * as types from '../constant'
function* getListItem(action) {
   //phát ra action success or fail
   try {
      const res = yield getItems();
      yield put({ type: types.GET_ITEM_SUCCESS, payload: res });
   } catch (e) {
      yield put({ type: types.GET_ITEM_FAILURE, payload: e.message });
   }
}
function* getPaginationItems(action) {
   //phát ra action success or fail
   try {
      console.log(action.payload)
      let totalItems = yield getItems();
      let totalPage = Math.ceil(totalItems.length / action.payload.limit)
      console.log('totalPage',totalPage)
      const res = yield pageAPI(action.payload);
      console.log('pagi',res)
      yield put({ type: types.GET_PAGE_SUCCESS, payload: { data: res, totalPage } });
   } catch (e) {
      yield put({ type: types.GET_PAGE_FAILURE, payload: e.message });
   }
}

function* createItemSaga(action) {
   //phát ra action success or fail
   try {
      yield createItemAPI(action.payload.data);
      yield put({
         type: types.CREATE_ITEM_SUCCESS
      });
      //re GET để lấy dữ liệu mới
      yield put({
         type: types.GET_PAGE_REQUEST, payload: action.payload.pagination
         //khi phan trang thi Research va hien thi trang cuoi
         //  type: types.GET_ITEM_REQUEST
      });
   } catch (e) {
      yield put({ type: types.CREATE_ITEM_FAILURE, payload: e.message });
   }
}
function* updateItemSaga(action) {
   //phát ra action success or fail
   try {
      yield updateItemAPI(action.payload.data);
      yield put({
         type: types.UPDATE_ITEM_SUCCESS
      });
      //re GET để lấy dữ liệu mới
      //console.log('update item saga',action.payload)
      if (action.payload.textSearch !== "") {
         yield put({
            type: types.SEARCH_ITEM_REQUEST,
            payload: {textSearch: action.payload.textSearch,pagination:action.payload.pagination}
         });
      } else {
         yield put({
            type: types.GET_PAGE_REQUEST, payload: action.payload.pagination
         });
      }

   } catch (e) {
      yield put({ type: types.UPDATE_ITEM_FAILURE, payload: e.message });
   }
}

function* deleteItemSaga(action) {
   //phát ra action success or fail
   try {
      yield deleteItemAPI(action.payload.data);
      yield put({
         type: types.DELETE_ITEM_SUCCESS
      });
      //re SEARCH or re get để lấy dữ liệu mới
      if (action.payload.textSearch !== "") {
         yield put({
            type: types.SEARCH_ITEM_REQUEST,
            payload: {textSearch: action.payload.textSearch,pagination:action.payload.pagination}
         });
      } else {
         yield put({
            type: types.GET_PAGE_REQUEST, payload: action.payload.pagination
         });
      }
   } catch (e) {
      yield put({ type: types.DELETE_ITEM_FAILURE, payload: e.message });
   }
}
function* searchItemSaga(action) {
   //phát ra action success or fail
   try {
      const totalItems = yield searchItemAPI(action.payload.textSearch);
      console.log(action.payload)
      //let totalItems = yield getItems();
      let totalPage = Math.ceil(totalItems.length / action.payload.pagination.limit)
      console.log('totalPage',totalPage)
      const res = yield searchItemAPI(action.payload);
  
      
      yield put({
          type: types.SEARCH_ITEM_SUCCESS, payload: { data: res, totalPage }
      });

   } catch (e) {
      yield put({ type: types.SEARCH_ITEM_FAILURE, payload: e.message });
   }
}

export const ItemSaga = [
   //takeEvery(type action, hàm xử lý (try catch))
   takeEvery(types.GET_ITEM_REQUEST, getListItem),
   takeEvery(types.CREATE_ITEM_REQUEST, createItemSaga),
   takeEvery(types.UPDATE_ITEM_REQUEST, updateItemSaga),
   takeEvery(types.DELETE_ITEM_REQUEST, deleteItemSaga),
   takeEvery(types.SEARCH_ITEM_REQUEST, searchItemSaga),
   takeEvery(types.GET_PAGE_REQUEST, getPaginationItems)

]