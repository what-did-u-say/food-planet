import React, { useState } from "react";
import { nawBar, New_Content } from "../../Info/main";
import styles from "./NewMenu.module.css";

const NewContent = () => {
	const [number, setNumber] = useState(0);

	const burger = [...New_Content];
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
				{burger.map((post) => (
					<div key={post.id} className={styles.product_block}>
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
		</div>
	);
};

export default NewContent;