---
sidebar_position: 1
---

# `<Checkbox/>`

The `Checkbox` component allows users to select or deselect options in a form. It provides a customizable checkbox input with various options.

### Props

- `value`: (boolean) The value of the checkbox.
- `onChange`: (function) Callback function triggered when the checkbox value changes.
- `name`: (string) The name attribute of the checkbox.
- `checked`: (boolean) Indicates whether the checkbox is checked.
- `toggle`: (boolean) Indicates whether the checkbox is in toggle mode.
- `linear`: (boolean) Indicates whether the checkbox has a linear style.

### Example Usage

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
