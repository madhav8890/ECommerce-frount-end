import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta";
import ProductCart from '../components/ProductCard'
import Color from "../components/Color";
import Container from "../components/Container";
const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title"> Shop By categories</h3>
                <div>
                  <ul className="ps-0"> 
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Cemera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title"> filter By</h3>
                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        &nbsp; In Stock(4)
                      </label>
                    </div>
                    <div>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        &nbsp; Out Of Stock(0)
                      </label>
                    </div>
                    <hr/>
                    <h5 className="sub-title">Price</h5>
                    <div className="d-flex align-items-center gap-10">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="From"
                        />
                        <label for="floatingInput">From</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput1"
                          placeholder="To"
                        />
                        <label for="floatingInput1">To</label>
                      </div>
                    </div>
                    <hr/>
                    <h5 className="sub-title">Colors</h5>
                    <div>
                      <Color/>
                    </div>
                    <hr/>
                    <h5 className="sub-title">Size</h5>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="color-1"
                        />
                        <label className="form-check-label" htmlFor="color-1">
                          S(10)
                        </label>
                      </div><div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="color-1"
                        />
                        <label className="form-check-label" htmlFor="color-1">
                          M(8)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="color-1"
                        />
                        <label className="form-check-label" htmlFor="color-1">
                          XL(5)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="color-1"
                        />
                        <label className="form-check-label" htmlFor="color-1">
                         XXL(2)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tag</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center  gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">HeadPhone</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">toy</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Smart Phone</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Speaker</span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Rnadome Product</h3>
                <div>
                  <div className="random-product mb-3 d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className="img-fluid" alt="watch"/>
                    </div>
                    <div className="w-50">
                      <h5>Kids headphone buls 10 pack multi colord for student</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <b>$ 300</b>
                    </div>
                  </div>
                  <div className="random-product d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className="img-fluid" alt="watch"/>
                    </div>
                    <div className="w-50">
                      <h5>Kids headphone buls 10 pack multi colord for student</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
               <div className="d-flex justify-content-between align-items-center">
               <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{width:'100px'}}> Sort By:</p>
                  <select className="form-control form-select" id="" name="">
                    <option value='manual'>Featured</option>
                    <option value='best-selling'>Best Selling</option>
                    <option value='title-ascending'>Alphabatically A-Z</option>
                    <option value='tilte-desending'>Alphabatically Z-A</option>
                    <option value='price-ascending'>Price Low To Heigh</option>
                    <option value='price-disending'>Price Heigh To Low</option>
                    <option value='created-ascending'>Date Old To New</option>
                    <option value='created-disending'>Date New To Old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0"> 400 products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img onClick={()=>{setGrid(3);}} src="images/gr4.svg" className="d-block img-fluid" alt="grid"/>
                    <img onClick={()=>{setGrid(4);}} src="images/gr3.svg" className="d-block img-fluid" alt="grid"/>
                    <img onClick={()=>{setGrid(6);}} src="images/gr2.svg" className="d-block img-fluid" alt="grid"/>
                    <img onClick={()=>{setGrid(12);}} src="images/gr.svg" className="d-block img-fluid" alt="grid"/>
                  </div>
                </div>
               </div>
              </div>
              <div className="products-list pb-5">
                 <div className="d-flex flex-wrap gap-10">
                <ProductCart grid={grid}/>
                 </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default OurStore;
