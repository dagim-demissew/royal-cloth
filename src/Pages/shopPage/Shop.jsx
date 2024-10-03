import { React, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { firestore } from "../../firebase/firebaseUtil";
import { connect } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { updateCollections } from "../../redux/shop/shop-action";
import { convertCollectionSnapshotToMap } from "../../firebase/firebaseUtil";
import withSpinner from "../../components/with-spinner/with-spinner";
import Collection from "../category/Collection";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";

const ShopPage = ({ updateCollections }) => {
  const unsubscribeFromSnapshot = null;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(firestore, "collections");
        const snapshot = await getDocs(collectionRef); 
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
  const CollectionWithSpinner = withSpinner(Collection);
  return (
    <div className="shop-page">
      <Routes>
        <Route
          path="/"
          element={<CollectionOverviewWithSpinner isLoading={isLoading} />}
        />
        <Route
          path="/:collectionId"
          element={<CollectionWithSpinner isLoading={isLoading} />}
        />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
