import clsx from 'clsx';
import { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string;
  height?: string;
  value: string;
  placeholder: string;
  className?: string;
  lengthError?: boolean;
}

export default function Textarea({
  width,
  height,
  placeholder,
  value,
  className,
  lengthError,
  ...props
}: TextareaProps) {
  return (
    <div className="relative w-full">
      <textarea
        style={{ width: width || '100%', height: height || '158px' }}
        placeholder={placeholder}
        className={clsx(
          'resize-none rounded-12 bg-gray-50 px-16 py-14 text-gray-600 font-body1_m placeholder:text-gray-400',
          className
        )}
        value={value}
        {...props}
      />
      {lengthError && (
        <p className="absolute bottom-14 right-16 text-gray-400 font-caption">
          (<span className={clsx(lengthError && 'text-etc-red')}>{value.length}</span>/100)
        </p>
      )}
    </div>
  );
}
