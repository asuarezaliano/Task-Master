import type { Meta, StoryObj } from '@storybook/react';
import Title from '../Title';

const meta: Meta<typeof Title> = {
  title: 'UI/Title',
  component: Title,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: 'Default Title',
  },
};

export const Big: Story = {
  args: {
    children: 'Big Title',
    size: 'big',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Title',
    size: 'small',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Title',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Title',
    color: 'secondary',
  },
};

export const Accent: Story = {
  args: {
    children: 'Accent Title',
    color: 'accent',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive Title',
    color: 'destructive',
  },
};
