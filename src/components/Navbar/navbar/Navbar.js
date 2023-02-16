import React from "react";
import "./Navbar.css";

const Navbar = () => {
  // const navbarToggler = document.querySelector(".navbar-toggler-button");
  // const navbarItems = document.querySelectorAll(".navbar-item");

  // navbarToggler.addEventListener("click", function () {
  //   this.classList.toggle("active");
  //   navbarItems.forEach(function (item) {
  //     item.classList.toggle("active");
  //   });
  // });
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="navbar-left">
            <a href="#onTop" className="navbar-item">
              Our Collection
            </a>
            <a href="#onTop" className="navbar-item">
              About Us
            </a>
          </div>
          <div className="navbar-center">
            <a href="#onTop" className="navbar-item">
              <img
                src="/gallary/nikelogo.png"
                alt="Nike Logo"
              />
            </a>
          </div>
          <div className="navbar-right">
            <a href="#onTop" className="navbar-item navbar-button">
            <img src="gallary/bagw.svg" alt="" />
              cart
            </a>
          </div>
          <div className="navbar-toggler">
            <button className="navbar-toggler-button">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
