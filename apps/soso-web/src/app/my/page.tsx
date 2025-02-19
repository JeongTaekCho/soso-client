import MyProfile from '@/app/my/components/MyProfile';
import ProductLists from '@/app/my/components/ProductLists';
import Divider from '@/shared/components/divider/Divider';
import SettingIcon from '@/shared/components/icons/SettingIcon';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';
import Link from 'next/link';

export default function MyPage() {
  return (
    <div>
      <Header
        title="마이페이지"
        type="customBtn"
        customBtn={
          <Link href="/my/setting">
            <SettingIcon />
          </Link>
        }
      />
      <div className="w-full px-20">
        <MyProfile />
      </div>
      <Divider height="10px" />
      <Flex direction="col" gap={28} className="w-full px-16 pb-28 pt-20">
        <ProductLists />
      </Flex>
    </div>
  );
}
