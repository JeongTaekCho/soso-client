import SideBar from '@/app/soso-admin/components/SideBar'
import Flex from '@/shared/components/layout/Flex'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-orange-normal p-16">
        <div className="mx-auto w-full">
          <Flex justify="between" align="center" className="w-full">
            <div className="text-white font-title2_bold">관리자 페이지</div>
            <div className="text-white">
              <span className="font-body1_m">Admin</span>
            </div>
          </Flex>
        </div>
      </nav>
      <Flex className="min-h-[calc(100vh-64px)] w-full">
        <SideBar />
        <main className="flex-1 p-24">{children}</main>
      </Flex>
    </div>
  )
}
