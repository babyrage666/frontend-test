import { IModifiedFlightsData } from '@/interfaces/modifiedFlight.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	flight: IModifiedFlightsData[]
}