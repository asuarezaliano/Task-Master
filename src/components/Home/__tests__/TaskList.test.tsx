import { render, screen } from '@testing-library/react';
import TaskList from '../TaskList';

describe('TaskList', () => {
  const mockTasks: Task[] = [
    {
      id: 1,
      title: 'Tarea 1',
      description: 'Descripción 1',
      priority: 'low',
      label: 'Personal',
    },
    {
      id: 2,
      title: 'Tarea 2',
      description: 'Descripción 2',
      priority: 'low',
    },
  ];

  const mockHandleEdit = jest.fn();
  const mockHandleDelete = jest.fn();

  const mockLabels = {
    Personal: {
      name: 'Personal',
      color: 'blue-500',
    },
  };

  it('renderiza correctamente una lista de tareas', () => {
    render(
      <TaskList
        handleEdit={mockHandleEdit}
        handleDelete={mockHandleDelete}
        title={'High Priority'}
        tasks={mockTasks}
        labels={mockLabels}
      />
    );

    expect(screen.getByText('High Priority')).toBeInTheDocument();

    mockTasks.forEach(task => {
      expect(screen.getByText(task.title)).toBeInTheDocument();
    });
  });
});
