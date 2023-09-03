'use client';
import { useContext } from 'react';
import { ContentProps } from './content.props';
import { PageContext } from '@/app/page';
import Card from '@/components/card/card';

export default function Content({ data, ...props }: ContentProps): JSX.Element {
	const { sort, transferFilter, noTransferFilter, priceFilter } = useContext(PageContext);
	return (
		<div {...props}>
			<Card />
		</div>
	);
};