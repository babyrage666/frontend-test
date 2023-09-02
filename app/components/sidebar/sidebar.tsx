import { SidebarProps } from './sidebar.props';

export default function Sidebar({ ...props }: SidebarProps): JSX.Element {
	return (
		<nav>
			<ul>
				<li>Сортировать</li>
				<li>Фильтровать</li>
				<li>Цена</li>
				<li>Авиакомпания</li>
			</ul>
		</nav>
	);
}