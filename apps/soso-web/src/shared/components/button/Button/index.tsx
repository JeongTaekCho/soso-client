import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  title: string;
  disabled?: boolean;
  className?: string;
  onClick: () => void;
}

export default function Button({ width, height, title, disabled, onClick, className }: ButtonProps) {
  return (
    <button
      style={{
        width: width || '100%',
        height: height || '56px',
      }}
      className={clsx(
        'rounded-16 bg-main text-white font-title4_m',
        className,
        disabled ? 'opacity-30' : 'opacity-100'
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
