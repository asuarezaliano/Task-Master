import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskForm from '../TaskForm';
import { Priorities } from '../taskSchema';

describe('TaskForm', () => {
  const mockOnSubmit = jest.fn();
  const mockLabels = ['Work', 'Personal', 'Shopping'];

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  it('renders all form fields', () => {
    render(<TaskForm onSubmit={mockOnSubmit} lables={mockLabels} />);

    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /priority/i })).toBeInTheDocument();
    expect(screen.getByText('Select a label')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup();
    render(<TaskForm onSubmit={mockOnSubmit} lables={mockLabels} />);

    await user.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(/el título es requerido/i)).toBeInTheDocument();
  });

  it('renders with initial task data', () => {
    const initialTask = {
      id: 1,
      title: 'Initial Task',
      description: 'Initial Description',
      priority: Priorities.LOW,
      label: 'Personal',
    };

    render(<TaskForm onSubmit={mockOnSubmit} lables={mockLabels} initialTask={initialTask} />);

    expect(screen.getByDisplayValue('Initial Task')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Initial Description')).toBeInTheDocument();
  });
});
