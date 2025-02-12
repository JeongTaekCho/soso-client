import ProductLayout from '@/app/my/components/ProductLayout';
import Flex from '@/shared/components/layout/Flex';

export default function ProductLists() {
  return (
    <Flex direction="col" gap={28} className="w-full">
      <ProductLayout
        data={[{ name: '테디베어' }, { name: '스펙' }, { name: '캐나다라...' }, { name: '스펙' }, { name: '스펙' }]}
        title="찜"
        placeholder="아직 찜한 소품샵이 없습니다."
      />
      <ProductLayout data={[]} title="나의 후기" placeholder="아직 등록된 후기가 없습니다." />
      <ProductLayout
        data={[{ name: '테디베어' }, { name: '스펙' }, { name: '캐나다라...' }, { name: '스펙' }, { name: '스펙' }]}
        title="내가 등록한 소품샵"
        placeholder="아직 등록된 소품샵이 없습니다."
      />
    </Flex>
  );
}
