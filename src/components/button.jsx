import React, { Component } from 'react';
const Button = () => {
    return (
        <>
        <button type="button" class="btn btn-lg btn-primary " style={{background:'#011640',height:'30px',width:'200px',fontSize:'10px',borderRadius:'1px',marginTop:'3px'}} disabled>Search</button>
        <button type="button" class="btn btn-secondary btn-lg" style={{background:'#ccc',height:'30px',fontSize:'10px',marginLeft:'5px',borderRadius:'1px',marginTop:'3px'}} disabled>More</button>
        </>
      );
}
 
export default Button;