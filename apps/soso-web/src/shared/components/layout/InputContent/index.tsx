import Flex from '@/shared/components/layout/Flex';
import { ReactNode } from 'react';

interface InputContentProps {
  label: string;
  children: ReactNode;
}

export default function InputContent({ label, children }: InputContentProps) {
  return (
    <Flex direction="col" gap={8} className="w-full">
      <h5 className="text-gray-500 font-body1_m">{label}</h5>
      {children}
    </Flex>
  );
}
