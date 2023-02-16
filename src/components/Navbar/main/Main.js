import React from "react";
import AllCollection from "./AllCollection";
import Collection from "./Collection";
import Showroom from "./Showroom";

const Main = () => {
  const details = [
    {
      name: "Nike Air Max 1",
      img:
        "https://static.nike.com/a/images/t_default/061b64b5-fa67-4177-be5d-675e88208bc7/waffle-one-se-shoe-8Qm3Hr.png",
      price: "$270",
    },
    {
      name: "Nike Air Max 2",
      img:
        "https://static.nike.com/a/images/t_default/5ef51823-5a3d-406f-a652-f0d879d9bc0e/air-max-plus-shoes-04K813.png",
      price: "$220",
    },

    {
      name: "Nike Air Max 3",
      img:
        "https://static.nike.com/a/images/t_default/5ef51823-5a3d-406f-a652-f0d879d9bc0e/air-max-plus-shoes-04K813.png",
      price: "$260",
    },
    {
      name: "Nike Air Max 4",
      img:
        "https://static.nike.com/a/images/t_default/061b64b5-fa67-4177-be5d-675e88208bc7/waffle-one-se-shoe-8Qm3Hr.png",
      price: "$250",
    },

    {
      name: "Nike Air Max 5",
      img:
        "https://static.nike.com/a/images/t_default/561d8b68-bc31-498c-a360-882b4f5ab3d9/air-max-270-shoes-GMBL00.png",
      price: "$240",
    },
    {
      name: "Nike Air Max 6",
      img:
        "https://static.nike.com/a/images/t_default/4abef2ff-4802-470e-9414-86d8d70fff6c/air-max-dawn-shoe-7r9R5R.png",
      price: "$290",
    },
    {
      name: "Nike Air Max 5",
      img: "gallary/trending1.png",
      price: "$240",
    },
    {
      name: "Nike Air Max 6",
      img: "gallary/trending2.png",
      price: "$290",
    },
  ];

  return (
    <div className="container-fluid py-0 px-10 main">
    
      <div className="row">
        {/* //!Top img */}
        
        <div
          className="col-md-12"
          id="topImg"
          style={{ backgroundColor: "#ebebeb" }}
        >
          <img src="gallary/shoestop.png" alt="" style={{ width: "100%" }} />
        </div>

        {/* //!Popular collection */}

        <div className="row">
          <div className="col-md-6 p-5">
            <h1 className="text-5xl font-bold">Popular Collection</h1>
          </div>
          <div className="col-md-6 p-5 text-left text-xl sideText pl-[30px] ">
            <p className="cursor-pointer">Discover All Products <img src="gallary/right-arrow-svgrepo-com.svg" alt="" className=" ml-[10px] h-[15px] ml d-inline" /></p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Collection
              name={details[0].name}
              img={details[0].img}
              price={details[0].price}
            />
          </div>
          <div className="col-md-6">
            <Collection
              name={details[1].name}
              img={details[1].img}
              price={details[1].price}
            />
          </div>
        </div>

        {/* //! Trending Now */}

        <div className="row">
          <div className="col-md-6 p-5">
            <h1 className="text-5xl font-bold">Trending Now</h1>
          </div>
          <div className="col-md-6 p-5 text-left text-xl sideText pl-[30px] ">
            <p className="cursor-pointer">Discover All Products<img src="gallary/right-arrow-svgrepo-com.svg" alt="" className=" ml-[10px] h-[15px] ml d-inline" /></p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Collection
              name={details[2].name}
              img={details[2].img}
              price={details[2].price}
            />
          </div>
          <div className="col-md-6">
            <Collection
              name={details[3].name}
              img={details[3].img}
              price={details[3].price}
            />
          </div>
        </div>

        {/* //! All collections */}

        <div className="row">
          <div className="col-md-6 p-5">
            <h1 className="text-5xl font-bold">All collections</h1>
          </div>
          <div className="col-md-6 p-5 text-left text-xl sideText pl-[30px] ">
            <p className="cursor-pointer">
              Lorem, ipsum uod perspiciatis perferendisdolore alias itaque est
              dolores. <img src="gallary/right-arrow-svgrepo-com.svg" alt="" className=" ml-[10px] h-[15px] ml d-inline" />
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <AllCollection
              name={details[4].name}
              img={details[4].img}
              price={details[4].price}
            />
          </div>
          <div className="col-md-4">
            <AllCollection
              name={details[5].name}
              img={details[5].img}
              price={details[5].price}
            />
          </div>
          <div className="col-md-4">
            <AllCollection
              name={details[4].name}
              img={details[4].img}
              price={details[4].price}
            />
          </div>
        </div>
        <div className="row pt-6">
          <div className="col-md-4">
            <AllCollection
              name={details[5].name}
              img={details[5].img}
              price={details[5].price}
            />
          </div>
          <div className="col-md-4">
            <AllCollection
              name={details[4].name}
              img={details[4].img}
              price={details[4].price}
            />
          </div>
          <div className="col-md-4">
            <AllCollection
              name={details[5].name}
              img={details[5].img}
              price={details[5].price}
            />
          </div>
        </div>

        <div className="col-md-12 my-4 py-3 border-y-2 border-black	text-center font-bold text-4xl cursor-pointer">
          Discover All Products <img src="gallary/right-arrow-svgrepo-com.svg" alt="" className=" ml-[10px] h-[15px] ml d-inline" />
        </div>

        {/* //! Our showroom */}

        <div className="row">
          <div className="col-md-6 p-5">
            <h1 className="text-5xl font-bold">Our Showroom</h1>
          </div>
          <div className="col-md-6 p-5 text-left text-xl sideText pl-[30px] ">
            <p >
              Lorem, ipsum uod perspiciatis perferendisdolore alias itaque est
              dolores <img src="gallary/right-arrow-svgrepo-com.svg" alt="" className=" ml-[10px] h-[15px] d-inline" />
            </p>
          </div>
        </div>

        <div className="row mb-20">
          <div className="col-md-6">
            <Showroom
              name={details[6].name}
              img={details[6].img}
              price={details[6].price}
            />
          </div>
          <div className="col-md-6">
            <Showroom
              name={details[7].name}
              img={details[7].img}
              price={details[7].price}
            />
          </div>
        </div>

        {/* //! Member */}
        <div className="container-fluid py-0 px-8 member">
          <div className="row bg-[#111111]">
            <div className="col-md-6 p-20">
              <h1 className="text-5xl font-bold text-white pb-10">
                Become a Member
              </h1>
              <p className="text-xl text-white pb-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi rerum aperiam aliquid perferendis.
              </p>
              <button className="bg-white px-10 py-3 text-xl font-bold hover:bg-black">
                Join Now
              </button>
            </div>
            <div className="col-md-6 p-5">
              <img src="gallary/nikelogob.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
