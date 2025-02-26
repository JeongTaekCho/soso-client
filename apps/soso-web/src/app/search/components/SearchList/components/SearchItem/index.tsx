import DeleteIcon from '@/shared/components/icons/DeleteIcon';
import Flex from '@/shared/components/layout/Flex';

interface SearchItemProps {
  label: string;
  onClose: () => void;
}

export default function SearchItem({ label, onClose }: SearchItemProps) {
  return (
    <Flex align="center" gap={4} className="rounded-full border border-gray-100 px-10 py-6">
      <span className="text-gray-600 font-body2_m">{label}</span>
      <button onClick={onClose}>
        <DeleteIcon />
      </button>
    </Flex>
  );
}
