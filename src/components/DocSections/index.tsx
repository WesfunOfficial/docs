import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { IconCode, IconPackage, IconUser } from '@tabler/icons-react';

type DocSection = {
  title: string;
  description: JSX.Element;
  link: string;
  img: JSX.Element,
};

const DocList: DocSection[] = [
  {
    title: 'Developers',
    description: (
      <>
        Learn how to develop tooling and solutions for Serpent OS
      </>
    ),
    link: 'docs/developers/intro',
    img: (
      <IconCode size="96" stroke="1"></IconCode>
    )
  },
  {
    title: 'Packagers',
    description: (
      <>
        Get to grips with our advanced packaging features using easy to follow guides
      </>
    ),
    link: 'docs/packaging/intro',
    img: (
      <IconPackage size="96" stroke="1"></IconPackage>
    )
  },
  {
    title: 'Users',
    description: (
      <>
        Need to know how something works? You've come to the right place.
      </>
    ),
    link: 'docs/users/intro',
    img: (
      <IconPackage size="96" stroke="1"></IconPackage>
    )
  },
];

function Doc({title, img, description, link}: DocSection) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {img}
      </div>
        <div className="text--center padding-horiz--md">
          <Link href={link}>
            <h3>{title}</h3>
          </Link>
          <p>{description}</p>
        </div>
    </div>
  );
}

export default function DocSections(): JSX.Element {
  return (
    <section className={styles.docSection}>
      <div className="container">
        <div className="row">
          {DocList.map((props, idx) => (
            <Doc key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
