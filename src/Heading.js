import React from 'react'
import './MobileScreen.css';
import image from './images.jpg';

export default function Heading(props) {

  const {isEPTW} = props;
  return (
    <>
      {
        isEPTW ? (
          <div className='eptw-container'>
            <p style={{fontSize:'30px', marginTop:'5%', marginBottom:'8%'}}>ePermit To Work</p>
          </div>
        )
        :
        (
          <div className='heading-container'>
              <div>
                <img
                  src={image}
                  alt="Description of the image"
                  style={{ width: '70%', height: '70%', objectFit: 'cover' }}
                />
              </div>
              <div className='platform'>EHS DIGITAL PLATFORM</div>
          </div>
        )
      }
    </>
    
  )
}
