import React from 'react'
import s from './index.module.css';
import { v4 as uuidv4 } from 'uuid';

export default ({ payload, title }) => {
  if (payload && payload.length)
    return (
      <>
        {title ? <h2>{title}</h2> : ""}
        {payload.map(item => <Item key={uuidv4()} {...item} />)}
      </>
    )
}

const Item = ({ title, type, desc, def }) => (
  <div className={s.item}>
    <span className={s.title}>{title}</span>
    <div className={s.content}>
      {desc ? <div><span>Description</span><span>{desc}</span></div> : ""}
      {type ? <div><span>Type</span><span className={s.act_color}>{type}</span></div> : ""}
      {def ? <div><span>Default</span><span className={s.act_color}>{def}</span></div> : ""}
    </div>
  </div>
)
