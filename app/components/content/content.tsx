'use client';
import { useContext } from 'react';
import { ContentProps } from './content.props';
import { PageContext } from '@/app/page';
import Card from '@/components/card/card';
import { IModifiedFlightsData } from '@/interfaces/modifiedFlight.interface';

function placeCards(flight: IModifiedFlightsData[]): JSX.Element {
	return (
		<Card flight={flight} />
	);
}

export default function Content({ data, ...props }: ContentProps): JSX.Element {
	const { sort, transferFilter, noTransferFilter, priceFilter } = useContext(PageContext);
	return (
		<div {...props}>
			<Card flight={data[0]} />
		</div>
	);
};