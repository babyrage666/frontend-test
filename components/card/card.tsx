import { CardProps } from './card.props';
import styles from './card.module.css';


function convertDate(date: Date): string[] {
	const dateOptions: Intl.DateTimeFormatOptions = {
		hour: "2-digit",
		minute: "2-digit",
		day: "numeric",
		month: "short",
		weekday: "short"
	}
	const rawDate = new Date(date);
	return new Intl.DateTimeFormat('ru-RU', dateOptions).format(rawDate).split(' ');
}

function calculateFlightTime(dep: Date, arr: Date) {
	const departure = new Date(dep);
	const arrival = new Date(arr);
	const difference = (arrival.getTime() - departure.getTime());
	const days = Math.floor(difference / 1000 / 60 / 60);
	const hours = ((difference - days * 1000 * 60 * 60) / 1000 / 60);
	return [days, hours];
}

export default function Card({ flight, className, ...props }: CardProps): JSX.Element {
	if (!flight) {
		return <></>;
	}
	const [forward, back] = flight;

	const departureDate = convertDate(forward.departureDate);
	const arrivalDate = convertDate(forward.arrivalDate);
	const flightTime = calculateFlightTime(forward.departureDate, forward.arrivalDate);

	const backDepartureDate = convertDate(back.departureDate);
	const backArrivalDate = convertDate(back.arrivalDate);
	const backFlightTime = calculateFlightTime(back.departureDate, back.arrivalDate);
	return (
		<div className={className} {...props}>
			<div className={styles.banner}>
				<div className={styles.bannerTitle}>{forward.carrier.caption}</div>
				<div className={styles.bannerInfo}>
					<div className={styles.bannerPrice}>{forward.price}₽</div>
					<div className={styles.bannerPassager}>Стоимотсть для одного пассажира</div>
				</div>
			</div>
			<div className={styles.flightData}>
				<div className={styles.flightPath}>{forward.departureCity}, {forward.departureAirport.caption} ({forward.departureAirport.uid}) → {forward.arrivalCity}, {forward.arrivalAirort.caption} ({forward.arrivalAirort.uid})</div>
				<div className={styles.flightTime}>
					<div className={styles.flightDeparture}>{departureDate[3]} <span>{departureDate[1]} {departureDate[2].match(/[^,]/g)?.join('')} {departureDate[0].match(/[^,]/g)?.join('')}</span></div>
					<div className={styles.flightDuration}>{flightTime[0]} ч {flightTime[1]} мин</div>
					<div className={styles.flightArrival}><span>{arrivalDate[1]} {arrivalDate[2].match(/[^,]/g)?.join('')} {arrivalDate[0].match(/[^,]/g)?.join('')} </span>{arrivalDate[3]}</div>
				</div>
				{forward.transfers && <div className={styles.flightTransit}>1 пересадка</div>}
				<div className={styles.flightAirline}>Рейс выполняет: {forward.carrier.caption}</div>
			</div>
			<div className={styles.flightDivider}></div>
			<div className={styles.flightData}>
				<div className={styles.flightPath}>{back.departureCity}, {back.departureAirport.caption} ({back.departureAirport.uid}) → {back.arrivalCity}, {back.arrivalAirort.caption} ({back.arrivalAirort.uid})</div>
				<div className={styles.flightTime}>
					<div className={styles.flightDeparture}>{backDepartureDate[3]} <span>{backDepartureDate[1]} {backDepartureDate[2].match(/[^,]/g)?.join('')} {backDepartureDate[0].match(/[^,]/g)?.join('')}</span></div>
					<div className={styles.flightDuration}>{backFlightTime[0]} ч {backFlightTime[1]} мин</div>
					<div className={styles.flightArrival}><span>{backArrivalDate[1]} {backArrivalDate[2].match(/[^,]/g)?.join('')} {backArrivalDate[0].match(/[^,]/g)?.join('')} </span>{backArrivalDate[3]}</div>
				</div>
				{back.transfers && <div className={styles.flightTransit}>1 пересадка</div>}
				<div className={styles.flightAirline}>Рейс выполняет: {back.carrier.caption}</div>
			</div>
			<button className={styles.flightSelect}>Выбрать</button>
		</div>
	);
}