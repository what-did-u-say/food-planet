import React from "react";
import iconsFoodPlanet from "../../assets/icons/logo.svg";
import subselection from "../../assets/icons/vniz.svg";
import phone from "../../assets/icons/phone.svg"
import basket from "../../assets/icons/korzina.svg"
import styles from "./Header.module.css"

const Header = () => {
	return (
		<header className={styles.Header}>
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
					<li>
						<a href="/basket">
							<img src={basket} alt="" /><b>1</b></a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;