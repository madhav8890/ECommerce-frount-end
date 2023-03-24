import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpacialProduct from '../components/SpacialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data'


const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative '>
              <img src='images/main-banner-1.jpg' className='img-fluid rounded-3' alt='' />
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
                <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='' />
                <div className='small-banner-content position-absolute'>
                  <h4>Best Sale</h4>
                  <h5>Laptop Max</h5>
                  <p>From $1699.00 <br /> 0r $64.62/mo</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='' />
                <div className='small-banner-content position-absolute'>
                  <h4>new arrivel</h4>
                  <h5>Buy IPad Air</h5>
                  <p>From $599.00 0r<br /> $49.92/mo for 12 mo</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='' />
                <div className='small-banner-content position-absolute'>
                  <h4>15% off</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest<br /> barnd and colors</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='' />
                <div className='small-banner-content position-absolute'>
                  <h4>Free Engraving</h4>
                  <h5>AirPods Max</h5>
                  <p>From $599.00 0r<br /> $49.92/mo for 12 mo</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
      <Container class1='home-wrapper-2 py-5 '>
        <div className='row'>
          <div className='col-12'>
            <div className='servies d-flex align-items-center justify-content-between'>
              {
                services?.map((i, j) => {
                  return (
                    <div className="d-flex align-items-center gap-15" key={j}>
                      <img src={i.image} alt='services' />
                      <div>
                        <h6>{i.title}</h6>
                        <span>{i.tagline}</span>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </Container>
      <Container class1='home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='categorise d-flex flex-wrap justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Computer and Leptops</h6>
                  <p>8 items</p>
                </div>
                <img src='images/laptop.jpg' alt='cemera' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cemere</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='cemera' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>12 items</p>
                </div>
                <img src='images/tv.jpg' alt='cemera' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>SmartWatch</h6>
                  <p>13 items</p>
                </div>
                <img src='images/headphone.jpg' alt='cemera' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Computer and Leptops</h6>
                  <p>8 items</p>
                </div>
                <img src='images/laptop.jpg' alt='cemera' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cemere</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='cemera' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>12 items</p>
                </div>
                <img src='images/tv.jpg' alt='cemera' />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>SmartWatch</h6>
                  <p>13 items</p>
                </div>
                <img src='images/headphone.jpg' alt='cemera' />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='feature-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Feature Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-1.jpg'
                className='img-fluid'
                alt='famous-1' />
              <div className='famous-content position-absolute'>
                <h5 className='text-white'> studio display</h5>
                <h6 className='text-white'>600 nits of brightness</h6>
                <p className='text-white'>27.inch 5k retina display</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-2.jpg' className='img-fluid' alt='famous-1' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Big Screen</h5>
                <h6 className='text-dark'>smart watch serise</h6>
                <p className='text-dark'>From $1699.00 0r $64.62/mo</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-3.jpg' className='img-fluid' alt='famous-1' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Smrat Phones</h5>
                <h6 className='text-dark'>IPhone 13 Pro Max</h6>
                <p className='text-dark'>From $1699.00 0r $64.62/mo</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src='images/famous-4.jpg' className='img-fluid' alt='famous-1' />
              <div className='famous-content position-absolute'>
                <h5 className='text-dark'>Home Speaker</h5>
                <h6 className='text-dark'>Room-Filling Speacker</h6>
                <p className='text-dark'>From $1699.00 0r $64.62/mo</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1='spacial-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Spacial Product</h3>
          </div>
        </div>
        <div className='row'>
          <SpacialProduct />
          <SpacialProduct />
          <SpacialProduct />
        </div>
      </Container>
      <Container class1='populer-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Populer products</h3>
            </div>
          </div>
          <div className='row'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>
      <Container class1='marque-wrapper home-wrapper-2 py-5'>
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
      </Container>
      <Container class1='blog-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>

          </div>
      </Container>
    </>
  )
}

export default Home