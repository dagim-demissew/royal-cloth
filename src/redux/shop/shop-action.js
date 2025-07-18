import ShopActionTypes from "./shop-types";
import { collection, getDocs } from "firebase/firestore";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebaseUtil";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFaliure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FALIURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return async (dispatch) => {
   
  };
};
