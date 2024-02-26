import React from 'react'
import s from './index.module.css';
import Image from '../Image/Image';
import Link from '@docusaurus/Link';
import { useHistory } from '@docusaurus/router';


const defaultProps = {
  img: "",
  title: "def-title",
}

const ComponentsItem = (props = defaultProps) => {
  const { img, title, url } = { ...defaultProps, ...props };
  const history = useHistory();

  const onNavigate = () => {
    history.push(url || "");
  }

  return (
    <article className={s.item} onClick={onNavigate}>
      <div className={s.imgartv}>
        <Image src={img} alt={title} />
      </div>
      <Link href={url}>
        <p className={s.title}><span>{title}</span></p>
      </Link>
    </article>
  )
}

export default ComponentsItem