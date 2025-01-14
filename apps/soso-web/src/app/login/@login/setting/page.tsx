'use client';

import Button from '@/shared/components/button/Button';
import Input from '@/shared/components/inputs/Input';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import ValidationText from '@/shared/components/text/ValidationText';
import { useRouter } from 'next/navigation';

export default function InfoSetting() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className="modal-page">
      <Header type="back" />
      <Flex direction="col" gap={20} className="w-full px-20 pt-56">
        <h2 className="text-[#191919] font-title2_bold">
          반가워요!
          <br />
          닉네임을 설정해 주세요.
        </h2>
        <Flex direction="col" gap={8} className="w-full">
          <Input placeholder="닉네임을 입력해 주세요." />
          <Flex direction="col" gap={2}>
            <ValidationText text="2자 이상 10자 이하" isError />
            <ValidationText text="한글,영문, 숫자 가능" />
          </Flex>
        </Flex>
      </Flex>
      <div className="bottom-button">
        <Button title="완료" onClick={handleClick} />
      </div>
    </div>
  );
}
