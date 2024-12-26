import type { Meta, StoryObj } from '@storybook/react';
import TaskList from '../TaskList';

const meta: Meta<typeof TaskList> = {
  title: 'Components/TaskList',
  component: TaskList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TaskList>;

const mockTasks = [
  {
    id: 1,
    title: 'Completar informe',
    description: 'Terminar el informe mensual',
    priority: 'low',
    label: 'Personal',
  },
  {
    id: 2,
    title: 'Comprar víveres',
    priority: 'low',
    description: 'Ir al supermercado',
  },
];

const mockLabels = {
  Work: { name: 'work', color: 'blue-500' },
  Personal: { name: 'personal', color: 'green-500' },
};

export const Default: Story = {
  args: {
    title: 'Low Priority',
    tasks: mockTasks,
    labels: mockLabels,
    handleEdit: task => console.log('Editar:', task),
    handleDelete: task => console.log('Eliminar:', task),
  },
};

export const Empty: Story = {
  args: {
    title: 'Low Priority',
    tasks: [],
    labels: mockLabels,
    handleEdit: task => console.log('Editar:', task),
    handleDelete: task => console.log('Eliminar:', task),
  },
};
