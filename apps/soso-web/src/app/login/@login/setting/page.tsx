'use client';

import React, { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/shared/components/button/Button';
import Input from '@/shared/components/inputs/Input';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import ValidationText from '@/shared/components/text/ValidationText';
import { useGetDuplicateNicknameQuery } from '@/shared/hooks/useGetDuplicateNicknameQuery';
import useDebounce from '@/shared/hooks/useDebounce';
import { usePostSaveNicknameMutation } from '@/app/login/@login/setting/hooks/usePostSaveNicknameMutation';

export default function InfoSetting() {
  const [isError, setIsError] = useState({
    lengthError: true,
    patternError: true,
  });

  const { register, handleSubmit, watch } = useForm({
    mode: 'onChange',
  });

  const nickname = watch('nickName');
  const debounceNickname = useDebounce(nickname, 200);

  const { data: isDuplicateNickname, isLoading } = useGetDuplicateNicknameQuery(debounceNickname);
  const { mutate: saveNicknameMutate } = usePostSaveNicknameMutation();

  useEffect(() => {
    const lengthError = nickname?.length < 2 || nickname?.length > 10;
    const patternError = !/^[가-힣a-zA-Z0-9]+$/.test(nickname);

    setIsError((prevErrors) => ({
      ...prevErrors,
      lengthError,
      patternError,
    }));
  }, [nickname]);

  const isDisabled = isError.lengthError || isError.patternError || !nickname || isDuplicateNickname || isLoading;

  const handleClick: SubmitHandler<FieldValues> = (data) => {
    saveNicknameMutate(data);
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
        <form className="w-full" onSubmit={handleSubmit(handleClick)}>
          <Flex direction="col" gap={8} className="w-full">
            <Input placeholder="닉네임을 입력해 주세요." {...register('nickName')} />
            <Flex direction="col" gap={2}>
              <ValidationText text="2자 이상 10자 이하로 입력해 주세요." isError={isError.lengthError} />
              <ValidationText text="한글,영문, 숫자만 가능합니다." isError={isError.patternError} />
              <ValidationText text="중복된 닉네임입니다." isError={isDuplicateNickname} />
            </Flex>
          </Flex>
          <div className="bottom-button">
            <Button type="submit" title="완료" disabled={isDisabled} />
          </div>
        </form>
      </Flex>
    </div>
  );
}
