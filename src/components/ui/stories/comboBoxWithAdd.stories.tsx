import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ComboboxWithAdd from '../comboBoxWithAdd';

const meta: Meta<typeof ComboboxWithAdd> = {
  title: 'UI/ComboboxWithAdd',
  component: ComboboxWithAdd,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ComboboxWithAdd>;

const ComboboxWithAddWrapper = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState(['Option 1', 'Option 2', 'Option 3']);

  return (
    <ComboboxWithAdd
      options={options}
      value={value}
      onChange={setValue}
      onAddNew={newValue => {
        setOptions([...options, newValue]);
        setValue(newValue);
      }}
      placeholder="Select an option..."
      searchPlaceholder="Search option..."
    />
  );
};

export const Default: Story = {
  render: () => <ComboboxWithAddWrapper />,
};

export const Empty: Story = {
  render: () => (
    <ComboboxWithAdd
      options={[]}
      value=""
      onChange={() => {}}
      onAddNew={() => {}}
      placeholder="No options"
      searchPlaceholder="Add new option..."
    />
  ),
};

export const WithPreselectedValue: Story = {
  render: () => (
    <ComboboxWithAdd
      options={['Option 1', 'Option 2', 'Option 3']}
      value="Option 2"
      onChange={() => {}}
      onAddNew={() => {}}
    />
  ),
};
