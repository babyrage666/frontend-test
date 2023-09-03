import { CardProps } from './card.props';
import styles from './card.module.css';

export default function Card({ ...props }: CardProps): JSX.Element {
	return (
		<div {...props}>
			<div className={styles.banner}>
				<div className={styles.bannerTitle}>LOT</div>
				<div className={styles.bannerInfo}>
					<div className={styles.bannerPrice}>20049₽</div>
					<div className={styles.bannerPassager}>Стоимотсть для одного пассажира</div>
				</div>
			</div>
			<div className={styles.flightData}>
				<div className={styles.flightPath}>Москва, Шереметьево (SVO) → Лондон, Хитроу (LHR)</div>
				<div className={styles.flightTime}>
					<div className={styles.flightDeparture}>20:40 <span>18 авг. вт</span></div>
					<div className={styles.flightDuration}>14 ч 45 мин</div>
					<div className={styles.flightArrival}><span>19 авг. ср</span> 09:25</div>
				</div>
				<div className={styles.flightTransit}>1 пересадка</div>
				<div className={styles.flightAirline}>Рейс выполняет: LOT Polish Airlines</div>
			</div>
			<div className={styles.flightDivider}></div>
			<div className={styles.flightData}>
				<div className={styles.flightPath}>Москва, Шереметьево (SVO) → Лондон, Хитроу (LHR)</div>
				<div className={styles.flightTime}>
					<div className={styles.flightDeparture}>20:40 <span>18 авг. вт</span></div>
					<div className={styles.flightDuration}>14 ч 45 мин</div>
					<div className={styles.flightArrival}><span>19 авг. ср</span> 09:25</div>
				</div>
				<div className={styles.flightTransit}>1 пересадка</div>
				<div className={styles.flightAirline}>Рейс выполняет: LOT Polish Airlines</div>
			</div>
			<button className={styles.flightSelect}>Выбрать</button>
		</div>
	);
}