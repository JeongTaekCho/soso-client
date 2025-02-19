import LoginInfo from '@/app/my/setting/components/LoginInfo';
import LinkButton from '@/shared/components/button/LinkButton';
import Divider from '@/shared/components/divider/Divider';
import LinkIcon from '@/shared/components/icons/LinkIcon';
import Flex from '@/shared/components/layout/Flex';
import Header from '@/shared/components/layout/Header';

export default function SettingPage() {
  return (
    <div>
      <Header title="설정" type="back" />
      <LoginInfo />
      <Divider height="10px" />
      <Flex direction="col">
        <LinkButton title="공지사항" link="/my/setting/notice" icon={<LinkIcon />} />
        <LinkButton title="피드백 및 문의" link="/my/setting/feedback" icon={<LinkIcon />} />
        <Divider height="10px" />
        <LinkButton title="이용약관" link="/my/setting/feedback" icon={<LinkIcon />} />
        <LinkButton
          title="버전"
          link="/my/setting/feedback"
          icon={<span className="text-main font-body1_m">1.1</span>}
          className="cursor-default"
        />
        <Divider height="10px" />
        <LinkButton title="로그아웃" icon={<LinkIcon />} />
        <LinkButton title="탈퇴하기" icon={<LinkIcon />} />
      </Flex>
    </div>
  );
}
