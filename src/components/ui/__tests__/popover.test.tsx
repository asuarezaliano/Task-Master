import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import userEvent from '@testing-library/user-event';

describe('Popover Component', () => {
  it('renders trigger element correctly', () => {
    render(
      <Popover>
        <PopoverTrigger>Click me</PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
    );

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('shows content when trigger is clicked', async () => {
    render(
      <Popover>
        <PopoverTrigger>Click me</PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
    );

    const trigger = screen.getByText('Click me');
    fireEvent.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Popover content')).toBeInTheDocument();
    });
  });

  it('hides content when clicking outside', async () => {
    const user = userEvent.setup();

    render(
      <div>
        <Popover>
          <PopoverTrigger>Click me</PopoverTrigger>
          <PopoverContent>Popover content</PopoverContent>
        </Popover>
        <div data-testid="outside">Outside element</div>
      </div>
    );

    const trigger = screen.getByText('Click me');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Popover content')).toBeInTheDocument();
    });

    const outsideElement = screen.getByTestId('outside');
    await user.click(outsideElement);

    await waitFor(
      () => {
        expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
      },
      {
        timeout: 1000,
      }
    );
  });

  it('applies custom className to content', async () => {
    render(
      <Popover>
        <PopoverTrigger>Click me</PopoverTrigger>
        <PopoverContent className="custom-class">Popover content</PopoverContent>
      </Popover>
    );

    const trigger = screen.getByText('Click me');
    fireEvent.click(trigger);

    await waitFor(() => {
      const content = screen.getByRole('dialog');
      expect(content).toHaveClass('custom-class');
    });
  });
});
