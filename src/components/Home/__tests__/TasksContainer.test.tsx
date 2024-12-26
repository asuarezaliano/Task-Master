import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TasksContainer from '../TasksContainer';
import { taskService } from '@/services/tasks.service';
import { useToast } from '@/hooks/use-toast';

jest.mock('@/services/tasks.service', () => ({
  taskService: {
    getTasks: jest.fn(),
    getLabels: jest.fn(),
    addColor: jest.fn(),
    deleteTask: jest.fn(),
  },
}));
jest.mock('@/hooks/use-toast', () => ({
  useToast: jest.fn(),
}));

const mockToast = jest.fn();
(useToast as jest.Mock).mockReturnValue({ toast: mockToast });

describe('TasksContainer', () => {
  const mockTasks: Task[] = [
    { id: 1, title: 'Task 1', description: 'Description 1', priority: 'low', label: 'work' },
    { id: 2, title: 'Task 2', description: 'Description 2', priority: 'medium', label: 'personal' },
    { id: 3, title: 'Task 3', description: 'Description 3', priority: 'high', label: 'study' },
  ];

  const mockLabels: Record<string, Label> = {
    work: { name: 'work', color: 'green-500' },
    personal: { name: 'personal', color: 'red-500' },
    study: { name: 'study', color: 'blue-500' },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with initial tasks and labels', () => {
    render(<TasksContainer tasksFetched={mockTasks} labelsFetched={mockLabels} />);

    expect(screen.getByText('Task List')).toBeInTheDocument();
    expect(screen.getByText('Low Priority')).toBeInTheDocument();
    expect(screen.getByText('Medium Priority')).toBeInTheDocument();
    expect(screen.getByText('High Priority')).toBeInTheDocument();
  });

  it('opens add task modal when clicking Add Task button', async () => {
    const user = userEvent.setup();
    render(<TasksContainer tasksFetched={mockTasks} labelsFetched={mockLabels} />);

    const addButton = screen.getByText('Add Task');
    await user.click(addButton);

    expect(screen.getByText('Add New Task')).toBeInTheDocument();
  });

  it('opens edit task modal with correct task data', async () => {
    const user = userEvent.setup();
    render(<TasksContainer tasksFetched={mockTasks} labelsFetched={mockLabels} />);

    const editButtons = screen.getAllByText('Edit');
    await user.click(editButtons[0]);

    expect(screen.getByText('Edit Task')).toBeInTheDocument();
  });

  it('adds a new task with a new label', async () => {
    const user = userEvent.setup();
    (taskService.addColor as jest.Mock).mockResolvedValue('blue-500');

    render(<TasksContainer tasksFetched={mockTasks} labelsFetched={mockLabels} />);

    const addButton = screen.getByText('Add Task');
    await user.click(addButton);

    const titleInput = screen.getByPlaceholderText('Please enter a title');
    const descriptionInput = screen.getByPlaceholderText('Please enter a description');

    await user.type(titleInput, 'New Task');
    await user.type(descriptionInput, 'New Description');

    const submitButton = screen.getByRole('button', { name: /submit/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({
          title: 'Task created',
          description: 'Your new task has been successfully created',
        })
      );
    });
    expect(screen.getByText('New Task')).toBeInTheDocument();
  });
});
