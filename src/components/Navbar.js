import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="nav__bar">
        <ul className="navBar__ul">
          <li><Link to="/" style={{fontSize: "1.8rem"}}>IndiaExpress</Link></li>
          <li>
            <Link to="/cart">
              <span className="shoppingCart">
                <i className="fas fa-shopping-cart"></i>
              </span>
              <span className="cartCount">
                <strong>0</strong>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
