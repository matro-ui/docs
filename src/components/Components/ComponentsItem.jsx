import React from 'react'
import s from './index.module.css';
import Link from '@docusaurus/Link';
import { useHistory } from '@docusaurus/router';


const defaultProps = {
  img: "",
  title: "def-title",
}

const ComponentsItem = (props = defaultProps) => {
  const { img, title, url, item } = { ...defaultProps, ...props };
  const history = useHistory();

  const onNavigate = () => {
    history.push(url || "");
  }

  return (
    <article className={s.item} onClick={onNavigate}>
      <div className={s.imgartv}>
        {img && <img src={img} alt={title} onError={(e) => e.target.style.opacity = 0} />}
        {item ? <>{item}</> : ""}
      </div>
      <Link href={url}>
        <p className={s.title}><span>{title}</span></p>
      </Link>
    </article>
  )
}

export default ComponentsItem