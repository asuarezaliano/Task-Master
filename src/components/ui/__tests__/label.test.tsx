import { render, screen } from '@testing-library/react';
import { Label } from '../label';

describe('Label', () => {
  it('renders correctly with default props', () => {
    render(<Label>Test Label</Label>);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Label className="custom-class">Test Label</Label>);
    const label = screen.getByText('Test Label');
    expect(label).toHaveClass('custom-class');
  });

  it('forwards htmlFor attribute', () => {
    render(<Label htmlFor="test-input">Test Label</Label>);
    const label = screen.getByText('Test Label');
    expect(label).toHaveAttribute('for', 'test-input');
  });
});
