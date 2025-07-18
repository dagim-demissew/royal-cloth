import { React, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchCollectionsStart } from "../../redux/shop/shop-action";
import { selectIsCollectionFetching,selectIsCollectionLoaded } from "../../redux/shop/shop-selector";
import withSpinner from "../../components/with-spinner/with-spinner";
import Collection from "../category/Collection";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";

const ShopPage = ({ isFetching, fetchCollectionsStart ,isLoaded}) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, []);
  const unsubscribeFromSnapshot = null;
  const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
  const CollectionWithSpinner = withSpinner(Collection);
  console.log(isLoaded)
  return (
    <div className="shop-page">
      <Routes>
        <Route
          path="/"
          element={<CollectionOverviewWithSpinner isLoading={isFetching} />}
        />
        <Route
          path="/:collectionId"
          element={
            <CollectionWithSpinner isLoading={!isLoaded} />
          }
        />
      </Routes>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching,
  isLoaded : selectIsCollectionLoaded,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
