'use client';

import ReportRadio from '@/app/shop/components/ShopTopInfo/components/ReportModal/components/ReportRadio';
import { REPORT_LIST } from '@/app/shop/components/ShopTopInfo/components/ReportModal/constant/reportList';
import XIcon from '@/shared/components/icons/XIcon';
import Flex from '@/shared/components/layout/Flex';
import BottomModal from '@/shared/components/modal/BottomModal';
import { useState } from 'react';

interface ReportModalProps {
  isReportModal: boolean;
  handleToggleReportModal: () => void;
}
export default function ReportModal({ isReportModal, handleToggleReportModal }: ReportModalProps) {
  const [selectedId, setSelectedId] = useState<string>('report01');

  const handleChange = (id: string) => {
    setSelectedId(id);
  };
  return (
    <BottomModal isOpen={isReportModal} onClose={handleToggleReportModal}>
      <Flex direction="col" gap={18} className="relative w-full px-16 pb-28 pt-18">
        <button onClick={handleToggleReportModal} className="absolute right-16 top-14">
          <XIcon />
        </button>
        <h4 className="font-title3_bold">신고 사유</h4>
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
