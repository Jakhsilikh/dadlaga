import React from "react";
import {Links} from react-router-dom;
const Link = () => {
  return <div>
      <ul className="Links">
      <Link to='/'>
            Home
      </Link>
      <Link to="/content">
          Product
      </Link>
      
    </ul>
  </div>;
};

export default Link;
