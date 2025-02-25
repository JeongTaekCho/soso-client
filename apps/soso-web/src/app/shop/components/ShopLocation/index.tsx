import IconButton from '@/shared/components/button/IconButton';
import PasteIcon from '@/shared/components/icons/PasteIcon';
import ContentBox from '@/shared/components/layout/ContentBox';
import Flex from '@/shared/components/layout/Flex';
import NaverMap from '@/shared/components/layout/NaverMap';
import ContentTitle from '@/shared/components/text/ContentTitle';
import { useToast } from '@/shared/context/ToastContext';

interface ShopLocationProps {
  location: string | undefined;
}

export default function ShopLocation({ location }: ShopLocationProps) {
  const { openToast } = useToast();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      openToast({
        message: '위치가 복사되었습니다.',
      });
    } catch (error) {
      openToast({
        message: '위치 복사 실패',
      });
    }
  };

  return (
    <ContentBox>
      <ContentTitle title="위치" />
      <div className="h-[185px] w-full overflow-hidden rounded-16 border border-gray-100">
        <NaverMap width="100%" height="100%" />
      </div>
      <Flex justify="between" align="center" className="w-full">
        <p className="text-gray-600 font-body2_m">{location}</p>
        <IconButton label="복사하기" icon={<PasteIcon />} onClick={() => copyToClipboard(String(location))} />
      </Flex>
    </ContentBox>
  );
}
