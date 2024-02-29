import React from 'react'
import { v4 as uuid } from "uuid";

export function highlightLines(array = []) {
  const name = "a" + uuid();

  function getItem() {
    return array?.map(line => `.${name} + div .token-line:nth-child(${line}) { 
          background-color: var(--docusaurus-highlighted-code-line-bg);
          display: inline-block;
          width: 100%;
        }
        `).join(" ");
  }

  return (
    <>
      <style>{getItem()}</style>
      <div className={name} />
    </>);
}