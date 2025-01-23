import Flex from '@/shared/components/layout/Flex';
import MessageBox from '@/shared/components/layout/Review/components/MessageBox';
import Image from 'next/image';

interface ReviewProps {
  isMe?: boolean;
}
export default function Review({ isMe }: ReviewProps) {
  return (
    <Flex direction="col" gap={14} className="w-full border-b border-gray-100 pb-20 last:border-none">
      <Flex justify="between" align="center" className="w-full">
        <Flex align="center" gap={12} className="w-full">
          <Image
            src={'/images/jojo.jpg'}
            width={48}
            height={48}
            className="rounded-full border border-gray-100"
            alt="유저 프로필"
          />
          <Flex direction="col" className="w-full">
            <p className="text-gray-800 font-body2_m">쪼롱이</p>
            <p className="text-gray-400 font-caption">2024. 05. 05</p>
          </Flex>
        </Flex>
        {isMe && (
          <Flex align="center" gap={12}>
            <button className="h-30 w-41 rounded-[100px] border border-gray-100 text-gray-600 font-caption">
              수정
            </button>
            <button className="h-30 w-41 rounded-[100px] border border-gray-100 text-gray-600 font-caption">
              삭제
            </button>
          </Flex>
        )}
      </Flex>
      <MessageBox isMe={isMe}>
        <Flex direction="col" gap={16}>
          <p className="break-all text-gray-600 font-body2_m">리뷰 테스트 리뷰 테스트 리뷰 테스트</p>
          <Flex align="center" gap={8}>
            <Image
              src="/images/jojo.jpg"
              width={72}
              height={72}
              objectFit="cover"
              alt="리뷰 이미지"
              className="rounded-12"
            />
            <Image
              src="/images/jojo.jpg"
              width={72}
              height={72}
              objectFit="cover"
              alt="리뷰 이미지"
              className="rounded-12"
            />
            <Image
              src="/images/jojo.jpg"
              width={72}
              height={72}
              objectFit="cover"
              alt="리뷰 이미지"
              className="rounded-12"
            />
          </Flex>
        </Flex>
      </MessageBox>
    </Flex>
  );
}
