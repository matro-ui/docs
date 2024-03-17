import React from 'react'
import s from './index.module.css';
import { Button } from 'matro-ui';
import { FaGithub, FaNpm } from "react-icons/fa";

const Sources = ({ git, npmjs, name }) => {
  return (
    <div className={s.sources}>
      <Button
        leftIcon={<FaGithub />}
        as={<a href={git} target='_blank' />}>Source</Button>
      <Button
        leftIcon={<FaNpm color="#e24141" style={{ fontSize: "2em" }} />}
        as={<a href={npmjs} target='_blank' />}>@matro-ui/{name}</Button>
    </div >
  )
}

export default Sources;