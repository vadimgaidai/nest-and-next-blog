// import React from 'react'

// import { Button } from './Button'

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: 'Example/Button',
//   component: Button,
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// }

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = (args) => <Button {...args} />

// export const Primary = Template.bind({})
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// }

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Button',
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button',
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button',
// }

import { Button } from 'ui'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: ['inherit', 'primary', 'secondary'],
    },
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  variant: 'contained',
  size: 'medium',
  disabled: false,
  children: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  variant: 'outlined',
  size: 'medium',
  disabled: false,
  children: 'Secondary',
}

export const Disabled = Template.bind({})
Disabled.args = {
  color: 'primary',
  variant: 'contained',
  size: 'medium',
  disabled: true,
  children: 'Disabled',
}
