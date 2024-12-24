import { memo } from 'react';
import { TaskCard } from './TaskCard';

interface TaskListProps {
  title: string;
  tasks: Task[];
  handleEdit: (task: Task) => void;
  handleDelete: (task: Task) => void;
  labels: Record<string, Label>;
}

const TaskList = memo(function TaskList({
  title,
  tasks,
  handleEdit,
  handleDelete,
  labels,
}: TaskListProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">{title}</h2>
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            colorSchema={task?.label ? labels[task.label].color : ''}
          />
        ))}
      </div>
    </div>
  );
});

export default TaskList;
