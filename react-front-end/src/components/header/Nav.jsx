import React from 'react';
import { Link } from 'react-router-dom'
import imgSrc from "../../images/cyf_brand.png";
import './index.css';


function Nav() {
  return (
    <header className="header">
      <div className='brandbox'>
       <div className="imgBlk">
          <img src={imgSrc} />
        </div>
      <nav className="nav">
        <ul>
          <Link to="/" className="navStyle"><li className='simpleNavList'>Home</li></Link>
          <Link to="/listOfCompanies" className="navStyle"> <li className='simpleNavList'>Companies</li></Link>
          <Link to="/opportunities" className="navStyle"><li className='simpleNavList'>Opportunities</li></Link>
          <Link to="/Graduates" className="navStyle"><li className='simpleNavList' >Graduates</li></Link>
          <Link to="/tips" className="navStyle"><li className='simpleNavList'>Tips & FAQ</li></Link>
        </ul>
       
      </nav>
      <p className='superTitle'>Opportunities</p>
        <div className='separator'>separdthdh</div>
      </div>

        
      <nav className="nav">
        <ul>
          <Link to="/signIn" className="navStyle"><li>Sign in</li></Link>
          <Link to="/signUp" className="navStyle"><li>Sign up</li></Link>
        </ul>
      </nav>
    </header>

  );
}

export default Nav;
