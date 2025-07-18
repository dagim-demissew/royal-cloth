import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionsUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionsUrlParam]
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).length > 0 ? true : false
);
