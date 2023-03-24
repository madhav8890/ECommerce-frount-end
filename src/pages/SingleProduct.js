import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
import Color from "../components/Color";
import { Link, NavLink } from 'react-router-dom'
import {AiOutlineHeart} from 'react-icons/ai'
import {MdCompare} from 'react-icons/md'

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };
  const [orderedProduct, setorderedProduct] = useState(true);

  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div className="">
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div className="">
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />{" "}
              </div>
              <div className="">
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Kids HeadPhone Bulk 10 Pack Bulk Multi Colour For Students
                </h3>
              </div>
              <div className="border-bottom py-3">
              <p className="price">$ 100.00</p>
              <div className="d-flex align-items-center gap-10">
                <ReactStars
                  count={5}
                  size={24}
                  value={4}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="mb-0 t-review">(2 Reviews)</p>
                <a className="review-btn" href="#review">Write a Review</a>
              </div>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Smart Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">Havells</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Tegs :</h3>
                  <p className="product-data">
                    {" "}
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Watch
                    </span>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Availablity :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size:</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                  </div>
                </div>
                <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                  <h3 className="product-heading">Colour :</h3>
                  <Color />
                </div>
                <div className="d-flex gap-15 align-items-center flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity:</h3>
                  <div className="product-data">
                    <input type="number" name="" min={1} max={10} id="" style={{ width: '70px' }} className="form-control" />
                  </div>
                  <div className='d-flex gap-30 ms-5 x  align-items-center'>
                    <button className='button border-0' type='submit'>Add to Cart</button>
                    <button className='button signup'>Buy Now</button>
                  </div>
                </div>
                <div className="d-flex align-itmes-center gap-15">
                  <div>
                    <a href=""><AiOutlineHeart  className="fs-5 me-2"/>Add To Compare</a>
                  </div>
                  <div>
                    <a href=""><MdCompare className="fs-5 me-2"/>Add To Compare</a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Shipping & Returns</h3>
                  <p className="product-data">free shipping and return avilable on all ordders! <br/>
                  we ship all US damastic order within <br/> 5 to 10 business days!</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Copy Product Link</h3>
                  <p className="product-data">
                    <a href="javascript:void(0)" onClick={()=>{copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg")}}>
                    Copy Product Link
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper  home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="comments"
                    >
                      {" "}
                    </textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="review mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Navdeep</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="populer-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Populer products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
