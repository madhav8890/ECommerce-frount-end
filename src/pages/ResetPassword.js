import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
const ResetPassword = () => {
  return (
    <>
    <Meta title={"Reset-Password"} />
<BreadCrumb title="Reset-Password"/>
<div className='login-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card mx-10'>
                    <h3 className='text-center mb-3'>Reset Your Password</h3>
                    <form action='' className='d-flex flex-column gap-15'>
                        <div>
                            <input type='password'  placeholder='password' name='password' className='form-control'/>
                        </div>
                        <div className='mt-1'>
                            <input type='Password' placeholder='confirm password' name='password' className='form-control'/>
                        </div>
                        <div>
                            <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                <button className='button border-0'>Ok</button>
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

export default ResetPassword