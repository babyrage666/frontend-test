
import Content from './components/content/content';
import Sidebar from './components/sidebar/sidebar';
import styles from './page.module.css';
import path from 'path';
import fsPromises from 'fs/promises';
import { IFlights } from '@/interfaces/flight.interface';
import { IModifiedFlightsData } from '@/interfaces/modifiedFlight.interface';

//Получение данных с локального JSON
async function getData() {
  const resJson = await fsPromises.readFile(path.join(process.cwd(), 'api/flights.json'));
  const res: IFlights = JSON.parse(resJson.toString());
  return res;
}

function transformData(data: IFlights) {
  const flights: IModifiedFlightsData[][] = [];
  for (let item of data.result.flights) {
    const airline: IModifiedFlightsData[] = [];
    for (let leg in item.flight.legs) {
      const flight = {
        carrier: item.flight.legs[0].segments[0].airline,
        price: item.flight.price.total.amount,
        duration: item.flight.legs[0].duration,
        arrivalAirort: item.flight.legs[0].segments[1] ? item.flight.legs[0].segments[1].arrivalAirport : item.flight.legs[0].segments[0].arrivalAirport,
        arrivalDate: item.flight.legs[0].segments[1] ? item.flight.legs[0].segments[1].arrivalDate : item.flight.legs[0].segments[0].arrivalDate,
        departureAirport: item.flight.legs[0].segments[0].departureAirport,
        departureDate: item.flight.legs[0].segments[0].departureDate,
        transfers: item.flight.legs[0].segments[1] ? 1 : 0
      }
      airline.push(flight);
    }
    flights.push(airline);
  }
  return flights;
}

export default async function Home() {
  const data = await getData();
  console.log(transformData(data)[0]);
  return (
    <main className={styles.main}>
      <Sidebar />
      <Content />
    </main>
  )
}
