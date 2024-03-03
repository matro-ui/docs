import React from 'react'
import SearchInput from './SearchInput'
import ComponentsItem from './ComponentsItem'
import s from './index.module.css';
import data from "../../data/components"



const ComponentsPage = () => {
  const filteredData = data;

  return (
    <div>
      <SearchInput />

      {Object.keys(filteredData).map(category => {
        const items = data[category];
        if (items.length) return (
          <div className={s.category_group}>
            <h2 className={s.category_title}>{category.replace("-", " ")}</h2>
            <div className={s.category_items}>
              {items?.map(item => <ComponentsItem {...item} />)}
            </div>
          </div>
        );
        return ""
      })
      }


    </div>

  )
}

export default ComponentsPage