import { SidebarProps } from './sidebar.props';
import styles from './sidebar.module.css';

export default function Sidebar({ ...props }: SidebarProps): JSX.Element {
	return (
		<nav>
			<ul className={styles.sidebar}>
				<li className={styles.sidebarItem}>
					<div className={styles.sidebarTitle}>Сортировать</div>
					<div className={styles.sidebarField}>
						<div className={styles.sidebarInput}>
							<input type="radio" name='sort' />
							<label htmlFor="sort">- по возврастанию цены</label>
						</div>
						<div className={styles.sidebarInput}>
							<input type="radio" name='sort' />
							<label htmlFor="sort">- по убыванию цены</label>
						</div>
						<div className={styles.sidebarInput}>
							<input type="radio" name='sort' />
							<label htmlFor="sort">- по времени пути</label>
						</div>
					</div>
				</li>
				<li className={styles.sidebarItem}>
					<div className={styles.sidebarTitle}>Фильтровать</div>
					<div className={styles.sidebarField}>
						<div className={styles.sidebarInput}>
							<input type="checkbox" name='transfer' />
							<label htmlFor="transfer"> - 1 пересадка</label>
						</div>
						<div className={styles.sidebarInput}>
							<input type="checkbox" name='noTransfer' />
							<label htmlFor="noTransfer"> - без пересадок</label>
						</div>
					</div>
				</li>
				<li className={styles.sidebarItem}>
					<div className={styles.sidebarTitle}>Цена</div>
					<div className={styles.sidebarField}>
						<div className={styles.sidebarInput}>
							<label htmlFor="priceFrom">От</label>
							<input type="text" name='priceFrom' />
						</div>
						<div className={styles.sidebarInput}>
							<label htmlFor="priceTo">До</label>
							<input type="text" name='priceTo' />
						</div>
					</div>
				</li>
				<li className={styles.sidebarItem}>
					<div className={styles.sidebarTitle}>Авиакомпании</div>
				</li>
			</ul>
		</nav>
	);
}