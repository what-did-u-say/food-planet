import React from 'react'
import {Link} from 'react-router-dom'
import s from './NotFound.module.css'

const NotFound = () => {
  return (
    <>
      <div id={s.notfound}>
        <div className={s.notfound}>
          <div className={s.notfound-404}>
            <h1>404</h1>
          </div>
          <h2>We are sorry, Page not found!</h2>
          <p>
            The page you are looking for might have been removed had its name changed
            or is temporarily unavailable.
          </p>
          <Link to="/">Back To Homepage</Link>
        </div>
      </div>

    </>
  )
}

export default NotFound