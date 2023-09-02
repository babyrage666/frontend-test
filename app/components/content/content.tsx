import { ContentProps } from './content.props';

export default function Content({ ...props }: ContentProps): JSX.Element {
	return (
		<div {...props}>
			<div>
				<div>LOT</div>
				<div>
					<div>21049 P</div>
					<div>Стоимость одного пассажира</div>
				</div>
			</div>
		</div>
	);
};