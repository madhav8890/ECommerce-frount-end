import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';

const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
              <div className='main-banner position-relative '>
                <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt=''/>
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGE FOR PROS</h4>
                  <h5>IPad S13+ Pro.</h5>
                  <p>From $999.00 0r $41.62/mo</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
          </div>
          <div className='col-6'>
              <div className='d-flex flex-wrap gap-12 justify-content-between align-items-center '>
              <div className='small-banner position-relative '>
                <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt=''/>
                <div className='small-banner-content position-absolute'>
                  <h4>Best Sale</h4>
                  <h5>Laptop Max</h5>
                  <p>From $1699.00 <br/> 0r $64.62/mo</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt=''/>
                <div className='small-banner-content position-absolute'>
                  <h4>new arrivel</h4>
                  <h5>Buy IPad Air</h5>
                  <p>From $599.00 0r<br/> $49.92/mo for 12 mo</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt=''/>
                <div className='small-banner-content position-absolute'>
                  <h4>15% off</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest<br/> barnd and colors</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt=''/>
                <div className='small-banner-content position-absolute'>
                  <h4>Free Engraving</h4>
                  <h5>AirPods Max</h5>
                  <p>From $599.00 0r<br/> $49.92/mo for 12 mo</p>
                </div>
              </div>
              
              </div>
           </div>
        </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='servies d-flex align-items-center justify-content-between'>
              <div className="d-flex align-items-center gap-15">
                <img src='images/service.png' alt='services'/>
                <div>
                  <h6>Free Shipping</h6>
                  <span>From all order over $5</span>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src='images/service-02.png' alt='services'/>
                <div>
                  <h6>Daily Surprise Offer</h6>
                  <span>Save Up to 25% Off</span>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src='images/service-03.png' alt='services'/>
                <div>
                  <h6>Support 24/7</h6>
                  <span>Shop with an expert</span>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src='images/service-04.png' alt='services'/>
                <div>
                  <h6>Affordable Prices</h6>
                  <span>Get Factory default Price</span>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src='images/service-05.png' alt='services'/>
                <div>
                  <h6>Secure Payment</h6>
                  <span>100% Protected Payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='categorise d-flex flex-wrap justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Computer and Leptops</h6>
                  <p>8 items</p>
                </div>
                <img src='images/laptop.jpg' alt='cemera'/>
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cemere</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='cemera'/>
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>12 items</p>
                </div>
                <img src='images/tv.jpg' alt='cemera'/>
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>SmartWatch</h6>
                  <p>13 items</p>
                </div>
                <img src='images/headphone.jpg' alt='cemera'/>
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Computer and Leptops</h6>
                  <p>8 items</p>
                </div>
                <img src='images/laptop.jpg' alt='cemera'/>
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cemere</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='cemera'/>
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>12 items</p>
                </div>
                <img src='images/tv.jpg' alt='cemera'/>
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>SmartWatch</h6>
                  <p>13 items</p>
                </div>
                <img src='images/headphone.jpg' alt='cemera'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='marque-wrapper py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marque-inner-wrapper card-wrapper'>
            <Marquee className='d-flex'>
                  <div className='mx-4 w-25' >
                    <img src='images/brand-01.png' alt='barnd' />
                  </div>
                  <div className='mx-4 w-25' >
                    <img src='images/brand-02.png' alt='barnd' />
                  </div>
                  <div className='mx-4 w-25' >
                    <img src='images/brand-03.png' alt='barnd' />
                  </div>
                  <div className='mx-4 w-25' >
                    <img src='images/brand-04.png' alt='barnd' />
                  </div>
                  <div className='mx-4 w-25' >
                    <img src='images/brand-05.png' alt='barnd' />
                  </div>
                  <div className='mx-4 w-25' >
                    <img src='images/brand-06.png' alt='barnd' />
                  </div>
                  <div className='mx-4 w-25' >
                    <img src='images/brand-07.png' alt='barnd' />
                  </div>
                  <div className='mx-4 w-25' >
                    <img src='images/brand-08.png' alt='barnd' />
                  </div>
                </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Feature Collection</h3>
          </div>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
        </div>
      </div>
    </section>
    <section className='blog-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Blogs</h3>
          </div>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home