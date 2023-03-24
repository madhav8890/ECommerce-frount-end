import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const ResetPassword = () => {
  return (
    <>
    <Meta title={"Reset-Password"} />
<BreadCrumb title="Reset-Password"/>
<Container class1='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card mx-10'>
                    <h3 className='text-center mb-3'>Reset Your Password</h3>
                    <form action='' className='d-flex flex-column gap-15'>
                        <CustomInput type='password'  placeholder='password' name='password'/>
                        <CustomInput type='Password' placeholder='confirm password' name='password'/>
                        <div>
                            <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                <button className='button border-0'>Ok</button>
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

export default ResetPassword