import React, { useState } from "react";
import { nawBar, New_Pizza } from "../../Info/main";
import styles from "../Menu/Menu.module.css";

const Menu = () => {
    const [number, setNumber] = useState(0);

    return (
        <div className={styles.NewContent}>
            <div className={styles.nawBar}>
                <h1>Меню</h1>
                <ul>
                    {nawBar.map((post) => (
                        <li>
                            <a href={post.link}>{post.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.filter}>
                <p>Сортировать по:</p>
                <select name="" id="">
                    <option value="">По умолчанию</option>
                    <option value="">Острый</option>
                    <option value="">Сладкий</option>
                </select>
            </div>
            <div className={styles.menu}>
                {New_Pizza.map((post) => (
                    <div className={styles.product_block}>
                        <img src={post.img} alt="" />
                        <h2>{post.title}</h2>
                        <p className={styles.description}>{post.description}</p>
                        <h3>{post.price} сом</h3>
                        <p className={styles.amount}>
                            <b onClick={() => setNumber(number - 1)}>&minus;</b>
                            {number}
                            <b onClick={() => setNumber(number + 1)}>+</b>
                        </p>
                        <button>В корзину</button>
                    </div>
                ))}
            </div>
            <div className={styles.more}>
                <button>Показать ещё</button>
            </div>
        </div>
    );
};

export default Menu;