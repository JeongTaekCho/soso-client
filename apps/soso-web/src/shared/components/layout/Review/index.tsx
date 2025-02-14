'use client';

import Flex from '@/shared/components/layout/Flex';
import MessageBox from '@/shared/components/layout/Review/components/MessageBox';
import ReviewWrite from '@/shared/components/layout/Review/components/ReviewWrite';
import ProfileImage from '@/shared/components/ui/ProfileImage';
import { useDialog } from '@/shared/context/DialogContext';
import { ReviewType } from '@/shared/types/shopType';
import { formatStringDate } from '@/shared/utils/formatStringDate';
import { getSafeImageUrl } from '@/shared/utils/getSafeImageUrl';
import Image from 'next/image';
import { useState } from 'react';

interface ReviewProps {
  isMe?: boolean;
  isWrite?: boolean;
  isBorder?: boolean;
  data: ReviewType | undefined;
}
export default function Review({ isMe, isWrite = false, isBorder = true, data }: ReviewProps) {
  const [isWriteModal, setIsWriteModal] = useState(false);
  const { openDialog, closeDialog } = useDialog();

  const handleToggleWriteModal = () => {
    setIsWriteModal((prev) => !prev);
  };

  const handleReviewDelete = () => {
    closeDialog();
  };

  const handleOpenDeleteModal = () => {
    openDialog({
      title: '후기 삭제',
      message: (
        <>
          닉네임 님이 등록한 후기를
          <br /> 삭제하시겠습니까?
        </>
      ),
      type: 'confirm',
      onConfirm: handleReviewDelete,
    });
  };

  return (
    <Flex
      direction="col"
      gap={14}
      className={`w-full pb-20 last:border-none ${isBorder ? 'border-b border-gray-100' : 'border-none'}`}
    >
      <Flex justify="between" align="center" className="w-full">
        <Flex align="center" gap={12} className="flex-1">
          <ProfileImage imgUrl={(isMe ? '' : getSafeImageUrl(data?.user.photoUrl)) || '/images/default_profile.png'} />
          <Flex direction="col" className="flex-1">
            <p className="text-gray-800 font-body2_m">{data?.user.nickName || ''}</p>
            <p className="text-gray-400 font-caption">{formatStringDate(data?.createdAt)}</p>
          </Flex>
        </Flex>
        {isMe && isWrite && (
          <Flex align="center" gap={12}>
            <button className="h-30 w-41 rounded-[100px] border border-gray-100 text-gray-600 font-caption">
              수정
            </button>
            <button
              onClick={handleOpenDeleteModal}
              className="h-30 w-41 rounded-[100px] border border-gray-100 text-gray-600 font-caption"
            >
              삭제
            </button>
          </Flex>
        )}
      </Flex>
      {isMe && !isWrite ? (
        <>
          <MessageBox isMe={isMe} isWrite={isWrite}>
            <Flex direction="col" align="start" gap={16} className="w-full">
              <button
                onClick={handleToggleWriteModal}
                className="block w-full break-all text-left text-gray-400 font-body2_m"
              >
                후기를 작성해 주세요.
              </button>
            </Flex>
          </MessageBox>
          <ReviewWrite isOpen={isWriteModal} onClose={handleToggleWriteModal} />
        </>
      ) : (
        <MessageBox isMe={isMe}>
          <Flex direction="col" gap={16}>
            <p className="break-all text-gray-600 font-body2_m">{data?.content || ''}</p>
            {data && data?.images.length > 0 && (
              <Flex align="center" gap={8}>
                {data?.images.map((image) => (
                  <Image
                    key={image}
                    src={getSafeImageUrl(image, '/images/sample.png') || ''}
                    width={72}
                    height={72}
                    style={{ objectFit: 'cover' }}
                    alt="리뷰 이미지"
                    className="rounded-12"
                  />
                ))}
              </Flex>
            )}
          </Flex>
        </MessageBox>
      )}
    </Flex>
  );
}
