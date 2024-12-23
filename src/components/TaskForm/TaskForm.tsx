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
import { taskSchema, Priorities } from './taskSchema';

export default function TaskForm() {
  const form = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: '',
      description: '',
      priority: Priorities.MEDIUM,
      label: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  form.handleSubmit(values => {
    console.log({ values });
  });

  return (
    <div>
      <Form {...form}>
        <form>
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Please enter a title" {...field} />
                </FormControl>
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
                  <Input placeholder="Please enter a description" {...field} />
                </FormControl>
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
                  <Input placeholder="Please enter a description" {...field} />
                </FormControl>
              </FormItem>
            )}
          ></FormField>
        </form>
      </Form>
    </div>
  );
}
