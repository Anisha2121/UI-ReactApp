import React, { useState } from 'react';
import './MobileScreen.css';
import CardInfoComponent from './CardInfoComponent';
import { LiaEyeSolid } from "react-icons/lia";
import { FiAlertTriangle } from "react-icons/fi";
import { AiOutlineAudit } from "react-icons/ai";
import { SiGoogledocs } from "react-icons/si";
import { LuClipboardSignature } from "react-icons/lu";
import { PiNotepadLight } from "react-icons/pi";
import { TbFileSettings } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import Heading from './Heading';
import ActionCardComponent from './ActionCardComponent';
import UnderReviewCardComponent from './UnderReviewCardComponent';
import { GiCargoCrane } from "react-icons/gi";
import { FaWarehouse } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";

const MobileScreen = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isEPTWOpen, setEPTWOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isUnderReview, setUnderReview] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleClick = (index) => {
    if(index===3) {
      setUnderReview(true);
    } else {
      setUnderReview(false);
    }
    setActiveIndex(index);
  };

  const handleBack = () => {
    setEPTWOpen(false);
  };

  return (
    <>
    {
      isEPTWOpen ? (
        <>
        <div className="mobile-screen">
          <div className="eptw-header">
            <div className="back-arrow" onClick={handleBack}>
              <FaArrowLeft size={30}/>
            </div>
            <Heading isEPTW={isEPTWOpen}/>
          </div>
          <div className='permit'>Apply for permit</div>
          <div className="content">
              <CardInfoComponent title='Tower Crane' size='lg' icon={GiCargoCrane} open={setEPTWOpen}/>
              <CardInfoComponent title='Data Center Operations'  size='lg' icon={FaWarehouse}  open={setEPTWOpen}/>
              <CardInfoComponent title='Construction Activity'  size='lg' icon = {IoWarningOutline} open={setEPTWOpen}/>
          </div>
          <div className='permit'>Applied permit(s)</div>
          <div className='nav-bar'>
            {/* <div className='nav-element' onClick={handleOnClickColor}>Draft</div>
            <div className='nav-element' onClick={handleOnClickColor}>Active</div>
            <div className='nav-element' onClick={handleOnClickColor}>Under Review</div>
            <div className='nav-element' onClick={handleOnClickColor}>Archived</div> */}

            <div className={activeIndex === 1 ? 'nav-element-clicked' : 'nav-element'} onClick={() => handleClick(1)}>Draft</div>
            <div className={activeIndex === 2 ? 'nav-element-clicked' : 'nav-element'} onClick={() => handleClick(2)}>Active</div>
            <div className={activeIndex === 3 ? 'nav-element-clicked' : 'nav-element'} onClick={() => handleClick(3)}>Under Review</div>
            <div className={activeIndex === 4 ? 'nav-element-clicked' : 'nav-element'} onClick={() => handleClick(4)}>Archived</div>
          </div>
          <div class="group">
            <div className='search-container'>
              <CiSearch style={{position:'absolute', paddingTop:'1.5%', paddingLeft:'2.5%'}} size={25}/>
              <input class="input" type="search" placeholder="Search permit..." />
            </div>
          </div>
          <div className='content'>
            <div className="full-screen-card-eptw">
              <div className="scrollable-container-eptw">
                {
                  isUnderReview ? (
                    <>
                      <UnderReviewCardComponent color='white'/>
                      <UnderReviewCardComponent color='white'/>
                      <UnderReviewCardComponent color='white'/>
                      <UnderReviewCardComponent color='white'/>
                      <UnderReviewCardComponent color='white'/>
                      <UnderReviewCardComponent color='white'/>
                    </>
                  )
                  :
                  (
                    <>
                      <ActionCardComponent />
                      <ActionCardComponent />
                      <ActionCardComponent />
                      <ActionCardComponent />
                      <ActionCardComponent />
                      <ActionCardComponent />
                      <ActionCardComponent />
                      <ActionCardComponent />
                    </>
                  )
                }
                
              </div>
            </div>
          </div>
        </div>
          
        </>
      )
      : (
          <>
            <div className="mobile-screen">
              <div className="header">
                  <div className="toggle-button" onClick={handleToggleMenu}>
                  ☰
                  </div>
                  <Heading isEPTW={isEPTWOpen}/>
              </div>

              {isMenuOpen && (
                  <div className="menu">
                  <p>Menu Item 1</p>
                  <p>Menu Item 2</p>
                  <p>Menu Item 3</p>
                  </div>
              )}
              <p style={{fontSize:'20px', paddingLeft:'3%'}}>Hello, <span style={{fontSize:'25px'}}>Anisha</span></p>
              <div className="content">
                  <CardInfoComponent title='Observation' size='lg' icon={LiaEyeSolid} open={setEPTWOpen}/>
                  <CardInfoComponent title='ePTW'  size='lg' icon={AiOutlineAudit}  open={setEPTWOpen}/>
                  <CardInfoComponent title='Incidents'  size='lg' icon = {FiAlertTriangle} open={setEPTWOpen}/>
              </div>
              <div className="content-two">
                  <CardInfoComponent title='Reports' size='sm' icon={PiNotepadLight}  open={setEPTWOpen}/>
                  <CardInfoComponent title='Audit'  size='sm' icon={LuClipboardSignature} open={setEPTWOpen}/>
                  <CardInfoComponent title='AZ Track'  size='sm' icon ={TbFileSettings} open={setEPTWOpen}/>
                  <CardInfoComponent title='EHS Docs'  size='sm' icon ={SiGoogledocs} open={setEPTWOpen}/>
              </div>
              <div className='content'>
                <div className="full-screen-card">
                  <h4 className='cardheader'>ACTIONS LIST (5)</h4>
                  <div className="scrollable-container">
                    <ActionCardComponent />
                    <ActionCardComponent />
                    <ActionCardComponent />
                    <ActionCardComponent />
                    <ActionCardComponent />
                    <ActionCardComponent />
                    <ActionCardComponent />
                    <ActionCardComponent />
                  </div>
                </div>
              </div>
            </div>
          </>
        )
    }
    </>
  );
};

export default MobileScreen;
