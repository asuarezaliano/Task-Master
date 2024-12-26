import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from '../command';
import { DialogTitle, DialogDescription } from '../dialog';

const CommandWrapper = ({ children }: { children: React.ReactNode }) => (
  <Command>{children}</Command>
);

describe('Command Components', () => {
  describe('Command', () => {
    it('renders Command component with children', () => {
      render(
        <Command>
          <div data-testid="command-child">Command Content</div>
        </Command>
      );
      expect(screen.getByTestId('command-child')).toBeInTheDocument();
    });

    it('applies custom className to Command', () => {
      render(
        <Command className="custom-class">
          <CommandInput placeholder="Search..." />
        </Command>
      );
      const element = screen.getByRole('combobox');
      expect(element.closest('[cmdk-root]')).toHaveClass('custom-class');
    });
  });

  describe('CommandInput', () => {
    it('renders input with search icon', () => {
      render(
        <CommandWrapper>
          <CommandInput placeholder="Search..." />
        </CommandWrapper>
      );
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('handles input changes', () => {
      const handleChange = jest.fn();
      render(
        <CommandWrapper>
          <CommandInput value="" onValueChange={handleChange} />
        </CommandWrapper>
      );

      const input = screen.getByRole('combobox');
      fireEvent.change(input, { target: { value: 'test' } });

      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('CommandList', () => {
    it('renders CommandList with children', () => {
      render(
        <CommandWrapper>
          <CommandList>
            <div data-testid="list-child">List Content</div>
          </CommandList>
        </CommandWrapper>
      );
      expect(screen.getByTestId('list-child')).toBeInTheDocument();
    });
  });

  describe('CommandItem', () => {
    it('renders CommandItem with content', () => {
      render(
        <CommandWrapper>
          <CommandList>
            <CommandItem>Item Content</CommandItem>
          </CommandList>
        </CommandWrapper>
      );
      expect(screen.getByText('Item Content')).toBeInTheDocument();
    });

    it('applies selected state styles', () => {
      render(
        <CommandWrapper>
          <CommandList>
            <CommandItem data-selected={true}>Selected Item</CommandItem>
          </CommandList>
        </CommandWrapper>
      );
      const item = screen.getByText('Selected Item');
      expect(item.closest('[cmdk-item]')).toHaveAttribute('data-selected', 'true');
    });
  });

  describe('CommandEmpty', () => {
    it('renders empty state message', () => {
      render(
        <CommandWrapper>
          <CommandList>
            <CommandEmpty>No results found</CommandEmpty>
          </CommandList>
        </CommandWrapper>
      );
      expect(screen.getByText('No results found')).toBeInTheDocument();
    });
  });

  describe('CommandGroup', () => {
    it('renders group with heading', () => {
      render(
        <CommandWrapper>
          <CommandList>
            <CommandGroup heading="Test Group">
              <CommandItem>Item 1</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandWrapper>
      );
      expect(screen.getByText('Test Group')).toBeInTheDocument();
      expect(screen.getByText('Item 1')).toBeInTheDocument();
    });
  });

  describe('CommandShortcut', () => {
    it('renders shortcut text', () => {
      render(
        <CommandWrapper>
          <CommandList>
            <CommandItem>
              Test Item
              <CommandShortcut>⌘K</CommandShortcut>
            </CommandItem>
          </CommandList>
        </CommandWrapper>
      );
      expect(screen.getByText('⌘K')).toBeInTheDocument();
    });
  });

  describe('CommandSeparator', () => {
    it('renders separator', () => {
      render(
        <CommandWrapper>
          <CommandList>
            <CommandSeparator />
          </CommandList>
        </CommandWrapper>
      );
      expect(screen.getByRole('separator')).toBeInTheDocument();
    });
  });

  describe('CommandDialog', () => {
    it('renders dialog with command content', () => {
      render(
        <CommandDialog open>
          <DialogTitle>Search Commands</DialogTitle>
          <DialogDescription>Search for commands using the input below</DialogDescription>
          <Command>
            <CommandInput placeholder="Search..." />
          </Command>
        </CommandDialog>
      );
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });
  });
});
