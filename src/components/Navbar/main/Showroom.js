import React from "react";
import './Main.css'
const Showroom = ({ name, img }) => {
  return (
    <div>
      <div className="collection_box mb-10">
        <img src={img} alt="" className="hover:scale-125 transition-all duration-500 cursor-pointer w-full"/>
        <div className="price_name">
          <h1 className="text-4xl font-bold text-white	">{name}</h1>

        </div>
     
      </div>
    </div>
  );
};

export default Showroom;
