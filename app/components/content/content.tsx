'use client';
import { useContext, useState } from 'react';
import { ContentProps } from './content.props';
import { PageContext, Sort } from '@/app/page';
import Card from '@/components/card/card';
import { IModifiedFlightsData } from '@/interfaces/modifiedFlight.interface';
import styles from './content.module.css'


//функция соритровки
function sortCards(sort: Sort, data: IModifiedFlightsData[][]): IModifiedFlightsData[][] {
	if (sort === Sort.PRICE_INCREASE || sort === Sort.PRICE_DECREASE) {
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

//функция применения фильтров
function filterCards(data: IModifiedFlightsData[][], transferFilter: boolean, noTransferFilter: boolean, priceFilter: [number, number]) {
	const temp: IModifiedFlightsData[][] = data.filter(item => {
		return (parseInt(item[0].price) >= priceFilter[0]) && (parseInt(item[0].price) <= priceFilter[1])
	});
	if (transferFilter && noTransferFilter) {
		return temp;
	}
	if (noTransferFilter) {
		return temp.filter(item => {
			return item[0].transfers === 0
		});
	} else {
		return temp.filter(item => {
			return item[0].transfers > 0
		});
	}
}

//компонент основного контента
export default function Content({ data, ...props }: ContentProps): JSX.Element {
	const { sort, transferFilter, noTransferFilter, priceFilter } = useContext(PageContext);
	const flight: IModifiedFlightsData[][] = filterCards(sortCards(sort, data), transferFilter, noTransferFilter, priceFilter);
	return (
		<div {...props}>
			<Card className={styles.card} flight={flight[0]} />
			<Card className={styles.card} flight={flight[1]} />
			<button className={styles.button}>Показать еще</button>
		</div>
	);
};