import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '../ui/button';
import { memo, useState } from 'react';
import { X } from 'lucide-react';
import ConfirmModal from '../ui/confirmModal';

interface TaskCardProps {
  task: Task;
  handleEdit: (task: Task) => void;
  handleDelete: (task: Task) => void;
  colorSchema: string;
}

export const TaskCard = memo(function TaskCard({
  task,
  handleEdit,
  handleDelete,
  colorSchema,
}: TaskCardProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { title, description, label } = task;

  const handleDeleteTask = () => {
    setShowModal(false);
    handleDelete(task);
  };

  return (
    <Card className="w-full hover:shadow-lg transition-shadow relative">
      <Button className="absolute right-0 top-1" variant="close" onClick={() => setShowModal(true)}>
        <X className="h-4 w-4" data-testid="delete-task-icon" />
      </Button>
      <CardHeader className="py-4">
        <div className="flex justify-between items-start">
          {label && <Badge colorScheme={colorSchema}>{label}</Badge>}
        </div>
        <CardTitle className="text-lg font-semibold text-card-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex">
          <Button size="sm" className="w-full mt-4" onClick={() => handleEdit(task)}>
            Edit
          </Button>
        </div>
      </CardContent>
      <ConfirmModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDeleteTask}
        title="Are you sure you want to delete this item?"
      />
    </Card>
  );
});
