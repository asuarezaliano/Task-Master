import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '../dialog';

describe('Dialog Component', () => {
  it('should render dialog when trigger is clicked', async () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>This is a test dialog description</DialogDescription>
          </DialogHeader>
          <div>Dialog Content</div>
          <DialogFooter>
            <DialogClose>Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

    expect(screen.queryByText('Test Dialog')).not.toBeInTheDocument();

    const trigger = screen.getByText('Open Dialog');
    await userEvent.click(trigger);

    expect(screen.getByText('Test Dialog')).toBeInTheDocument();
    expect(screen.getByText('This is a test dialog description')).toBeInTheDocument();
    expect(screen.getByText('Dialog Content')).toBeInTheDocument();
  });

  it('should close dialog when close button is clicked', async () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Test Dialog</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
          </DialogHeader>
          <DialogClose>Close Dialog</DialogClose>
        </DialogContent>
      </Dialog>
    );

    const openButton = screen.getByText('Open Dialog');
    await userEvent.click(openButton);

    expect(screen.getByText('Test Dialog')).toBeInTheDocument();

    const closeButton = screen.getByText('Close Dialog');
    await userEvent.click(closeButton);

    expect(screen.queryByText('Test Dialog')).not.toBeInTheDocument();
  });

  it('should render dialog with custom classes', async () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent className="custom-class">
          <DialogHeader className="header-class">
            <DialogTitle className="title-class">Custom Dialog</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
          </DialogHeader>
          <DialogFooter className="footer-class">
            <DialogClose>Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

    const trigger = screen.getByText('Open Dialog');
    await userEvent.click(trigger);

    const content = screen.getByRole('dialog');
    expect(content).toHaveClass('custom-class');
  });

  it('should close dialog when clicking overlay', async () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogTitle>Test Dialog</DialogTitle>
          <DialogDescription>Dialog Description</DialogDescription>
        </DialogContent>
      </Dialog>
    );

    const openButton = screen.getByText('Open Dialog');
    await userEvent.click(openButton);

    expect(screen.getByText('Test Dialog')).toBeInTheDocument();

    const overlay = document.querySelector('.fixed.inset-0.z-50.bg-black\\/80');
    expect(overlay).toBeInTheDocument();
    await userEvent.click(overlay as Element);

    expect(screen.queryByText('Test Dialog')).not.toBeInTheDocument();
  });
});
