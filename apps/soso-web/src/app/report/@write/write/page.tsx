import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';

export default function ReportWrite() {
  return (
    <div className="modal-page">
      <Header type="back" title="제보하기" />
      <Flex direction="col" gap={28} className="w-full">
        <Flex direction="col" gap={8}>
          <h3></h3>
        </Flex>
      </Flex>
    </div>
  );
}
