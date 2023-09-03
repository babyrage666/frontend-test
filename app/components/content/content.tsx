'use client';
import { useContext } from 'react';
import { ContentProps } from './content.props';
import { PageContext, Sort } from '@/app/page';
import Card from '@/components/card/card';
import { IModifiedFlightsData } from '@/interfaces/modifiedFlight.interface';
import styles from './content.module.css'

function placeCards(flight: IModifiedFlightsData[]): JSX.Element {
	return (
		<Card flight={flight} />
	);
}

function sortCards(sort: Sort, data: IModifiedFlightsData[][]) {
	if (sort === Sort.PRICE_INCREASE || sort === Sort.PRICE_DECREASE) {
		console.log('price', sort);
		const sortedData = data.sort((a, b) => {
			if (parseInt(a[0].price) < parseInt(b[0].price)) {
				return sort === Sort.PRICE_INCREASE ? -1 : 1;
			} else if (parseInt(a[0].price) > parseInt(b[0].price)) {
				return sort === Sort.PRICE_INCREASE ? 1 : -1;
			} else {
				return 0
			}
		});
		return sortedData;
	} else {
		console.log('time')
		const sortedData = data.sort((a, b) => {
			if (a[0].duration < b[0].duration) {
				return -1
			} else if (a[0].duration > b[0].duration) {
				return 1;
			} else {
				return 0;
			}
		});
		return sortedData;
	}
}

export default function Content({ data, ...props }: ContentProps): JSX.Element {
	const { sort, transferFilter, noTransferFilter, priceFilter } = useContext(PageContext);
	const dataCopy = sortCards(Sort.PRICE_DECREASE, [...data]);
	console.log(dataCopy[0]);
	console.log(data[0]);
	return (
		<div {...props}>
			<Card className={styles.card} flight={dataCopy[0]} />
			<Card className={styles.card} flight={dataCopy[1]} />
		</div>
	);
};