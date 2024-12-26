import type { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from '../confirmModal';

const meta: Meta<typeof ConfirmModal> = {
  title: 'UI/ConfirmModal',
  component: ConfirmModal,
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'closed' },
    onConfirm: { action: 'confirmed' },
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Confirm action',
    description: 'Are you sure you want to perform this action?',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
  },
};

export const DeleteConfirmation: Story = {
  args: {
    isOpen: true,
    title: 'Delete item',
    description: 'Are you sure you want to delete this item? This action cannot be undone.',
    confirmText: 'Delete',
    cancelText: 'Cancel',
  },
};
