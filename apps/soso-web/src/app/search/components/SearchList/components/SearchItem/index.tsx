import DeleteIcon from '@/shared/components/icons/DeleteIcon';
import Flex from '@/shared/components/layout/Flex';

interface SearchItemProps {
  label: string;
  onClick: () => void;
}

export default function SearchItem({ label, onClick }: SearchItemProps) {
  return (
    <Flex align="center" gap={4} className="rounded-full border border-gray-100 px-10 py-6">
      <span className="text-gray-600 font-body2_m">{label}</span>
      <button onClick={onClick}>
        <DeleteIcon />
      </button>
    </Flex>
  );
}
