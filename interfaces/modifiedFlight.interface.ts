import { AirlineAlliance, Carrier } from './flight.interface'

export interface IModifiedFlightsData {
	carrier: Carrier
	price: string,
	duration: number,
	arrivalAirort: AirlineAlliance,
	arrivalDate: Date,
	arrivalCity?: string,
	departureAirport: AirlineAlliance,
	departureDate: Date,
	departureCity?: string,
	transfers: number
}