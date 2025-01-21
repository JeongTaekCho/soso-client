import { useState } from 'react';

export const useTimePicker = () => {
  const [openTime, setOpenTime] = useState('오전 10:00');
  const [closeTime, setCloseTime] = useState('오후 07:00');
  const [isTimePicker, setIsTimePicker] = useState(false);
  const [timePickerType, setTimePickerType] = useState<'open' | 'close'>('open');

  const handleTimePicker = (value: string) => {
    if (timePickerType === 'open') {
      setOpenTime(value);
    } else {
      setCloseTime(value);
    }
    setIsTimePicker(false);
  };

  const handleOpenTimePicker = (type: 'open' | 'close') => {
    setTimePickerType(type);
    setIsTimePicker(true);
  };
  const handleCloseTimePicker = () => {
    setIsTimePicker(false);
  };

  return {
    openTime,
    closeTime,
    isTimePicker,
    timePickerType,
    handleOpenTimePicker,
    handleCloseTimePicker,
    handleTimePicker,
  };
};
