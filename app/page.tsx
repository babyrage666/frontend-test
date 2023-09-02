import Content from './components/content/content';
import Sidebar from './components/sidebar/sidebar';
import styles from './page.module.scss';

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <Sidebar />
      <Content />
    </main>
  )
}
