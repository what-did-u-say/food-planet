import React, { useState, useEffect } from "react";
import {nawBar} from "../../Info/main";
import toast from "react-hot-toast";
import styles from "../Menu/Menu.module.css";

const Menu = () => {
    const [number, setNumber] = useState(0);
    const [menu, setMenu] = useState([]);

    const burger = [...menu]
    const setOrder = (e) => {
        if (e.currentTarget.id === '1') {
            burger.forEach(post => post.id === +e.currentTarget.id ? post.count++ : "")
            setNumber(number + 1);

        } if (e.currentTarget.id === '2') {
            burger.forEach(post => post.id === +e.currentTarget.id ? post.count++ : "")
            setNumber(number + 1);

        } if (e.currentTarget.id === '3') {
            burger.forEach(post => post.id === +e.currentTarget.id ? post.count++ : "")
            setNumber(number + 1);

        } if (e.currentTarget.id === '4') {
            burger.forEach(post => post.id === +e.currentTarget.id ? post.count++ : "")
            setNumber(number + 1);

        } if (e.currentTarget.id === '5') {
            burger.forEach(post => post.id === +e.currentTarget.id ? post.count++ : "")
            setNumber(number + 1);

        } if (e.currentTarget.id === '6') {
            burger.forEach(post => post.id === +e.currentTarget.id ? post.count++ : "")
            setNumber(number + 1);

        } if (e.currentTarget.id === '7') {
            burger.forEach(post => post.id === +e.currentTarget.id ? post.count++ : "")
            setNumber(number + 1);

        } if (e.currentTarget.id === '8') {
            burger.forEach(post => post.id === +e.currentTarget.id ? post.count++ : "")
            setNumber(number + 1);
        }
        
    }

        const minOrder = (e) => {
            if (e.currentTarget.id === '1') {
                burger.forEach(post => post.id === +e.currentTarget.id ? post.count-- : "")
                setNumber(number - 1);

            } if (e.currentTarget.id === '2') {
                burger.forEach(post => post.id === +e.currentTarget.id ? post.count-- : "")
                setNumber(number - 1);

            } if (e.currentTarget.id === '3') {
                burger.forEach(post => post.id === +e.currentTarget.id ? post.count-- : "")
                setNumber(number - 1);

            } if (e.currentTarget.id === '4') {
                burger.forEach(post => post.id === +e.currentTarget.id ? post.count-- : "")
                setNumber(number - 1);
    
            } if (e.currentTarget.id === '5') {
                burger.forEach(post => post.id === +e.currentTarget.id ? post.count-- : "")
                setNumber(number - 1);
    
            } if (e.currentTarget.id === '6') {
                burger.forEach(post => post.id === +e.currentTarget.id ? post.count-- : "")
                setNumber(number - 1);
    
            } if (e.currentTarget.id === '7') {
                burger.forEach(post => post.id === +e.currentTarget.id ? post.count-- : "")
                setNumber(number - 1);
    
            } if (e.currentTarget.id === '8') {
                burger.forEach(post => post.id === +e.currentTarget.id ? post.count-- : "")
                setNumber(number - 1);
            }

        }

        useEffect(() => {
            fetch("http://localhost:3001/pizza")
                .then (response => {
                    if (response.status === 200) {
                 return response.json()
                    }else {
                        toast.error("Ошибка соединения с сервером")
                    }
                })
            .then(data => setMenu(data))
        },[])


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
                    {menu.map((post) => (
                        <div className={styles.product_block}>
                            <img src={post.img} alt="" />
                            <h2>{post.title}</h2>
                            <p className={styles.description}>{post.description}</p>
                            <h3>{post.price} сом</h3>
                            <p className={styles.amount}>
                                <b onClick={minOrder} id={post.id}>&minus;</b>
                                {post.count}
                                <b onClick={setOrder} id={post.id}>+</b>
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

}

export default Menu;