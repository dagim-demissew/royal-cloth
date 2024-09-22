import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selector";
import CollectionItem from "../../components/collection-item/CollectionItem";
import "./collection.scss";

const Collection = () => {
  const { collectionId } = useParams();

  // Use useSelector hook to access the collection directly
  const collection = useSelector((state) =>
    selectCollection(collectionId)(state)
  );
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {collection &&
          collection.items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
