import Content from './components/content/content';
import Sidebar from './components/sidebar/sidebar';
import styles from './page.module.css';

// function 

export default function Home(): JSX.Element {
  console.log()
  return (
    <main className={styles.main}>
      <Sidebar />
      <Content />
    </main>
  )
}
