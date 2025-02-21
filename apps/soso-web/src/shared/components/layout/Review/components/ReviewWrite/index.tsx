'use client';

import { useGetShopDetailQuery } from '@/app/shop/hooks/useGetShopDetailQuery';
import Button from '@/shared/components/button/Button';
import ModalCloseButton from '@/shared/components/button/MocalCloseButton';
import Textarea from '@/shared/components/inputs/Textarea';
import Flex from '@/shared/components/layout/Flex';
import InputContent from '@/shared/components/layout/InputContent';
import { usePostReviewMutation } from '@/shared/components/layout/Review/components/ReviewWrite/hooks/usePostReviewMutation';
import { ReviewRequestType } from '@/shared/components/layout/Review/components/ReviewWrite/types';
import BottomModal from '@/shared/components/modal/BottomModal';
import BottomModalTitle from '@/shared/components/text/BottomModalTitle';
import AddFileUi from '@/shared/components/ui/AddFileUi';
import { useFileUpload } from '@/shared/hooks/useFileUpload';
import { useParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

interface ReviewWriteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewWrite({ isOpen, onClose }: ReviewWriteProps) {
  const [content, setContent] = useState('');
  const [lengthError, setLengthError] = useState(false);

  const { files, previews, addFiles, removeFile } = useFileUpload(3);
  const { id } = useParams();

  const { mutate: postReviewMutate } = usePostReviewMutation();
  const { refetch: detailRefetch } = useGetShopDetailQuery(String(id));

  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    if (content.length > 100) {
      setLengthError(true);
    } else {
      setLengthError(false);
    }
  }, [content]);

  const handleSubmitReview = () => {
    const data: ReviewRequestType = {
      shopId: Number(id),
      content,
      files: files,
    };
    postReviewMutate(data, {
      onSuccess: () => {
        detailRefetch();
        onClose();
      },
    });
  };

  return (
    <BottomModal isOpen={isOpen} onClose={onClose}>
      <Flex direction="col" gap={18} className="w-full">
        <Flex justify="between" align="center" className="w-full">
          <BottomModalTitle title="후기 작성" />
          <ModalCloseButton onClick={onClose} />
        </Flex>
        <Flex direction="col" gap={38} className="w-full">
          <InputContent label="텍스트">
            <Textarea
              lengthError={lengthError}
              value={content}
              onChange={handleChangeContent}
              placeholder="리뷰를 남겨주세요!"
            />
          </InputContent>
          <InputContent label="사진">
            <Flex direction="col" gap={8}>
              <AddFileUi previewArr={previews} addFiles={addFiles} removeFile={removeFile} maxLength={3} />
              <p className="text-gray-400 font-body2_m">사진은 최대 3장까지 등록가능합니다.</p>
            </Flex>
          </InputContent>
        </Flex>
        <Button onClick={handleSubmitReview} disabled={!content.length} title="후기 작성" />
      </Flex>
    </BottomModal>
  );
}
