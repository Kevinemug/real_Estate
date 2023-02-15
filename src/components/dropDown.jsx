import React, { Component } from 'react';
import {MdArrowDropDown} from 'react-icons/md'

const DropDown = ({paragraph}) => {
  return (
<>

<div className='top'>
  
  <div className='Drop'>
  
  <div className='pardr'>{paragraph}</div>
  <div> <MdArrowDropDown/> </div>
  
  </div>

</div>



</>



    );
}
 
export default DropDown;