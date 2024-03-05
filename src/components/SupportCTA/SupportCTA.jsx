import React from 'react'
import s from './index.module.css';
import { Button } from 'matro-ui';

const SupportCTAItem = ({ desc, title, logo, link }) => {
  if (title, desc, link)
    return (
      <div className={s.item}>
        <div className={s.item__logo}>
          {logo && <img src={logo} alt={title} onError={(e) => e.target.style.opacity = 0} />}
        </div>

        <div className={s.item__content}>
          <h3 className={s.item__title}>{title}</h3>
          <p className={s.item__desc}>{desc}</p>
        </div>
        <div className={s.item__action}>
          <Button as={<a href={link} target='_blank' />}>Sponsor</Button>
        </div>

      </div>
    )
  return ""
}


const SupportCTA = () => {
  const data = [
    {
      id: "d372f47a-d73f-46e1-bc9b-283d06f25511",
      title: "Patreon",
      desc: "Sponsor the creator, Patryk Jaworski",
      link: "https://www.patreon.com/patrykjaworski",
      logo: "/img/mainpage/patreon.svg",

    }
  ]
  return (
    <article className={s.parent}>
      <div className="content_wrapper">
        <div className={s.content}>
          <h2 className={s.title}>Support Matro UI</h2>
          <p className={s.subtitle}>Our dedicated maintainers invest their time, energy, and passion into continuously improving Matro UI. Show your support by contributing to our collective.</p>

          <div className="items">
            {data.map(item => <SupportCTAItem {...item} key={item.id} />)}
          </div>
        </div>
      </div>
    </article>
  )
}
export default SupportCTA