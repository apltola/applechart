import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Apple Chart' }: Props) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.appContainer}>
        <header className={styles.appHeader}>
          <nav>
            <Link href="/">
              <a>appleChart.app</a>
            </Link>
          </nav>
        </header>
        <div className={styles.appContent}>
          <main className={styles.appMain}>{children}</main>
        </div>
        <footer className={styles.appFooter}>
          <span>
            check the code on{' '}
            <a
              href="https://github.com/apltola/applechart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </span>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Layout;
