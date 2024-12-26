import type { Meta, StoryObj } from '@storybook/react';
import Toaster from '../toaster';
import { useToast } from '@/hooks/use-toast';
import { Button } from '../button';

const meta: Meta<typeof Toaster> = {
  title: 'UI/Toaster',
  component: Toaster,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

function ToasterDemo() {
  const { toast } = useToast();

  return (
    <div>
      <Button
        onClick={() => {
          toast({
            title: 'Success',
            description: 'Your action was completed successfully.',
          });
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </div>
  );
}

export const Default: Story = {
  render: () => <ToasterDemo />,
};

export const ToasterConfirm: Story = {
  render: () => {
    const ToasterConfirm = () => {
      const { toast } = useToast();

      return (
        <div>
          <Button
            onClick={() => {
              toast({
                title: 'Action Required',
                description: 'Please confirm your action.',
              });
            }}
          >
            Show Toast with Action
          </Button>
          <Toaster />
        </div>
      );
    };

    return <ToasterConfirm />;
  },
};

export const Destructive: Story = {
  render: () => {
    const ToasterDestructive = () => {
      const { toast } = useToast();

      return (
        <div>
          <Button
            variant="destructive"
            onClick={() => {
              toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Something went wrong. Please try again.',
              });
            }}
          >
            Show Destructive Toast
          </Button>
          <Toaster />
        </div>
      );
    };

    return <ToasterDestructive />;
  },
};
