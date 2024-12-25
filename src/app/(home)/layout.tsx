import Title from '@/components/ui/Title';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="relative flex items-center justify-center mb-4">
        <div className="absolute left-0">
          <Image alt="Company Logo" loading="lazy" src="/images/logo.png" width={70} height={70} />
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
