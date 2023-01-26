import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
} satisfies Story;

export const LoggedOut = {} satisfies Story;
