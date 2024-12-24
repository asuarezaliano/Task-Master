import Title from '@/components/ui/Title';
import { Separator } from '@/components/ui/separator';
import { ClipboardList } from 'lucide-react';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="relative flex items-center justify-center mb-4">
        <div className="absolute left-0">
          <ClipboardList className="h-8 w-8 text-primary" />
        </div>
        <Title size="big" color="primary">
          TaskMaster
        </Title>
      </div>
      <Separator />
      {children}
    </div>
  );
}
