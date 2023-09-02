import { AirlineAlliance, Carrier } from './flight.interface'

export interface IModifiedFlightsData {
	carrier: Carrier
	price: string,
	duration: number,
	arrivalAirort: AirlineAlliance,
	arrivalDate: Date,
	departureAirport: AirlineAlliance,
	departureDate: Date,
	transfers: number
}