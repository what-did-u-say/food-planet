import React from 'react'
import { Choose_Us } from '../../Info/main';
import styles from '../AboutUs/AboutUs.module.css'

const AboutUs = () => {
    return (
        <div className={styles.aboutUs}>
            <h1>Почему выбирают нас:</h1>
            <div className={styles.UAbout}>

                {Choose_Us.map(post => (
                    <div>
                        <img src={post.img} alt="" />
                        <h4>{post.title}</h4>
                        <p>{post.description}</p>
                    </div>))}
            </div >
        </div>
    )
}

export default AboutUs;