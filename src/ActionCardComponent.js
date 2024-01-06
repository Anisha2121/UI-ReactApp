import React from 'react'
import './MobileScreen.css';

export default function 
() {
  return (
    <div className='horizontal-card'>
        <div className='action-header'>
          {/* can be dynamic if we get api data */}
            <div className='header-id'>
              #OBS-Z3451-132
            </div>
            <div className='header-status'>
              New
            </div>
            <div className='header-actions'>
              OBS-review-actions
            </div>
        </div>      
        <div className='action-name'>
            Testing 
        </div>
        <div className='action-persons'>
            <div className='action-person-reporter'>
              Reporter: Anisha Bhardwaj
            </div>
            <div className='action-person-assignee'>
              Action Assignee: Anisha Bhardwaj
            </div>
        </div>
        <div className='action-dates'>
          <div className='action-date-due'>
            Due: 12/12/2020
          </div>
          <div className='action-date-received'>
            Received: 12/12/2020
          </div>
        </div> 
    </div>
  )
}
