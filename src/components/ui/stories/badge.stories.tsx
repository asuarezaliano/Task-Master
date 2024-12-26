import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'Badge',
    colorScheme: 'primary',
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Personal',
    colorScheme: 'green-500',
  },
};

export const Work: Story = {
  args: {
    children: 'Work',
    colorScheme: 'blue-500',
  },
};
