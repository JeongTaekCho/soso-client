import LinkButton from '@/shared/components/button/LinkButton';
import LinkIcon from '@/shared/components/icons/LinkIcon';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';

export default function PolicyPage() {
  return (
    <div>
      <Header title="이용약관" type="back" />
      <Flex direction="col">
        <LinkButton title="개인정보 처리방침" link="/my/setting/policy/personal-information" icon={<LinkIcon />} />
        <LinkButton title="위치 기반 서비스 이용 약관" link="/my/setting/policy/location" icon={<LinkIcon />} />
      </Flex>
    </div>
  );
}
