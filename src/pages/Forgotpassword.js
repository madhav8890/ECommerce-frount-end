import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

const Forgotpassword = () => {
  return (
    <>
            <Meta title={"Forgot-Password"} />
        <BreadCrumb title="Forgot-Password"/>
        <div className='login-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card mx-10'>
                            <h3 className='text-center mb-3'>Reset You Password</h3>
                            <p className='text-center mb-3 mt-2'>We Will Send You An Email To Your Reset Your Password</p>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <input type='email'  placeholder='email' name='email' className='form-control'/>
                                </div>
                                <div>
                                    <div className='mt-3 d-flex justify-content-center flex-column  gap-15 align-items-center'>
                                        <button className='button border-0' type='submit'>Submit</button>
                                    <Link to='/login'>Cencle</Link>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Forgotpassword