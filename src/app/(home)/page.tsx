import TasksContainer from '@/components/Home/TasksContainer';
import { taskService } from '@/services/tasks.service';
import { Task } from '@/types';

export default async function Home() {
  const tasks: Task[] = await taskService.getTasks();

  return (
    <main>
      <TasksContainer tasksFetched={tasks} />
    </main>
  );
}
