'use client';

import { useGetShopDetailQuery } from '@/app/shop/hooks/useGetShopDetailQuery';
import Flex from '@/shared/components/layout/Flex';
import MessageBox from '@/shared/components/layout/Review/components/MessageBox';
import ReviewWrite from '@/shared/components/layout/Review/components/ReviewWrite';
import { useDeleteReviewMutation } from '@/shared/components/layout/Review/hooks/useDeleteReviewMutation';
import ProfileImage from '@/shared/components/ui/ProfileImage';
import { useDialog } from '@/shared/context/DialogContext';
import { useToast } from '@/shared/context/ToastContext';
import { ReviewType } from '@/shared/types/shopType';
import { formatStringDate } from '@/shared/utils/formatStringDate';
import { getSafeImageUrl } from '@/shared/utils/getSafeImageUrl';
import Image from 'next/image';
import { useParams } from 'next/navigation';
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
  const { openToast } = useToast();
  const { id } = useParams();

  const { mutate: deleteReviewMutate } = useDeleteReviewMutation();
  const { data: detailData, refetch: detailRefetch } = useGetShopDetailQuery(String(id));

  const handleToggleWriteModal = () => {
    setIsWriteModal((prev) => !prev);
  };

  const handleReviewDelete = () => {
    if (!detailData?.userReviews[0].id) return;
    deleteReviewMutate(String(detailData?.userReviews[0].id), {
      onSuccess: () => {
        closeDialog();
        detailRefetch();
        openToast({
          message: '리뷰가 삭제 되었습니다.',
        });
      },
    });
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
        <MessageBox isMe={isMe} isWrite={isWrite}>
          <Flex direction="col" gap={16}>
            <pre className="whitespace-pre-wrap break-all font-['Pretendard'] text-gray-600 font-body2_m">
              {data?.content || ''}
            </pre>
            {data && data?.images.length > 0 && (
              <Flex align="center" gap={8}>
                {data?.images.map((image) => (
                  <div className="relative h-72 w-72" key={`image-${image.id}`}>
                    <Image
                      fill
                      src={getSafeImageUrl(image.url) || ''}
                      alt="리뷰 이미지"
                      className="rounded-12 object-cover"
                    />
                  </div>
                ))}
              </Flex>
            )}
          </Flex>
        </MessageBox>
      )}
    </Flex>
  );
}
