'use client';

import ReportRadio from '@/app/shop/components/ShopTopInfo/components/ReportModal/components/ReportRadio';
import { REPORT_LIST } from '@/app/shop/components/ShopTopInfo/components/ReportModal/constant/reportList';
import { usePatchReportMutation } from '@/app/shop/components/ShopTopInfo/components/ReportModal/hooks/usePatchReportMutation';
import ModalCloseButton from '@/shared/components/button/MocalCloseButton';
import Flex from '@/shared/components/layout/Flex';
import BottomModal from '@/shared/components/modal/BottomModal';
import { useDialog } from '@/shared/context/DialogContext';
import { useParams } from 'next/navigation';
import { useState } from 'react';

interface ReportModalProps {
  isReportModal: boolean;
  handleToggleReportModal: () => void;
}
export default function ReportModal({ isReportModal, handleToggleReportModal }: ReportModalProps) {
  const [selectedId, setSelectedId] = useState<string>('');
  const { id } = useParams();
  const { openDialog } = useDialog();

  const { mutate: patchReportMutate } = usePatchReportMutation();

  const handleChange = (reportId: string) => {
    setSelectedId(reportId);
    const data = {
      shopId: Number(id),
      status: Number(reportId),
    };

    patchReportMutate(data, {
      onSuccess: () => {
        handleToggleReportModal();
        openDialog({
          type: 'alert',
          title: '신고 완료',
          message: (
            // reportId === '1' ? (
            <span>
              소중한 정보 감사합니다.
              <br />
              확인 후 해당 장소는 삭제될 예정입니다.
            </span>
          ),
          // ) : (
          //   <span>
          //     소중한 정보 감사합니다.
          //     <br />
          //     확인 후 조치하도록 하겠습니다.
          //   </span>
          // ),
        });
        setSelectedId('');
      },
    });
  };

  return (
    <BottomModal isOpen={isReportModal} onClose={handleToggleReportModal}>
      <Flex direction="col" gap={18} className="relative w-full">
        <Flex justify="between" align="center" className="w-full">
          <h4 className="font-title3_bold">신고 사유</h4>
          <ModalCloseButton onClick={handleToggleReportModal} />
        </Flex>

        <Flex direction="col" gap={0} className="w-full">
          {REPORT_LIST.map((list) => (
            <ReportRadio
              key={list.id}
              text={list.text}
              id={list.id}
              name={list.name}
              isChecked={selectedId === list.id}
              onChange={() => handleChange(list.id)}
            />
          ))}
        </Flex>
      </Flex>
    </BottomModal>
  );
}
