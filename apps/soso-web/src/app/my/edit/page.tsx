'use client';

import Button from '@/shared/components/button/Button';
import Input from '@/shared/components/inputs/Input';
import ProfileUpload from '@/shared/components/inputs/ProfileUpload';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import ValidationText from '@/shared/components/text/ValidationText';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export default function ProfileEditPage() {
  const [isError, setIsError] = useState({
    lengthError: true,
    patternError: true,
  });

  const router = useRouter();

  const { register, handleSubmit, watch } = useForm({
    mode: 'onChange',
  });

  const nickname = watch('nickname');

  useEffect(() => {
    const lengthError = nickname?.length < 2 || nickname?.length > 10;
    const patternError = !/^[가-힣a-zA-Z0-9]+$/.test(nickname);

    setIsError((prevErrors) => ({
      ...prevErrors,
      lengthError,
      patternError,
    }));
  }, [nickname]);

  const handleClick: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    // router.push('/');
  };

  return (
    <div>
      <Header title="프로필 수정" type="back" />
      <Flex direction="col" align="center" gap={50} className="w-full px-16 py-20">
        <ProfileUpload />
        <form className="w-full" onSubmit={handleSubmit(handleClick)}>
          <Flex direction="col" gap={8} className="w-full">
            <Input placeholder="닉네임을 입력해 주세요." {...register('nickname')} defaultValue={'기존닉네임'} />
            <Flex direction="col" gap={2}>
              <ValidationText text="2자 이상 10자 이하로 입력해 주세요." isError={isError.lengthError} />
              <ValidationText text="한글,영문, 숫자만 가능합니다." isError={isError.patternError} />
            </Flex>
          </Flex>
          <div className="bottom-fixed-button">
            <Button
              type="submit"
              title="변경 완료"
              disabled={isError.lengthError || isError.patternError || !nickname}
            />
          </div>
        </form>
      </Flex>
    </div>
  );
}
