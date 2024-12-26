import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Write something...',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Default input',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    value: 'Example text',
  },
};

export const WithType: Story = {
  args: {
    type: 'password',
    placeholder: 'Password',
  },
};
