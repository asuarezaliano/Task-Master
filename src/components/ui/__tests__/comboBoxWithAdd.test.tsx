import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ComboboxWithAdd from '../comboBoxWithAdd';

describe('ComboboxWithAdd', () => {
  const mockOptions = ['Opción 1', 'Opción 2', 'Opción 3'];
  const mockOnChange = jest.fn();
  const mockOnAddNew = jest.fn();

  const defaultProps = {
    options: mockOptions,
    value: '',
    onChange: mockOnChange,
    onAddNew: mockOnAddNew,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with default placeholder', () => {
    render(<ComboboxWithAdd {...defaultProps} />);
    expect(screen.getByText('Seleccionar...')).toBeInTheDocument();
  });

  it('renders with custom placeholder', () => {
    render(<ComboboxWithAdd {...defaultProps} placeholder="Custom placeholder" />);
    expect(screen.getByText('Custom placeholder')).toBeInTheDocument();
  });

  it('shows options when clicked', async () => {
    render(<ComboboxWithAdd {...defaultProps} />);

    await userEvent.click(screen.getByRole('combobox'));

    mockOptions.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('calls onChange when an option is selected', async () => {
    render(<ComboboxWithAdd {...defaultProps} />);

    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.click(screen.getByText('Opción 1'));

    expect(mockOnChange).toHaveBeenCalledWith('Opción 1');
  });

  it('calls onAddNew when adding a new option', async () => {
    render(<ComboboxWithAdd {...defaultProps} />);

    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.type(screen.getByPlaceholderText('Buscar...'), 'Nueva opción');
    await userEvent.click(screen.getByText('Agregar'));

    expect(mockOnAddNew).toHaveBeenCalledWith('Nueva opción');
  });

  it('shows check icon for selected option', async () => {
    render(<ComboboxWithAdd {...defaultProps} value="Opción 1" />);

    await userEvent.click(screen.getByRole('combobox'));

    const checkIcon = screen
      .getByRole('option', { name: /Opción 1/i })
      .querySelector('.lucide-check');
    expect(checkIcon).toHaveClass('opacity-100');
  });

  it('filters options based on input', async () => {
    render(<ComboboxWithAdd {...defaultProps} />);

    await userEvent.click(screen.getByRole('combobox'));
    await userEvent.type(screen.getByPlaceholderText('Buscar...'), 'Opción 1');

    expect(screen.getByText('Opción 1')).toBeInTheDocument();
    expect(screen.queryByText('Opción 2')).not.toBeInTheDocument();
  });
});
