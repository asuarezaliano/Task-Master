import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '../separator';

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    className: 'my-4',
  },
  render: args => (
    <div className="w-full max-w-[500px]">
      <div>Above content</div>
      <Separator {...args} />
      <div>Below content</div>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    className: 'mx-4',
  },
  render: args => (
    <div className="flex h-[100px] max-w-[500px] items-center">
      <div>Left content</div>
      <Separator {...args} />
      <div>Right content</div>
    </div>
  ),
};

export const WithCustomStyles: Story = {
  args: {
    orientation: 'horizontal',
    className: 'my-4 bg-primary',
  },
  render: args => (
    <div className="w-full max-w-[500px]">
      <div>Custom styled separator</div>
      <Separator {...args} />
      <div>Below content</div>
    </div>
  ),
};
