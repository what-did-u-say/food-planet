import React from "react";
import iconsFoodPlanet from "../../assets/icons/flogo.svg";
import subselection from "../../assets/icons/vniz.svg";
import phone from "../../assets/icons/fphone.svg"
import styles from "./Footer.module.css"

const Footer = () => {
	return (
		<header className={styles.Footer}>
			<a href="/"><img src={iconsFoodPlanet} alt="" /></a>
			<div>
				<ul>
					<li>
						<a href="/">Главная</a>
					</li>
					<li>
						<a href="/menu">Меню </a>
						<img src={subselection} alt="" />
					</li>
					<li>
						<a href="/delivery">Доставка</a>
					</li>
					<li>
						<a href="/contacts">Контакты</a>
					</li>
					<li>
						<a href="/phone"> <img src={phone} alt="" /> +996500405988</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Footer;