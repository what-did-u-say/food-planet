import React, { useState } from "react";
import { nawBar, New_Content } from "../../Info/main";
import styles from "./NewMenu.module.css";

const NewContent = () => {
	const [number, setNumber] = useState(0);

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
				{New_Content.map((post) => (
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
		</div>
	);
};

export default NewContent;