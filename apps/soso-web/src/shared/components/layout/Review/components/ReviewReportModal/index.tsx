import ReportRadio from '@/app/shop/components/ShopTopInfo/components/ReportModal/components/ReportRadio';
import Button from '@/shared/components/button/Button';
import ModalCloseButton from '@/shared/components/button/MocalCloseButton';
import Textarea from '@/shared/components/inputs/Textarea';
import Flex from '@/shared/components/layout/Flex';
import { REVIEW_REPORT_LIST } from '@/shared/components/layout/Review/components/ReviewReportModal/constants/ReviewReportList';
import BottomModal from '@/shared/components/modal/BottomModal';
import useInput from '@/shared/hooks/useInput';
import { useState } from 'react';

interface ReviewReportModalProps {
  reviewId?: number;
  isReportModal: boolean;
  handleToggleReportModal: () => void;
}

export default function ReviewReportModal({
  reviewId,
  isReportModal,
  handleToggleReportModal,
}: ReviewReportModalProps) {
  const [selectedId, setSelectedId] = useState<string>('');
  const { value: etcValue, onChange: handleChangeEtcValue } = useInput('');

  const handleChange = (reportId: string) => {
    if (!reviewId) return;

    setSelectedId(reportId);
  };

  const handleSubmitReviewReport = () => {
    const data = {
      reviewId: Number(reviewId),
      report: Number(selectedId),
    };

    console.log(data);
  };

  return (
    <BottomModal isOpen={isReportModal} onClose={handleToggleReportModal}>
      <Flex direction="col" gap={18} className="relative w-full">
        <Flex justify="between" align="center" className="w-full">
          <h4 className="font-title3_bold">신고 사유</h4>
          <ModalCloseButton onClick={handleToggleReportModal} />
        </Flex>

        <Flex direction="col" gap={0} className="w-full">
          {REVIEW_REPORT_LIST.map((list) => (
            <ReportRadio
              key={list.id}
              text={list.text}
              id={list.id}
              name={list.name}
              isChecked={selectedId === list.id}
              onChange={() => handleChange(list.id)}
            />
          ))}
          {selectedId === '6' && (
            <Textarea
              value={etcValue}
              onChange={handleChangeEtcValue}
              height="100px"
              placeholder="신고 사유를 입력해 주세요."
            />
          )}
        </Flex>
        <Button title="신고하기" onClick={handleSubmitReviewReport} className="mt-16" />
      </Flex>
    </BottomModal>
  );
}
