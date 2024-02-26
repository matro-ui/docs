import React, { useState } from 'react'

import s from './index.module.css';
import { IoSearch } from "react-icons/io5";
import { InputChildButton, InputText, InputTextField } from 'matro-ui';

const SearchInput = () => {
  const [value, setValue] = useState("");
  const handleChange = (value) => setValue(value)

  return (
    <InputText
      className={s.searchinput}
      value={value}
      onChange={handleChange}
      hue="100"
      placeholder="Search..."
      name="input-name-prop"
    >
      <InputTextField />
      <InputChildButton
        children={<IoSearch />}
        onClick={() => { alert("Query: " + value); handleChange(""); }} />
    </InputText>
  )
}

export default SearchInput