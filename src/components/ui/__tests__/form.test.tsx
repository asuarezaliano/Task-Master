import { render, screen } from '@testing-library/react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../form';
import { Input } from '../input';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';

const TestForm = ({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit: (data: Task) => void;
}) => {
  const form = useForm<Task>();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(data => onSubmit(data))}>{children}</form>
    </Form>
  );
};

describe('Form', () => {
  it('renders form elements correctly', () => {
    render(
      <TestForm onSubmit={() => {}}>
        <FormField
          name="test"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Test Input</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </TestForm>
    );

    expect(screen.getByLabelText('Test Input')).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const handleSubmit = jest.fn();
    const user = userEvent.setup();

    render(
      <TestForm onSubmit={handleSubmit}>
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <button type="submit">Submit</button>
      </TestForm>
    );

    await user.type(screen.getByLabelText('Username'), 'testuser');
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(handleSubmit).toHaveBeenCalledWith({ username: 'testuser' });
  });

  it('shows validation errors', async () => {
    const user = userEvent.setup();

    render(
      <TestForm onSubmit={() => {}}>
        <FormField
          name="name"
          rules={{ required: 'Name is required' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit">Submit</button>
      </TestForm>
    );

    await user.click(screen.getByRole('button', { name: 'Submit' }));

    expect(screen.getByText('Name is required')).toBeInTheDocument();
  });
});
