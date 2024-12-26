import { render, screen } from '@testing-library/react';
import Title from '../Title';

describe('Title Component', () => {
  it('renders with default props', () => {
    render(<Title>Default Title</Title>);
    const titleElement = screen.getByText('Default Title');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Title size="big">Big Title</Title>);
    let titleElement = screen.getByText('Big Title');
    expect(titleElement).toHaveClass('text-4xl');

    rerender(<Title size="medium">Medium Title</Title>);
    titleElement = screen.getByText('Medium Title');
    expect(titleElement).toHaveClass('text-3xl');

    rerender(<Title size="small">Small Title</Title>);
    titleElement = screen.getByText('Small Title');
    expect(titleElement).toHaveClass('text-2xl');
  });

  it('renders with different colors', () => {
    const { rerender } = render(<Title color="primary">Primary Title</Title>);
    let titleElement = screen.getByText('Primary Title');
    expect(titleElement).toHaveClass('text-primary');

    rerender(<Title color="secondary">Secondary Title</Title>);
    titleElement = screen.getByText('Secondary Title');
    expect(titleElement).toHaveClass('text-secondary');

    rerender(<Title color="accent">Accent Title</Title>);
    titleElement = screen.getByText('Accent Title');
    expect(titleElement).toHaveClass('text-accent');

    rerender(<Title color="destructive">Destructive Title</Title>);
    titleElement = screen.getByText('Destructive Title');
    expect(titleElement).toHaveClass('text-destructive');
  });

  it('applies gradient and text styles', () => {
    render(<Title>Gradient Title</Title>);
    const titleElement = screen.getByText('Gradient Title');
    expect(titleElement).toHaveClass('bg-gradient-to-r');
    expect(titleElement).toHaveClass('bg-clip-text');
    expect(titleElement).toHaveClass('text-transparent');
  });
});
