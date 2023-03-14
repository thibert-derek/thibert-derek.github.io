import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import ScrollToTop from 'react-scroll-to-top';

const ScrollButton = () => {
    return (
        <div>
    <ScrollToTop smooth/>
    <FaArrowCircleUp />
    </div>
    )
  }

export default ScrollButton;