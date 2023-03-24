import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
            <Meta title={"Sign Up"} />
        <BreadCrumb title="Sign Up"/>
        <div className='login-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card mx-10'>
                            <h3 className='text-center mb-3'>Create Account</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <input type='text'  placeholder='Name' name='name' className='form-control'/>
                                </div>
                                <div>
                                    <input type='tel'  placeholder='Mobile' name='Mobile' className='form-control'/>
                                </div>
                                <div>
                                    <input type='email'  placeholder='email' name='email' className='form-control'/>
                                </div>
                                <div className='mt-1'>
                                    <input type='Password' placeholder='password' name='password' className='form-control'/>
                                </div>
                                <div>
                                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0'>SignUp</button>
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

export default Signup