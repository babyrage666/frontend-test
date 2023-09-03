import { IFlights } from '@/interfaces/flight.interface';
import { IModifiedFlightsData } from '@/interfaces/modifiedFlight.interface';

export default function transformData(data: IFlights) {
	const flights: IModifiedFlightsData[][] = [];
	for (let item of data.result.flights) {
		const airline: IModifiedFlightsData[] = [];
		for (let leg in item.flight.legs) {
			const flight = {
				carrier: item.flight.legs[leg].segments[0].airline,
				price: item.flight.price.total.amount,
				duration: item.flight.legs[leg].duration,
				arrivalAirort: item.flight.legs[leg].segments[1] ? item.flight.legs[leg].segments[1].arrivalAirport : item.flight.legs[leg].segments[0].arrivalAirport,
				arrivalDate: item.flight.legs[leg].segments[1] ? item.flight.legs[leg].segments[1].arrivalDate : item.flight.legs[leg].segments[0].arrivalDate,
				departureAirport: item.flight.legs[leg].segments[0].departureAirport,
				departureDate: item.flight.legs[leg].segments[0].departureDate,
				transfers: item.flight.legs[leg].segments[1] ? 1 : 0
			}
			airline.push(flight);
		}
		flights.push(airline);
	}
	return flights;
}

