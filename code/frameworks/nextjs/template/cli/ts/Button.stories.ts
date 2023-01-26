import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
} satisfies Story;

export const Secondary = {
  args: {
    label: 'Button',
  },
} satisfies Story;

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
} satisfies Story;

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
} satisfies Story;
