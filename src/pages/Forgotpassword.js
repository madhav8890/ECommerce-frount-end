import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'


const Forgotpassword = () => {
  return (
    <>
            <Meta title={"Forgot-Password"} />
        <BreadCrumb title="Forgot-Password"/>
        <Container class1='login-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card mx-10'>
                            <h3 className='text-center mb-3'>Reset You Password</h3>
                            <p className='text-center mb-3 mt-2'>We Will Send You An Email To Your Reset Your Password</p>
                            <form action='' className='d-flex flex-column gap-15'>
                                <CustomInput type='email'  placeholder='email' name='email' />
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
            </Container>
    </>
  )
}

export default Forgotpassword