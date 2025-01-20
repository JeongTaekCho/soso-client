import React, { useState } from 'react';

interface TimePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  id: string;
}

const TimePicker = ({ value = '00:00', onChange, id }: TimePickerProps) => {
  const [time, setTime] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = e.target.value;
    setTime(newTime);
    if (onChange) {
      onChange(newTime);
    }
  };

  const handleLabelClick = () => {
    // label 클릭 시 input 클릭
    const inputElement = document.getElementById(id) as HTMLInputElement | null;
    inputElement?.click();
  };

  return (
    <label
      htmlFor={id}
      className="relative flex h-52 flex-1 cursor-pointer items-center justify-center rounded-12 bg-gray-50 text-sm text-black font-body1_m"
      onClick={handleLabelClick} // 라벨 클릭 시 input 클릭
    >
      <input
        id={id}
        type="time"
        step="60"
        value={time}
        onChange={handleChange}
        className="absolute inset-0 z-sticky h-full w-full cursor-pointer"
      />
      <span>{time}</span> {/* 선택된 시간을 보여줌 */}
    </label>
  );
};

export default TimePicker;
