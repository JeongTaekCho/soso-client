import clsx from 'clsx';
import { ChangeEvent } from 'react';

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  size?: number;
  label: string;
}

const YoilCheckbox = ({ id, checked, onChange, size = 40, label }: CheckboxProps) => {
  return (
    <div className="flex items-center gap-2">
      <input id={id} type="checkbox" className="hidden" checked={checked} onChange={onChange} />

      <label
        htmlFor={id}
        className={clsx(
          'flex cursor-pointer items-center justify-center rounded-full border transition-all duration-200',
          checked ? 'border-main bg-orange-light' : 'border-gray-100 bg-white'
        )}
        style={{ width: size, height: size }}
      >
        <span className={clsx(checked ? 'text-main' : 'text-gray-400')}>{label}</span>
      </label>
    </div>
  );
};

export default YoilCheckbox;
