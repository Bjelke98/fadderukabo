import React from 'react'

import { Link} from 'react-router-dom';

const NotFound = () => (
  <div className='min-vh-100 container d-flex align-items-center flex-column'>
    <div className="text-center">
      <span className="text-error">404</span>
      <span className="text-title text-uppercase">Page not found</span>
      <p className="text-content m-2">The page you're looking for does not seem to exist.</p>
    </div>
    <div class="my-auto mt-5 text-center">
      <span class="btn btn-lg btn-primary opacity-80 program-text rounded-pill px-4 text-uppercase m-1">
        <Link className="text-decoration-none text-light text-number" to={"/"}>Go back home</Link>
    </span>
    </div>
  </div>
)

export default NotFound;
