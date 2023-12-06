import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const items =useSelector((state)=>state.cart);
    var qua=0;
    for (let i = 0; i < items.length; i++) {
        qua+=items[i].quantity;
      }
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
     <div className='logo'>REDUX STORE</div>
     <div>
        <Link className="navLink" to="/"> Home </Link>
        <Link className="navLink" to="/cart"> Cart</Link>
        <span className='cartCount'> Cart items :{qua} </span>
     </div>
    </div>
  );
}

export default Navbar;
