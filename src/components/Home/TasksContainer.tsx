'use client';
import { useCallback, useMemo, useState } from 'react';
import { Task } from '@/types';
import TaskList from './TaskList';
import Title from '../ui/Title';
import { Button } from '../ui/button';
import TaskForm from '../TaskForm/TaskForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface TasksContainerProps {
  tasksFetched: Task[];
}

export default function TasksContainer({ tasksFetched }: TasksContainerProps) {
  const [tasks, setTasks] = useState<Task[]>(tasksFetched);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const priorityTasks = useMemo(() => {
    return {
      low: tasks.filter(task => task.priority === 'low'),
      medium: tasks.filter(task => task.priority === 'medium'),
      high: tasks.filter(task => task.priority === 'high'),
    };
  }, [tasks]);

  const handleOpenModal = useCallback((task?: Task) => {
    setEditingTask(task || null);
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingTask(null);
  };

  const handleAddOrEditTask = useCallback(
    (task: Task) => {
      if (editingTask) {
        setTasks(prevstate => prevstate.map(t => (t.id === editingTask.id ? task : t)));
      } else {
        const newTask = { ...task, id: Math.random() };
        setTasks(prevstate => [...prevstate, newTask]);
      }
      handleCloseModal();
    },
    [tasks, handleCloseModal]
  );

  const handleDeleteTask = useCallback((task: Task) => {
    setTasks(prevstate => prevstate.filter(t => t.id !== task.id));
  }, []);

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
      <div className="grid grid-cols-3 gap-4">
        <TaskList
          title="Low Priority"
          tasks={priorityTasks.low}
          handleEdit={handleOpenModal}
          handleDelete={handleDeleteTask}
        />
        <TaskList
          title="Medium Priority"
          tasks={priorityTasks.medium}
          handleEdit={handleOpenModal}
          handleDelete={handleDeleteTask}
        />
        <TaskList
          title="High Priority"
          tasks={priorityTasks.high}
          handleEdit={handleOpenModal}
          handleDelete={handleDeleteTask}
        />
      </div>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingTask ? 'Edit Task' : 'Add New Task'}</DialogTitle>
          </DialogHeader>
          <TaskForm onSubmit={handleAddOrEditTask} initialTask={editingTask} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
