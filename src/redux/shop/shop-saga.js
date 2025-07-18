import ShopActionTypes from "./shop-types";
import { takeLatest, call, put, all } from "redux-saga/effects";
import { collection, getDocs } from "firebase/firestore";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebaseUtil";
import { fetchCollectionSuccess, fetchCollectionsFaliure } from "./shop-action";

export function* fetchCollectionsAsync() {
  yield console.log("i am fired!");
  try {
    const collectionRef = collection(firestore, "collections");
    const snapshot = yield getDocs(collectionRef);
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFaliure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
