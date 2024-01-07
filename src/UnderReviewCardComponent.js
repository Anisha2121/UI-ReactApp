import React from 'react'
import './MobileScreen.css'

export default function UnderReviewCardComponent(props) {

    const {color} = props;

  return (
    <div className='horizontal-card' style={color ? {backgroundColor:`${color}`} :  {backgroundColor:`rgb(244, 207, 207)`}}>
        <div className='under-review-id'>
            #3427-TRE-DF-76
        </div>
        <div className='action-name' style={{marginTop:'3%'}}>
            Data Center Operations
        </div>
        <div className='under-review-status'>
            Status: Assessed
        </div>
        <div className='work-start' style={{marginTop:'2%'}}>
            Work Start: 11-08-2023 11:20 AM
        </div>
        <div className='applied-on' style={{marginTop:'2%'}}>
            Applied on: 10-08-2023 11:20 AM
        </div>
    </div>
  )
}
