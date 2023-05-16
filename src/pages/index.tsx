import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import DocSections from '@site/src/components/DocSections';

function DocsHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Documentation</h1>
        <p className="hero__subtitle">Get to grips with Serpent OS</p>
      </div>
    </header>
  );
}

export default function Docs(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description="Serpent OS">
      <DocsHeader />
      <main>
        <DocSections />
      </main>
    </Layout>
  );
}
