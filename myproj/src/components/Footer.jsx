import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 fixed-bottom">
      <div className="container text-center">
        <p>
          Copyright © {new Date().getFullYear()} Pick Me Up. All Rights Reserved.
        </p>
        <div>
          <Link to="#" className="mr-2">
            Notices
          </Link>
          <Link to="#" className="mr-2">
            Privacy Policy
          </Link>
          <Link to="#" className="mr-2">
            Terms of Service
          </Link>
          <Link to="#">India</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
