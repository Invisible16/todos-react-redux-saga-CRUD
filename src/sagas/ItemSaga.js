import { put, takeEvery } from 'redux-saga/effects'
import getItems from '../fetchAPI/getItems'
import createItemAPI from '../fetchAPI/createItemAPI'
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

function* createItemSaga(action) {
   //phát ra action success or fail
   try {
      yield createItemAPI(action.payload);
      yield put({
         type: types.CREATE_ITEM_SUCCESS
      });
      //re GET để lấy dữ liệu mới
      yield put({
         type: types.GET_ITEM_REQUEST
      });
   } catch (e) {
      yield put({ type: types.CREATE_ITEM_FAILURE, payload: e.message });
   }
}

export const ItemSaga = [
   //takeEvery(type action, hàm xử lý (try catch))
   takeEvery(types.GET_ITEM_REQUEST, getListItem),
   takeEvery(types.CREATE_ITEM_REQUEST, createItemSaga)
]