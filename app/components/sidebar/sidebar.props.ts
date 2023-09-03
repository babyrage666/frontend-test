import { IModifiedFlightsData } from '@/interfaces/modifiedFlight.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	data: IModifiedFlightsData[][]
};