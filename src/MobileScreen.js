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
import Heading from './Heading';
import ActionCardComponent from './ActionCardComponent';

const MobileScreen = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className="mobile-screen">
        <div className="header">
            <div className="toggle-button" onClick={handleToggleMenu}>
            ☰
            </div>
            <Heading />
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
            <CardInfoComponent title='Observation' size='lg' icon={LiaEyeSolid}/>
            <CardInfoComponent title='ePTW'  size='lg' icon={AiOutlineAudit}/>
            <CardInfoComponent title='Incidents'  size='lg' icon = {FiAlertTriangle}/>
        </div>
        <div className="content-two">
            <CardInfoComponent title='Reports' size='sm' icon={PiNotepadLight}/>
            <CardInfoComponent title='Audit'  size='sm' icon={LuClipboardSignature}/>
            <CardInfoComponent title='AZ Track'  size='sm' icon ={TbFileSettings}/>
            <CardInfoComponent title='EHS Docs'  size='sm' icon ={SiGoogledocs}/>
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
  );
};

export default MobileScreen;
