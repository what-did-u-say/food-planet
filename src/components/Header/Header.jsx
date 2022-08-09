import React from "react";
import iconsFoodPlanet from "../../assets/icons/logo.svg";
import subselection from "../../assets/icons/vniz.svg";
import phone from "../../assets/icons/phone.svg"
import basket from "../../assets/icons/korzina.svg"
import styles from "./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className={styles.Header}>
			<NavLink to="/"><img src={iconsFoodPlanet} alt="" /></NavLink>
			<div>
				<ul>
					<li>
						<NavLink to="/">Главная</NavLink>
					</li>
					<li>
						<NavLink to="/menu">Меню </NavLink>
						<img src={subselection} alt="" />
					</li>
					<li>
						<NavLink to="/delivery">Доставка</NavLink>
					</li>
					<li>
						<NavLink to="/contacts">Контакты</NavLink>
					</li>
					<li>
						<NavLink to="/phone"> <img src={phone} alt="" /> +996500405988</NavLink>
					</li>
					<li>
						<NavLink to="/basket">
							<img src={basket} alt="" /><b>1</b></NavLink>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;