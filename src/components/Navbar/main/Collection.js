import React from "react";
import './Main.css'

const Collection = ({ name, img, price }) => {
  return (
    <div className="collection_box mb-10">
      <img src={img} alt="" />
      <div className="price_name">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-5xl font-bold">{price}</p>
      </div>
      <div className="addCart">Add to cart</div>
    </div>
  );
};

export default Collection;
