import React from "react";
import './Main.css'
const AllCollection = ({ name, img, price }) => {
  return (
    <div>
      <div className="collection_box mb-10">
        <img src={img} alt="" className="hover:scale-125 transition-all duration-500 cursor-pointer"/>
        <div className="price_name">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-3xl font-bold">{price}</p>
        </div>
        <div className="addCarticon"><img src="gallary/bagb.svg" alt="" /></div>
      </div>
    </div>
  );
};

export default AllCollection;
