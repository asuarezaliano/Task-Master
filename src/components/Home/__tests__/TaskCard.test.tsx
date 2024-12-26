import { render, screen, fireEvent } from '@testing-library/react';
import { TaskCard } from '../TaskCard';

describe('TaskCard', () => {
  const mockTask = {
    id: 1,
    title: 'Test Task',
    description: 'Test Description',
    label: 'Test Label',
    priority: 'low',
  };

  const mockHandleEdit = jest.fn();
  const mockHandleDelete = jest.fn();

  const setup = () => {
    return render(
      <TaskCard
        task={mockTask}
        handleEdit={mockHandleEdit}
        handleDelete={mockHandleDelete}
        colorSchema="blue"
      />
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders task information correctly', () => {
    setup();

    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('calls handleEdit when edit button is clicked', () => {
    setup();

    const editButton = screen.getByText('Edit');
    fireEvent.click(editButton);

    expect(mockHandleEdit).toHaveBeenCalledTimes(1);
    expect(mockHandleEdit).toHaveBeenCalledWith(mockTask);
  });

  it('shows confirm modal when delete button is clicked', () => {
    setup();

    const deleteButton = screen.getByTestId('delete-task-icon');
    fireEvent.click(deleteButton);

    expect(screen.getByText('Are you sure you want to delete this item?')).toBeInTheDocument();
  });

  it('calls handleDelete when confirm delete in modal', () => {
    setup();

    const deleteButton = screen.getByTestId('delete-task-icon');
    fireEvent.click(deleteButton);

    const confirmButton = screen.getByRole('button', { name: /confirmar/i });
    fireEvent.click(confirmButton);

    expect(mockHandleDelete).toHaveBeenCalledTimes(1);
    expect(mockHandleDelete).toHaveBeenCalledWith(mockTask);
  });

  it('does not call handleDelete when cancel delete in modal', () => {
    setup();

    const deleteButton = screen.getByTestId('delete-task-icon');
    fireEvent.click(deleteButton);

    const cancelButton = screen.getByRole('button', { name: /cancelar/i });
    fireEvent.click(cancelButton);

    expect(mockHandleDelete).not.toHaveBeenCalled();
  });

  it('renders without label when label is not provided', () => {
    const taskWithoutLabel = { ...mockTask, label: '' };
    render(
      <TaskCard
        task={taskWithoutLabel}
        handleEdit={mockHandleEdit}
        handleDelete={mockHandleDelete}
        colorSchema="blue"
      />
    );

    const labels = screen.queryByText('Test Label');
    expect(labels).not.toBeInTheDocument();
  });
});
