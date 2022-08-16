import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import styles from './Review.module.css';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/review")
            .then (response => {
                if (response.status === 200) {
             return response.json()
                }else {
                    toast.error("Ошибка соединения с сервером")
                }
            })
        .then(data => setReviews(data))
    },[])


    return (
        <div className={styles.reviews}>
            <h2>Отзывы</h2>
            <ul className={styles.review_desc}>
                {reviews.map((review) => (
                    <div className={styles.review_list}>
                        <li>
                            <img src={review.img} alt="" />
                            <h3>{review.name}</h3>
                            <p>{review.description}</p>
                            <p className={styles.p_date}>{review.date}</p>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Reviews;