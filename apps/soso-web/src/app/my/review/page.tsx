import MyReview from '@/app/my/review/components/MyReview';
import Divider from '@/shared/components/divider/Divider';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import clsx from 'clsx';

export default function MyReviewPage() {
  return (
    <div>
      <Header title="나의 후기" type="back" />
      <Flex direction="col" className="w-full">
        <Flex justify="end" align="center" gap={8} className="w-full px-16">
          <button className={clsx('font-body2_m', 'text-gray-400')}>최신순</button>
          <Divider width="1px" height="11px" bgColor="#9EA4AA" />
          <button className={clsx('font-body2_m', 'text-main')}>오래된 순</button>
        </Flex>
        <Flex direction="col" className="w-full">
          <div className="group w-full border-b-[10px] border-gray-50 py-20 group-last:border-none">
            <MyReview />
          </div>
          <div className="group w-full border-b-[10px] border-gray-50 py-20 group-last:border-none">
            <MyReview />
          </div>
          <div className="group w-full border-b-[10px] border-gray-50 py-20 group-last:border-none">
            <MyReview />
          </div>
          <div className="group w-full border-b-[10px] border-gray-50 py-20 group-last:border-none">
            <MyReview />
          </div>
        </Flex>
      </Flex>
    </div>
  );
}
