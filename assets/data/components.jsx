import { Stack } from 'matro-ui'
import { Spinner } from 'matro-ui'
import React from 'react'

export default {
  "inputs": [{
    id: 1,
    title: "Checkbox",
    url: "/docs/compontents/inputs/checkbox",
    img: "/img/components/Checkbox.svg",
  }, {
    id: 2,
    title: "Input Number",
    url: "/docs/compontents/inputs/input-number",
    img: "/img/components/InputNumber.svg",
  }, {
    id: 3,
    title: "Input Text",
    url: "/docs/compontents/inputs/input-text",
    img: "/img/components/InputText.svg",
  }, {
    id: 5,
    title: "Radio",
    url: "/docs/compontents/inputs/radio",
    img: "/img/components/Radio.svg",
  }, {
    id: 6,
    title: "Select",
    url: "/docs/compontents/inputs/select",
    img: "/img/components/Select.svg",
  }, {
    id: 7,
    title: "Slider",
    url: "/docs/compontents/inputs/slider",
    img: "/img/components/Slider.svg",
  }, {
    id: 8,
    title: "Textarea",
    url: "/docs/compontents/inputs/textarea",
    img: "/img/components/Textarea.svg",
  },

  ],
  "layout": [
    {
      id: 1,
      title: "Stack",
      url: "/docs/compontents/layout/stack",
      img: "/img/components/Stack.svg",
    }],
  "media": [
    {
      id: 1,
      title: "Hide",
      url: "/docs/compontents/media/hide",
      img: "/img/components/Hide.svg",
    },
    {
      id: 1,
      title: "Minmax",
      url: "/docs/compontents/media/minmax",
      img: "/img/components/MinMax.svg",
    },
    {
      id: 1,
      title: "Show",
      url: "/docs/compontents/media/show",
      img: "/img/components/Show.svg",
    }],
  "navigation": [
    {
      id: 1,
      title: "Breadcrumbs",
      url: "/docs/compontents/navigation/breadcrumbs",
      img: "/img/components/Breadcrumbs.svg",
    },
    {
      id: 1,
      title: "Link",
      url: "/docs/compontents/navigation/link",
      img: "/img/components/Link.svg",
    }],
  "progress": [
    {
      id: 1,
      title: "Progress",
      url: "/docs/compontents/progress/",
      img: "/img/components/Progress.svg",
    },
    {
      id: 1,
      title: "Spinner",
      url: "/docs/compontents/progress/spinner",
      item: <Stack gap="10" align="center" justify="center" style={{ flex: 1, height: "100%", minHeight: "140px", transform: "scale(1.2)" }}><Spinner size="XS" /> <Spinner size="L" /><Spinner size="XL" /></Stack>
    }],
  "other": [
    {
      id: 1,
      title: "Toggle",
      url: "/docs/compontents/other/toggle",
      img: "/img/components/Toggle.svg",
    },
    {
      id: 1,
      title: "Button",
      url: "/docs/compontents/other/button",
      img: "/img/components/Button.svg",
    },
    {
      id: 1,
      title: "Accordion",
      url: "/docs/compontents/other/accordion",
      img: "/img/components/Accordion.svg",
    },
    {
      id: 1,
      title: "Key",
      url: "/docs/compontents/other/key",
      img: "/img/components/Key.svg",
    },
  ],
}
