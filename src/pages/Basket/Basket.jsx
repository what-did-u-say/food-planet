import React, { useState, useEffect } from 'react';
import ArrangeDelivery from './ArrangeDelivery/ArrangeDelivery';
import s from "./Basket.module.css";

const Basket = () => {

    const [goods, setGoods] = useState([]);

    const getProducts = () => {
        const goods = JSON.parse(localStorage.getItem('cart'));
        setGoods(Object.values(goods));
    }

    const getTotalSum = () => {
        return goods.reduce((sum, item) => {
            return sum + (item.count * item.price);
        }, 0);
    }

    const changeCount = (e, data) => {
        const goods = JSON.parse(localStorage.getItem('cart'));
        goods[data.id].count = +e.currentTarget.value;
        localStorage.setItem('cart', JSON.stringify(goods));
        getProducts();
    }

    useEffect(getProducts, []);

    return (

        <div className={s.container}>
            <h1>Корзина</h1>
            <table className={s.table}>
                <tr>
                    <th colSpan="2">Продукт</th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th>К оплате</th>
                </tr>
                {
                    goods.map(item => {
                        return (
                            <tr>
                                <td><img src={item.img} alt="" /></td>
                                <td>{item.title}</td>
                                <td>{item.price} {item.currency}</td>
                                <td><input onChange={e => changeCount(e, item)} type="number" defaultValue={item.count} /></td>
                                <td>{item.count * item.price} {item.currency}</td>
                            </tr>
                        )
                    })
                }
            </table>
            <div className={s.container2}>
                <h2>Итоговая сумма: <span>{getTotalSum()}</span><span>сом</span></h2>
                <ArrangeDelivery/>
            </div>
        </div>


    )
}

export default Basket