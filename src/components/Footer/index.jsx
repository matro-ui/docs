import React from 'react'
import s from './style.module.css';
import clsx from 'clsx';


export default function Footer() {
  return (
    <footer className={clsx([s.footer, " content_wrapper"])}>
      <nav>
        <ul className={s.nav}>
          <li><a href="https://github.com/matro-ui/matro-ui" target="_blank">GitHub</a></li>
          <li><a href="https://github.com/matro-ui/matro-ui/releases" target="_blank">Releases</a></li>
          <li><a href="https://github.com/matro-ui/matro-ui/blob/main/CONTRIBUTING.md" target="_blank">Contribute</a></li>
          <li><a href="https://github.com/matro-ui/matro-ui/issues" target="_blank">Bug Report</a></li>
        </ul>
      </nav>
      <p className={s.cred}><span>Made with
        <img title="Heart Icon" src={"/img/heart.svg"} alt=" love " onError={(e) => { e.target.onerror = null; e.target.replaceWith(document.createTextNode(' 💜 ')); }} />
        by</span><a href="https://github.com/gerwld" target="_blank">Patryk Jaworski</a></p>
    </footer>
  )
}
