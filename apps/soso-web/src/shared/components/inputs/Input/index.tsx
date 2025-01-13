import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height?: string;
  className?: string;
}

export default function Input({ width, height, placeholder, className, onChange }: InputProps) {
  return (
    <div
      style={{
        width: width || '100%',
        height: height || '52px',
      }}
    >
      <input
        placeholder={placeholder}
        className={clsx(
          'h-full w-full rounded-12 bg-gray-50 px-16 py-14 font-body1_m placeholder:text-gray-400 focus:outline-main',
          className
        )}
        onChange={onChange}
      />
    </div>
  );
}
