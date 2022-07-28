import React from 'react'
import burger from "../../assets/icons/burger.svg"
import next from "../../assets/icons/right.svg"
import styles from "./MainContent.module.css"

const Content = () => {
  return (
		<div className={styles.Container}>
			<div className={styles.Content}>
				<h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
				<p>
					Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен
					всегда горячим и ароматным.
				</p>
				<button>Перейти в меню<img src={next} alt="" /></button>
        </div>
        <img className={styles.burger} src={burger} alt="" />
		</div>
	);
}

export default Content