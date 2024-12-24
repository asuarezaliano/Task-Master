'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { taskSchema, Priorities, mappedProperties } from './taskSchema';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ComboboxWithAdd from '../ui/comboBoxWithAdd';

interface TaskFormProps {
  onSubmit: (task: Task) => void;
  lables: string[];
  initialTask?: Task | null;
}

export default function TaskForm({ onSubmit, initialTask, lables }: TaskFormProps) {
  const form = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: initialTask || {
      title: '',
      description: '',
      priority: Priorities.MEDIUM,
      label: '',
    },
  });

  const handleOnSubmit = form.handleSubmit(values => {
    onSubmit(values);
  });

  const getPriorityItems = () =>
    Object.keys(mappedProperties).map(key => (
      <SelectItem key={key} value={key}>
        {mappedProperties[key as keyof typeof mappedProperties]}
      </SelectItem>
    ));

  return (
    <div>
      <Form {...form}>
        <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Please enter a title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            name="description"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Please enter a description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a priority" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>{getPriorityItems()}</SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="label"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Label</FormLabel>
                <FormControl>
                  <ComboboxWithAdd
                    options={lables}
                    value={field.value || ''}
                    onChange={field.onChange}
                    onAddNew={value => {
                      field.onChange(value);
                    }}
                    placeholder="Select a label"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
