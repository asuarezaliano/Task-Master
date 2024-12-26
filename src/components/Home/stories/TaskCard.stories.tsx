import type { Meta, StoryObj } from '@storybook/react';
import { TaskCard } from '../TaskCard';

const meta: Meta<typeof TaskCard> = {
  title: 'Components/TaskCard',
  component: TaskCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TaskCard>;

export const Default: Story = {
  args: {
    task: {
      id: 1,
      title: 'Example Task',
      description: 'This is an example task',
      priority: 'medium',
      label: 'Work',
    },
    colorSchema: 'red-500',
  },
};

export const WithOutLabel: Story = {
  args: {
    task: {
      id: 1,
      title: 'Example Task',
      description: 'This is an example task',
      priority: 'medium',
    },
  },
};
