import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Color from '../components/Color'

const CompareProducts = () => {
  return (
    <>
        <Meta title={"Contect Us"} />
        <BreadCrumb title="Contect Us"/>
        <div className='compare-product-wrapper py-5 home-wrapper-2'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-3'>
                <div className='compare-product-card position-relative'>
                  <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                  <div className='product-card-image'>
                    <img src='images/watch.jpg' alt='watch'/>
                  </div>
                  <div className='compare-ptoduct-details'>
                    <h5 className='title'>lorem epsone madhavada edb deded denc jkjka</h5>
                    <h6 className='price mt-3'>$ 100</h6>
                    <div>
                      <div className='product-detail'>
                        <h5>Brand:</h5>
                        <p>Hevels</p>
                      </div>
                      <div className='product-detail'>
                        <h5>Type:</h5>
                        <p>Watch</p>
                      </div>
                      <div className='product-detail'>
                        <h5>Availablity:</h5>
                        <p>In Stock</p>
                      </div>
                      <div className='product-detail'>
                        <h5>Color:</h5>
                        <Color/>
                      </div>
                      <div className='product-detail'>
                        <h5>Size:</h5>
                        <div className='d-flex gap-10'>
                          <p>S</p>
                          <p>M</p>
                          <p>XL</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <div className='compare-product-card position-relative'>
                  <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                  <div className='product-card-image'>
                    <img src='images/watch.jpg' alt='watch'/>
                  </div>
                  <div className='compare-ptoduct-details'>
                    <h5 className='title'>lorem epsone madhavada edb deded denc jkjka</h5>
                    <h6 className='price mt-3'>$ 100</h6>
                    <div>
                      <div className='product-detail'>
                        <h5>Brand:</h5>
                        <p>Hevels</p>
                      </div>
                      <div className='product-detail'>
                        <h5>Type:</h5>
                        <p>Watch</p>
                      </div>
                      <div className='product-detail'>
                        <h5>Availablity:</h5>
                        <p>In Stock</p>
                      </div>
                      <div className='product-detail'>
                        <h5>Color:</h5>
                        <Color/>
                      </div>
                      <div className='product-detail'>
                        <h5>Size:</h5>
                        <div className='d-flex gap-10'>
                          <p>S</p>
                          <p>M</p>
                          <p>XL</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default CompareProducts