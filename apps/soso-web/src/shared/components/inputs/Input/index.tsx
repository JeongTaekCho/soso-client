import clsx from 'clsx';

interface InputProps {
  width?: string;
  height?: string;
  placeholder?: string;
  className?: string;
}

export default function Input({ width, height, placeholder, className }: InputProps) {
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
      />
    </div>
  );
}
