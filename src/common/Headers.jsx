import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div>
      <Link to="/" className="navLink">Home</Link>
      ||
      <Link to="/users" className="navLink">User Page</Link>
    </div>
  )
};

export default Header;