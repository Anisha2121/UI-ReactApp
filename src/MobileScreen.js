// MobileScreen.js
import React, { useState } from 'react';
import './MobileScreen.css'; // You can create this CSS file for styling
import CardInfoComponent from './CardInfoComponent';
import { PiNotepad } from "react-icons/pi";
import { LiaEyeSolid } from "react-icons/lia";
import { FiAlertTriangle } from "react-icons/fi";
import { AiOutlineAudit } from "react-icons/ai";
import { SiGoogledocs } from "react-icons/si";
import { LuClipboardEdit } from "react-icons/lu";
import { LuClipboardSignature } from "react-icons/lu";
import { PiNotepadLight } from "react-icons/pi";
import { TbFileSettings } from "react-icons/tb";
import Heading from './Heading';

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
            {/* Add menu items or components here */}
            <p>Menu Item 1</p>
            <p>Menu Item 2</p>
            <p>Menu Item 3</p>
            </div>

        )}
        <h2>Hi, Anisha</h2>
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
          {/* Card that takes the entire screen below the tiles */}
          <div className="horizontal-card"></div>
          <div className="horizontal-card"></div>
          <div className="horizontal-card"></div>
        </div>
        </div>
      

    </div>
    </>
  );
};

export default MobileScreen;
