import SearchList from '@/app/search/components/SearchList';
import Header from '@/shared/components/layout/Header';

export default function SearchPage() {
  return (
    <div>
      <Header type="search" />
      <SearchList />
    </div>
  );
}
