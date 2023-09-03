
'use client';

import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren, createContext, useState } from 'react';
import Content from './components/content/content';
import Sidebar from './components/sidebar/sidebar';
import styles from './page.module.css';
import { IModifiedFlightsData } from '@/interfaces/modifiedFlight.interface';

interface HomeProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  data: IModifiedFlightsData[][]
}

export enum Sort {
  PRICE_INCREASE,
  PRICE_DECREASE,
  TIME_DECREASE
}

export interface IPageContext {
  sort: Sort,
  transferFilter: boolean,
  noTransferFilter: boolean,
  priceFilter: [number, number]
  setSort?: (newSortState: Sort) => void,
  setTransferFilter?: () => void,
  setNoTransferFilter?: () => void,
  setPriceFilter?: (newPriceFilterState: [number, number]) => void
}

export const PageContext = createContext<IPageContext>({
  sort: Sort.PRICE_INCREASE,
  transferFilter: false,
  noTransferFilter: false,
  priceFilter: [0, Infinity]
});

export const PageContextProvider = ({ sort, transferFilter, noTransferFilter, priceFilter, children }: PropsWithChildren<IPageContext>): JSX.Element => {
  const [sortState, setSortState] = useState<Sort>(sort);
  const setSort = (newSortState: Sort) => setSortState(newSortState);
  const [transferFilterState, setTransferFilterState] = useState<boolean>(transferFilter);
  const setTransferFilter = () => setTransferFilterState(!transferFilterState);
  const [noTransferFilterState, setNoTransferFilterState] = useState<boolean>(noTransferFilter);
  const setNoTransferFilter = () => setNoTransferFilterState(!noTransferFilterState);
  const [priceFilterState, setPriceFilterState] = useState<[number, number]>(priceFilter);
  const setPriceFilter = (newPriceFilterState: [number, number]) => setPriceFilterState(newPriceFilterState);
  return (
    <PageContext.Provider value={{ sort: sortState, transferFilter: transferFilterState, noTransferFilter: noTransferFilterState, priceFilter: priceFilterState, setSort, setTransferFilter, setNoTransferFilter, setPriceFilter }}>
      {children}
    </PageContext.Provider>
  )
}

export default function Home({ data, ...props }: HomeProps) {
  return (
    <PageContextProvider sort={Sort.PRICE_INCREASE} transferFilter={false} noTransferFilter={false} priceFilter={[0, Infinity]}>
      <main className={styles.main} {...props}>
        <Sidebar data={data} />
        <Content />
      </main>
    </PageContextProvider>
  )
}
