import TasksContainer from '@/components/Home/TasksContainer';
import { taskService } from '@/services/tasks.service';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const tasks: Task[] = await taskService.getTasks();
  const labels: Record<string, Label> = await taskService.getLabels();

  return (
    <main>
      <TasksContainer tasksFetched={tasks} labelsFetched={labels} />
    </main>
  );
}
