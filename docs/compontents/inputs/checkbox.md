---
sidebar_position: 1
title: <Checkbox/>
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import s from '../../../src/css/mdx.module.css';
import Sources from "../../../assets/components/Sources/Sources";
import {Checkbox} from "matro-ui";

# Checkbox

The `<Checkbox/>` component allows to select or deselect options in a form. It provides a customizable checkbox input with various options.

<Sources 
  git="https://github.com/matro-ui/matro-ui/tree/main/dist/inputs/Checkbox"
  npmjs="https://www.npmjs.com/package/matro-ui" 
  name="checkbox"
/>


<div className={s.tabs}>
<Tabs className={s.parent}>
  <TabItem value="usage" label="Usage" attributes={{className: [s.item, s.usage]}}>
## Import 

```jsx
import { Checkbox } from "matro-ui";
```
- `Checkbox`: Checkbox element
{/*  */}

 ## Usage

 <div className={s.preview_box}>
  <Checkbox name="checkbox-name-prop">
    Clickable Label
  </Checkbox>
 </div>

 ```jsx live 
   <Checkbox name="checkbox-name-prop">
    Clickable Label
  </Checkbox>
```




  </TabItem>


  <TabItem value="props" label="Props" attributes={{className: [s.item, s.props]}}>
## Props

- `value`: (boolean) The value of the checkbox.
- `onChange`: (function) Callback function triggered when the checkbox value changes.
- `name`: (string) The name attribute of the checkbox.
- `checked`: (boolean) Indicates whether the checkbox is checked.
- `toggle`: (boolean) Indicates whether the checkbox is in toggle mode.
- `linear`: (boolean) Indicates whether the checkbox has a linear style.
{/*  */}
  </TabItem>



  <TabItem value="extra" label="Extra Features" attributes={{className: [s.item, s.extra]}}>
## Example Usage

```jsx
import React from 'react';
import {Checkbox} from 'matro-iu';

function App() {
  const handleCheckboxChange = (isChecked) => {
    console.log('Checkbox checked state:', isChecked);
  };

  return (
    <div>
      <Checkbox
        value={true}
        onChange={handleCheckboxChange}
        name="exampleCheckbox"
        checked={false}
        toggle={false}
        linear={true}
      >
        Example Checkbox
      </Checkbox>
    </div>
  );
}
```
  </TabItem>



</Tabs>
</div>
