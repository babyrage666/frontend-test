import { IModifiedFlightsData } from '@/interfaces/modifiedFlight.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ContentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	data: IModifiedFlightsData[][];
};