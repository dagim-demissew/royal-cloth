import React from "react";
import { Route, Routes } from "react-router-dom";
import Collection from "../category/Collection";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionOverview />} />
        <Route path="/:collectionId" element={<Collection />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
