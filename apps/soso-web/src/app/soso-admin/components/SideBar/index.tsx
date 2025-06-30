'use client'

import Menu from '@/app/soso-admin/components/SideBar/components/Menu'
import { usePathname } from 'next/navigation'

export default function SideBar() {
  const pathname = usePathname()

  return (
    <aside className="min-h-[calc(100vh-65px)] w-[220px] border-r border-gray-200 bg-white p-16">
      <ul className="flex flex-col gap-8">
        <Menu label="대시보드" link="/soso-admin" isActive={pathname === '/soso-admin'} />
        <Menu label="회원관리" link="/soso-admin/users" isActive={pathname.includes('/soso-admin/users')} />
      </ul>
    </aside>
  )
}
