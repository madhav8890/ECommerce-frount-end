import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const WishList = () => {
  return (
    <>
        <Meta title={"WishList"} />
        <BreadCrumb title="WishList"/>
        <div className='wishlist-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-2'>
                        <div className='wishlist-card  position-relative'>
                          <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                            <div className='wishlist-card-image'>
                                <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'/>
                            </div>
                           <div className='p-3'>
                           <h5 className='title'>lorem epsone madhavada edb deded denc jkjka</h5>
                            <h6 className='price'>$ 100</h6>
                           </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='wishlist-card  position-relative'>
                          <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                            <div className='wishlist-card-image'>
                                <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'/>
                            </div>
                           <div className='p-3'>
                           <h5 className='title'>lorem epsone madhavada edb deded denc jkjka</h5>
                            <h6 className='price'>$ 100</h6>
                           </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='wishlist-card  position-relative'>
                          <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                            <div className='wishlist-card-image'>
                                <img src='images/watch.jpg' className='img-fluid w-100' alt='watch'/>
                            </div>
                           <div className='p-3'>
                           <h5 className='title'>lorem epsone madhavada edb deded denc jkjka</h5>
                            <h6 className='price'>$ 100</h6>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WishList