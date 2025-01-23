import ShopLocation from '@/app/shop/components/ShopLocation';
import ShopOperInfo from '@/app/shop/components/ShopOperInfo';
import ShopProducts from '@/app/shop/components/ShopProducts';
import ShopReview from '@/app/shop/components/ShopReview';
import ShopTopInfo from '@/app/shop/components/ShopTopInfo';
import Divider from '@/shared/components/divider/Divider';
import Header from '@/shared/components/layout/Header';

export default function ShopDetailPage() {
  return (
    <div>
      <Header type="back" />
      <ShopTopInfo />
      <Divider height="10px" bgColor="#F7F8F9" />
      <ShopLocation />
      <Divider height="10px" bgColor="#F7F8F9" />
      <ShopOperInfo />
      <Divider height="10px" bgColor="#F7F8F9" />
      <ShopProducts />
      <Divider height="10px" bgColor="#F7F8F9" />
      <ShopReview />
    </div>
  );
}
