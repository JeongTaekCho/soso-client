import { useState } from 'react';

export const useTimePicker = () => {
  const INITIAL_OPEN_TIME = '오전 00:00';
  const INITIAL_CLOSE_TIME = '오후 00:00';

  const [openTime, setOpenTime] = useState(INITIAL_OPEN_TIME);
  const [closeTime, setCloseTime] = useState(INITIAL_CLOSE_TIME);
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

  const resetTimePicker = () => {
    setOpenTime(INITIAL_OPEN_TIME);
    setCloseTime(INITIAL_CLOSE_TIME);
    setIsTimePicker(false);
    setTimePickerType('open');
  };

  return {
    openTime,
    closeTime,
    isTimePicker,
    timePickerType,
    handleOpenTimePicker,
    handleCloseTimePicker,
    handleTimePicker,
    resetTimePicker,
  };
};
