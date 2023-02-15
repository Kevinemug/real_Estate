import React, { Component } from 'react';
const Grid = ({component1,component2}) => {
    return ( 

<div className="containerGrid">
<div className='comp'>
    <div> {component1}</div>
    <div> {component2}</div>
</div>

</div>


        );
}
 
export default Grid;