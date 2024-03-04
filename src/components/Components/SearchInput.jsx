import React, { useState } from 'react'

import s from './index.module.css';
import { IoSearch } from "react-icons/io5";
import { InputChildButton, InputText, InputTextField } from 'matro-ui';

const SearchInput = ({ handleChange, searchQuery }) => {

  return (
    <InputText
      className={s.searchinput}
      value={searchQuery}
      onChange={handleChange}
      hue="100"
      placeholder="Search..."
      name="input-name-prop"
    >
      <InputTextField />
      <InputChildButton
        children={<IoSearch />}
        onClick={handleChange} />
    </InputText>
  )
}

export default SearchInput