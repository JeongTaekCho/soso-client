import clsx from 'clsx';
import Link from 'next/link';

interface MenuProps {
  label: string;
  isActive?: boolean;
  link: string;
}

export default function Menu({ label, link, isActive }: MenuProps) {
  return (
    <li>
      <Link
        href={link}
        className={clsx(
          'block rounded-8 p-8 hover:bg-orange-light',
          isActive ? 'bg-orange-light text-orange-normal font-body1_bold' : 'bg-white font-body1_m'
        )}
      >
        {label}
      </Link>
    </li>
  );
}
