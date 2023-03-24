import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import {IoCallOutline} from 'react-icons/io5'
import {CiMail, CiCircleInfo, CiHome} from 'react-icons/ci'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'

 
const Contact = () => {
  return (
    <>
          <Meta title={"Contect Us"} />
        <BreadCrumb title="Contect Us"/>
    <div className='contect-wrapper py-5 home-wrapper-2'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1824.5276000850215!2d78.78910226109346!3d23.852173528291797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d1752cde91c3%3A0x1f95f8d3b47b331!2sBaleja%20Shopping%20Centre!5e0!3m2!1sen!2slk!4v1679609666953!5m2!1sen!2slk'
            width='600'
            height='450'
            className='border-0 w-100'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
        <div className='contect-inner-wrapper d-flex justify-content-between'>
          <div>
            <h3 className='contect-title mb-4'>Conatect Us</h3>
            <form action='' className='d-flex flex-column gap-15'>
              <div>
                <input type='text'  placeholder='Name' className='form-control'/>
              </div>
              <div>
                <input type='email'  placeholder='email' className='form-control'/>
              </div>
              <div>
                <input type='tel'  placeholder='Mobile' className='form-control'/>
              </div>
              <div>
                <textarea type='text' placeholder='Comments' cols='30' rows='4' className='form-control'/>
              </div>
            </form><div>
            <button className='button border-0 mt-4'> submit</button>
            </div>
          </div>
          <div>
            <h3 className='contect-title mb-4'>Get In Touch With Us</h3>
            <div>
              <ul className='ps-0'>
                <li className='mb-3 d-flex gap-15 align-items-center'>
                  <CiHome className='fs-5'/>
                  <address className='mb-0'>hose no. 333, dwarka nagar, bhopal, madhya pardhs</address>
                </li>
                <li className='mb-3 d-flex gap-15 align-items-center'>
                  <IoCallOutline className='fs-5'/>
                  <a href='tel:+91 8109168890'>+91 8109168890</a>
                </li>
                <li className='mb-3 d-flex gap-15 align-items-center'>
                  <CiMail className='fs-5'/>
                  <a href='mailto:madhav5mar2001@gmail.com'>madhav5mar2001@gamil.com</a>
                </li>
                <li className='mb-3 d-flex gap-15 align-items-center'>
                  <CiCircleInfo className='fs-5'/>
                  <p className='mb-0'>Monday - Friday 10 AM to 10 PM</p>
                </li>
                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                  <a href='#'>
                    <BsLinkedin className='text-dark fs-8'/>
                  </a>
                  <a href='#'>
                    <BsYoutube className='text-dark fs-8'/>
                  </a>
                  <a href='#'>
                    <BsGithub className='text-dark fs-8'/>
                  </a>
                  <a href='#'>
                    <BsInstagram className='text-dark fs-8'/>
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>

    </>
  )
}

export default Contact