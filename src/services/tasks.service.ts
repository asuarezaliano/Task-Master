import { mockTasks } from '@/mocks/tasks';
import { Task } from '@/types';

export const taskService = {
  getTasks: async (): Promise<Task[]> => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));

      return mockTasks;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw new Error('Error fetching tasks');
    }
  },
};
