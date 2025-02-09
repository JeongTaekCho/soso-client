import Flex from '@/shared/components/layout/Flex';
import ProfileImage from '@/shared/components/ui/ProfileImage';
import Link from 'next/link';

export default function MyProfile() {
  return (
    <Flex direction="col" gap={20} className="w-full pb-16 pt-20">
      <Flex justify="between" align="center" className="w-full">
        <Flex align="center" gap={12}>
          <ProfileImage />
          <p className="text-black font-title3_bold">
            닉네임<span className="font-title3_m">님</span>
          </p>
        </Flex>
        <Link
          href="/my/setting/edit"
          className="flex h-34 w-52 items-center justify-center rounded-10 bg-gray-50 text-gray-400 font-body2_m"
        >
          수정
        </Link>
      </Flex>
      <Flex justify="between" align="center" className="w-full rounded-16 bg-[#F3EDE8] px-18 py-16">
        <p className="text-[#8E847C] font-body1_m">나만의 소품샵을 둘러보세요.</p>
      </Flex>
    </Flex>
  );
}
