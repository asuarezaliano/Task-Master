import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../textarea';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    placeholder: 'Type your message here...',
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'This is some example text in the textarea',
    placeholder: 'Type your message here...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'This textarea is disabled',
  },
};

export const CustomHeight: Story = {
  args: {
    placeholder: 'This textarea has custom height',
    className: 'min-h-[200px]',
  },
};
