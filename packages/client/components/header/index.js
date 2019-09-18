import React from 'react'
import Link from 'next/link'
import styles from './styles.scss'

const links = [
  { href: '/about', label: 'About' },
  { href: '/', label: 'Classes and Lessons' },
  { href: '/', label: 'Other Programs' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link
});

const Header = () => (
  <nav className={styles.wrapper}>
    <div>
        <Link href='/'>
          <img alt='logo' className={styles.logo} src='/static/logo.png'/>
        </Link>
    </div>
    <div>
      {links.map(({ key, href, label }) => (
        <Link>
          <a key={key} href={href}>{label}</a>
        </Link>
      ))}
    </div>
  </nav>
);

export {Header};
