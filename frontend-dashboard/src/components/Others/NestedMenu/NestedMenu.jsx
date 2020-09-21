import React from 'react';
import './NestedMenu.css'
import Link from 'react-router-dom';
import Button from 'react';

function NestedMenu(){
    return(
<div>
<ul className="ul">
  <li><a href="/settings/categories">categories</a></li>
  <li><a href="/settings/products">products</a></li>
  <li><a href="/settings/extra">extra</a></li>
  <li><a href="/settings/cupons">coupons</a></li>
  <li><a href="/settings/schedule">schedule</a></li>
  <li><a href="/settings/table">table</a></li>
</ul>  
</div>
);
}

export default NestedMenu;