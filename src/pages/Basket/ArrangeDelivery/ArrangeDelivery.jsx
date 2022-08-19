import React from 'react';
import {toast} from 'react-hot-toast';

const ArrangeDelivery = () => {

    const getOrder = (e) => {
        const data = {
            name: e.currentTarget.name.value,
            phone: e.currentTarget.phone.value,
            desc: e.currentTarget.desc.value,
            order: JSON.parse(localStorage.getItem('cart'))
        }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const url = 'http://localhost:3001/orders';

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    toast.success("Ваш заказ принят");
                } else {
                    toast.error('Что-то произошло.. Статус ошибки:' + response.status);
                    return [{}];
                }
            })
    }

    return (
        <form onSubmit={getOrder} action="#">
            <input name="name" type="text" placeholder='Укажите имя'></input>
            <input name="phone" type="number" placeholder="Укажите номер"></input>
            <input name="desc" type="text" placeholder="Комментарий к заказу"></input>
            <button>Оформить заказ</button>
        </form>
    )
}

export default ArrangeDelivery