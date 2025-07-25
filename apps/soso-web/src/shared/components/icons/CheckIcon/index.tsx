import { IconProps } from '@/shared/types/shareType'

export default function CheckIcon({ width, height, fill }: IconProps) {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1200_5674)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5855 13.3309L15.5355 8.38095C15.7232 8.19331 15.9777 8.08789 16.243 8.08789C16.5084 8.08789 16.7629 8.19331 16.9505 8.38095C17.1382 8.56859 17.2436 8.82308 17.2436 9.08845C17.2436 9.35381 17.1382 9.60831 16.9505 9.79595L11.3645 15.3819C11.2624 15.4841 11.1411 15.5652 11.0076 15.6205C10.8741 15.6758 10.731 15.7043 10.5865 15.7043C10.442 15.7043 10.2989 15.6758 10.1654 15.6205C10.032 15.5652 9.91067 15.4841 9.80851 15.3819L7.05052 12.6239C6.86301 12.4363 6.75772 12.1819 6.75781 11.9166C6.75791 11.6513 6.86337 11.397 7.05101 11.2094C7.23866 11.0219 7.4931 10.9167 7.75837 10.9167C7.88972 10.9168 8.01977 10.9427 8.1411 10.993C8.26244 11.0433 8.37267 11.117 8.46552 11.2099L10.5855 13.3309Z"
          fill={fill || '#FF7F50'}
        />
      </g>
      <defs>
        <clipPath id="clip0_1200_5674">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
