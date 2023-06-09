import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${
          location.pathname == "/product" ? `gr-${grid}` : "col-3 py-2"
        }`}
      >
        <Link
          to={`${location.pathname == "/" ? "product/:id" : location.pathname == "product/:id" ? "/product/:id" :":id"}`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src="images/wish.svg" alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src="/images/tab1.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img
              src="/images/tab.jpg"
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphone bulk 10m pack multi colored
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`discription ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <button className="border-0 bg-transparent">
                <img src="images/prodcompare.svg" alt="addCart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/add-cart.svg" alt="addCart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname == "/product" ? `gr-${grid}` : "col-3 py-2"
        }`}
      >
        <Link
           to={`${location.pathname == "/" ? "/product/:id" : location.pathname == "/product/:id" ? "/product/:id" :""}`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <Link>
              {" "}
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="/images/tab1.jpg"
              className="img-fluid"
              alt="product image"
            />
            <img
              src="/images/tab.jpg"
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              kids headphone bulk 10m pack multi colored
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`discription ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <button className="border-0 bg-transparent">
                <img src="images/prodcompare.svg" alt="addCart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/add-cart.svg" alt="addCart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
