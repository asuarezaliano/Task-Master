import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Task } from '@/types';
import { Button } from '../ui/button';
import { memo, useState } from 'react';
import { X } from 'lucide-react';
import ConfirmModal from '../ui/confirmModal';

interface TasCardProps {
  task: Task;
  handleEdit: (task: Task) => void;
  handleDelete: (task: Task) => void;
}

export const TaskCard = memo(function TaskCard({ task, handleEdit, handleDelete }: TasCardProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { title, description, label } = task;

  const handleDeleteTask = () => {
    setShowModal(false);
    handleDelete(task);
  };

  return (
    <Card className="w-full hover:shadow-lg transition-shadow relative">
      <Button className="absolute right-0 top-1" variant="close" onClick={() => setShowModal(true)}>
        <X className="h-4 w-4" />
      </Button>
      <CardHeader className="py-4">
        <div className="flex justify-between items-start">
          {label && (
            <Badge variant="outline" className="bg-chart-2 text-primary-foreground">
              {label}
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg font-semibold text-card-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex">
          <Button size="sm" className="w-full mt-4" onClick={() => handleEdit(task)}>
            Editar
          </Button>
        </div>
      </CardContent>
      <ConfirmModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDeleteTask}
        title="¿Estás seguro de que deseas eliminar este elemento?"
      />
    </Card>
  );
});
