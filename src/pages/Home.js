import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
              <div className='main-banner position-relative py-3'>
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
              <div className='d-flex justify-content-between align-iyems-center'>
              <div className='small-banner position-relative py-3'>
                <img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt=''/>
                <div className='small-banner-content position-absolute'>
                  <h4>Laptop Max</h4>
                  <h5>IPad S13+ Pro.</h5>
                  <p>From $999.00 0r $41.62/mo</p>
                </div>
              </div>
              <div className='small-banner position-relative py-3'>
                <img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt=''/>
                <div className='small-banner-content position-absolute'>
                  <h4>SUPERCHARGE FOR PROS</h4>
                  <h5>IPad S13+ Pro.</h5>
                  <p>From $999.00 0r $41.62/mo</p>
                </div>
              </div>
              
              </div>
           </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home