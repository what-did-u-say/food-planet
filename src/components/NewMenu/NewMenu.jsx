import React, { useState, useEffect } from "react";
import { nawBar} from "../../Info/main";
import styles from "./NewMenu.module.css";
import toast from "react-hot-toast";

const NewContent = () => {
	const [number, setNumber] = useState(0);
	const [burgers, setBurgers] = useState([]); 

	const burger = [...burgers];
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
		} 

	} 

	useEffect(() => {
		fetch("http://localhost:3001/burgers")
			.then (response => {
				if (response.status === 200) {
			 return response.json()
				}else {
					toast.error("Ошибка соединения с сервером")
				}
			})
		.then(data => setBurgers(data))
	},[])

	return (
		<div className={styles.NewContent}>
			<div className={styles.nawBar}>
				<h1>Новинки</h1>
				<ul>
					{nawBar.map((post) => (
						<li>
							<a href={post.link}>{post.title}</a>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.menu}>
				{burgers.map((post) => (
					<div key={post.id} className={styles.product_block}>
						<img src={post.img} alt="" />
						<h2>{post.title}</h2>
						<p className={styles.description}>{post.description}</p>
						<h3>{post.price} сом</h3>
						<p className={styles.amount}>
							<b min="1" onClick={minOrder} id={post.id}>&minus;</b>
							{post.count}
							<b max="100" onClick={setOrder} id={post.id}>+</b>
						</p>
						<button>В корзину</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default NewContent;