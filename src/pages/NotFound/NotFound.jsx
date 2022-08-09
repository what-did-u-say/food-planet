import React from 'react'
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
  <notF className={styles.notF}>
    <code className={styles.NotFound}>
    {"{"}--<span>:+404 NOT FOUND+:</span>--{"}"}
  </code>
  </notF>
  )
}

export default NotFound