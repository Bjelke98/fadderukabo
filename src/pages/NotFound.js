import React from 'react'

import { Link} from 'react-router-dom';

const NotFound = () => (
  <div className='min-vh-100 container d-flex align-items-center flex-column'>
    <h1>404 - Side ikke funnet</h1>
    <Link href="btn btn-primary" to={"/"}>Gå til forrsiden</Link>
  </div>
)

export default NotFound;
