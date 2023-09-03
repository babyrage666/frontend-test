import { SidebarProps } from './sidebar.props';
import styles from './sidebar.module.css';
import { ChangeEvent, useContext } from 'react';
import { PageContext, Sort } from '@/app/page';

export default function Sidebar({ data, ...props }: SidebarProps): JSX.Element {
	const { sort, transferFilter, noTransferFilter, priceFilter, setSort, setTransferFilter, setNoTransferFilter, setPriceFilter } = useContext(PageContext);
	const selectSort = (event: ChangeEvent<HTMLInputElement>): void => {
		switch (true) {
			case event.currentTarget.id == 'one':
				setSort && setSort(Sort.PRICE_INCREASE);
				break;
			case event.currentTarget.id == 'two':
				setSort && setSort(Sort.PRICE_DECREASE);
				break;
			default:
				setSort && setSort(Sort.TIME_DECREASE);
				break;
		}
	}

	const changeTransferFilter = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.currentTarget.name === 'transfer') {
			setTransferFilter && setTransferFilter();
		} else {
			setNoTransferFilter && setNoTransferFilter();
		}
	}

	const changePriceFilter = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.currentTarget.name === 'priceFrom') {
			if (parseInt(event.currentTarget.value)) {
				setPriceFilter && setPriceFilter([parseInt(event.currentTarget.value), priceFilter[1]])
			}
		} else {
			if (parseInt(event.currentTarget.value)) {
				setPriceFilter && setPriceFilter([priceFilter[0], parseInt(event.currentTarget.value)])
			}
		}
	}

	const filterAirlines = () => {
		const modData: string[][] = data.map(flight => {
			return [flight[0].carrier.caption, flight[0].price];
		}).reduce((acc: any, currVal: any) => {
			if (acc.length === 0) {
				acc.push(currVal);
				return acc;
			} else {
				if (acc.flat().includes(currVal[0])) {
					return acc.map((item: any) => {
						if (item.includes(currVal[0]) && parseInt(currVal[1]) < parseInt(item[1])) {
							return currVal;
						} else {
							return item;
						}
					})
				} else {
					acc.push(currVal);
					return acc;
				}
			}
		}, []);
		return modData;
	}

	const airlinesComponent = (airlines: string[][]) => {
		return airlines.map(airline => {
			return (
				<div className={styles.sidebarInput} key={airline[1]}>
					<input type="checkbox" name={airline[1]} />
					<label htmlFor={airline[1]}>{
						` -  ${airline[0].length > 18 ? airline[0].slice(0, 14) + '....' : airline[0]} от ${airline[1]} ₽.`
					}</label>
				</div>
			)
		})
	}

	const filteredAirlines = filterAirlines();
	console.log(filteredAirlines);
	const showAirlines = airlinesComponent(filteredAirlines);
	console.log(showAirlines);
	return (
		<nav {...props}>
			<ul className={styles.sidebar}>
				<li className={styles.sidebarItem}>
					<div className={styles.sidebarTitle}>Сортировать</div>
					<div className={styles.sidebarField}>
						<div className={styles.sidebarInput}>
							<input type="radio" name='sort' id='one' onChange={(event) => selectSort(event)} />
							<label htmlFor="sort">- по возврастанию цены</label>
						</div>
						<div className={styles.sidebarInput}>
							<input type="radio" name='sort' id='two' onChange={(event) => selectSort(event)} />
							<label htmlFor="sort">- по убыванию цены</label>
						</div>
						<div className={styles.sidebarInput}>
							<input type="radio" name='sort' id='three' onChange={(event) => selectSort(event)} />
							<label htmlFor="sort">- по времени пути</label>
						</div>
					</div>
				</li>
				<li className={styles.sidebarItem}>
					<div className={styles.sidebarTitle}>Фильтровать</div>
					<div className={styles.sidebarField}>
						<div className={styles.sidebarInput}>
							<input type="checkbox" name='transfer' onChange={(event) => changeTransferFilter(event)} />
							<label htmlFor="transfer"> - 1 пересадка</label>
						</div>
						<div className={styles.sidebarInput}>
							<input type="checkbox" name='noTransfer' onChange={(event) => changeTransferFilter(event)} />
							<label htmlFor="noTransfer"> - без пересадок</label>
						</div>
					</div>
				</li>
				<li className={styles.sidebarItem}>
					<div className={styles.sidebarTitle}>Цена</div>
					<div className={styles.sidebarField}>
						<div className={styles.sidebarInput}>
							<label htmlFor="priceFrom">От</label>
							<input type="text" name='priceFrom' onChange={(event) => changePriceFilter(event)} />
						</div>
						<div className={styles.sidebarInput}>
							<label htmlFor="priceTo">До</label>
							<input type="text" name='priceTo' onChange={(event) => changePriceFilter(event)} />
						</div>
					</div>
				</li>
				<li className={styles.sidebarItem}>
					<div className={styles.sidebarTitle}>Авиакомпании</div>
					<div className={styles.sidebarField}>
						{...showAirlines}
					</div>
				</li>
			</ul>
		</nav>
	);
}