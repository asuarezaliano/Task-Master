import { render, screen, fireEvent } from '@testing-library/react';
import ConfirmModal from '../confirmModal';

describe('ConfirmModal', () => {
  const mockOnClose = jest.fn();
  const mockOnConfirm = jest.fn();
  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
    onConfirm: mockOnConfirm,
    title: 'Test Title',
    description: 'Test Description',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    render(<ConfirmModal {...defaultProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Confirmar')).toBeInTheDocument();
    expect(screen.getByText('Cancelar')).toBeInTheDocument();
  });

  it('renders with custom button text', () => {
    render(
      <ConfirmModal {...defaultProps} confirmText="Custom Confirm" cancelText="Custom Cancel" />
    );

    expect(screen.getByText('Custom Confirm')).toBeInTheDocument();
    expect(screen.getByText('Custom Cancel')).toBeInTheDocument();
  });

  it('calls onClose when cancel button is clicked', () => {
    render(<ConfirmModal {...defaultProps} />);

    fireEvent.click(screen.getByText('Cancelar'));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('calls onConfirm when confirm button is clicked', () => {
    render(<ConfirmModal {...defaultProps} />);

    fireEvent.click(screen.getByText('Confirmar'));
    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });

  it('does not render when isOpen is false', () => {
    render(<ConfirmModal {...defaultProps} isOpen={false} />);

    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Description')).not.toBeInTheDocument();
  });
});
