import SearchIcon from '@/shared/components/icons/SearchIcon';
import Input from '@/shared/components/inputs/Input';

export default function HeaderSearch() {
  return (
    <div className="relative h-46 w-full">
      <div className="absolute left-16 top-1/2 -translate-y-1/2">
        <SearchIcon fill="#9EA4AA" />
      </div>
      <Input height="100%" placeholder="찾고있는 소품샵이 있나요?" className="pl-46" />
    </div>
  );
}
