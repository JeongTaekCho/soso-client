'use client';

import Button from '@/shared/components/button/Button';
import Textarea from '@/shared/components/inputs/Textarea';
import Header from '@/shared/components/layout/Header';
import useInput from '@/shared/hooks/useInput';

export default function FeedbackPage() {
  const { value, onChange } = useInput('');

  return (
    <div>
      <Header title="피드백 및 문의" type="back" />
      <div className="w-full px-16">
        <Textarea
          value={value}
          onChange={onChange}
          placeholder="좋았던 점, 아쉬운 점, 궁금한 점 등 자유롭게 말씀해 주세요."
        />
      </div>
      <div className="fixed bottom-0 px-16 py-10 layout-center">
        <Button title="의견 보내기" />
      </div>
    </div>
  );
}
