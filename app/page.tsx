
import Content from './components/content/content';
import Sidebar from './components/sidebar/sidebar';
import styles from './page.module.css';
import path from 'path';
import fsPromises from 'fs/promises';
import { IFlights } from '@/interfaces/flight.interface';

//Получение данных с локального JSON
async function getData() {
  const resJson = await fsPromises.readFile(path.join(process.cwd(), 'api/flights.json'));
  const res: IFlights = JSON.parse(resJson.toString());
  return res;
}

export default async function Home() {
  const data = await getData();
  return (
    <main className={styles.main}>
      <Sidebar />
      <Content />
    </main>
  )
}
