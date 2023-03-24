import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Signup = () => {
  return (
    <>
            <Meta title={"Sign Up"} />
        <BreadCrumb title="Sign Up"/>
        <Container class1='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card mx-10'>
                            <h3 className='text-center mb-3'>Create Account</h3>
                            <form action='' className='d-flex flex-column gap-15'>
                                
                                <CustomInput type='text'  placeholder='Name' name='name'/>
                                <CustomInput type='tel'  placeholder='Mobile' name='Mobile'/>
                                <CustomInput  type='email'  placeholder='email' name='email'/>
                                    <CustomInput type='Password' placeholder='password' name='password'/>
                                
                                <div>
                                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0'>SignUp</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default Signup