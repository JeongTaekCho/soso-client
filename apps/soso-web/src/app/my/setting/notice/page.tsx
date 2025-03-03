'use client';

import ToggleNotice from '@/app/my/setting/notice/components/ToggleNotice';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';

export default function NoticePage() {
  return (
    <div>
      <Header title="공지사항" type="back" />
      <Flex direction="col" className="w-full px-16">
        <ToggleNotice />
        <ToggleNotice />
        <ToggleNotice />
      </Flex>
    </div>
  );
}
