import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Badge } from '../badge';

describe('Badge', () => {
  it('renders with the correct text content', () => {
    render(<Badge colorScheme="blue-500">Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies the correct color scheme classes', () => {
    const { container } = render(<Badge colorScheme="red">Red Badge</Badge>);
    const badge = container.firstChild as HTMLElement;

    expect(badge).toHaveClass('bg-red');
    expect(badge).toHaveClass('hover:bg-red/80');
  });

  it('merges custom className with default classes', () => {
    const { container } = render(
      <Badge colorScheme="green" className="custom-class">
        Custom Badge
      </Badge>
    );
    const badge = container.firstChild as HTMLElement;

    expect(badge).toHaveClass('custom-class');
    expect(badge).toHaveClass('text-primary-foreground');
    expect(badge).toHaveClass('inline-flex');
  });

  it('passes through additional props', () => {
    render(
      <Badge colorScheme="blue" data-testid="test-badge">
        Test Badge
      </Badge>
    );

    const badge = screen.getByTestId('test-badge');
    expect(badge).toHaveAttribute('data-testid', 'test-badge');
  });
});
