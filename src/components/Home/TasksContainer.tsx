'use client';
import { useCallback, useMemo, useState } from 'react';
import TaskList from './TaskList';
import Title from '../ui/Title';
import { Button } from '../ui/button';
import TaskForm from '../TaskForm/TaskForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { taskService } from '@/services/tasks.service';

interface TasksContainerProps {
  tasksFetched: Task[];
  labelsFetched: Record<string, Label>;
}

export default function TasksContainer({ tasksFetched, labelsFetched }: TasksContainerProps) {
  const [tasks, setTasks] = useState<Task[]>(tasksFetched);
  const [labels, setLabels] = useState<Record<string, Label>>(labelsFetched);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const priorityTasks = useMemo(() => {
    return {
      low: tasks.filter(task => task.priority === 'low'),
      medium: tasks.filter(task => task.priority === 'medium'),
      high: tasks.filter(task => task.priority === 'high'),
    };
  }, [tasks]);

  const handleOpenModal = (task?: Task) => {
    setEditingTask(task || null);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingTask(null);
  };

  const labelIsNew = (label: string) => !Object.values(labels).find(l => l.name === label);

  const handleAddOrEditTask = useCallback(
    async (task: Task) => {
      if (task.label && labelIsNew(task.label)) {
        const newcolor = await taskService.addColor();

        setLabels(prevState => ({
          ...prevState,
          [task.label as string]: { name: task.label as string, color: newcolor },
        }));
      }
      if (editingTask) {
        setTasks(prevstate => prevstate.map(t => (t.id === editingTask.id ? task : t)));
      } else {
        const newTask = { ...task, id: Math.random() };
        setTasks(prevstate => [...prevstate, newTask]);
      }

      handleCloseModal();
    },
    [editingTask]
  );

  const handleDeleteTask = useCallback((task: Task) => {
    setTasks(prevstate => prevstate.filter(t => t.id !== task.id));
  }, []);

  const getLabelsNames = useMemo(() => Object.keys(labels).map(l => labels[l].name), [labels]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <Title size="medium" color="primary">
          Task List
        </Title>
        <Button size="large" onClick={() => handleOpenModal()}>
          Add Task
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(priorityTasks).map(([priority, tasks]) => (
          <TaskList
            key={priority}
            title={`${priority.charAt(0).toUpperCase() + priority.slice(1)} Priority`}
            tasks={tasks}
            handleEdit={handleOpenModal}
            handleDelete={handleDeleteTask}
            labels={labels}
          />
        ))}
      </div>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingTask ? 'Edit Task' : 'Add New Task'}</DialogTitle>
          </DialogHeader>
          <TaskForm
            onSubmit={handleAddOrEditTask}
            initialTask={editingTask}
            lables={getLabelsNames}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
