import { ButtonHTMLAttributes } from 'react';

interface AddButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
}

export default function AddButton({ width, height, ...props }: AddButtonProps) {
  return (
    <button
      style={{
        width: width || '72px',
        height: height || '72px',
      }}
      className="flex items-center justify-center rounded-12 bg-gray-50"
      {...props}
    >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 1V21" stroke="#C9CDD2" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M21 11L1 11" stroke="#C9CDD2" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    </button>
  );
}
