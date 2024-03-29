import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ReactSimEngine } from '../src/';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/ReactSimEngine',
  component: ReactSimEngine,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {  },
} satisfies Meta<typeof ReactSimEngine>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {},
};

