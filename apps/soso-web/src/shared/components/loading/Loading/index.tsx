import Flex from '@/shared/components/layout/Flex';

interface LoadingProps {
  text?: string;
}

export default function Loading({ text }: LoadingProps) {
  return (
    <div className="fixed top-0 z-modal m-auto h-screen bg-black/25 layout-center">
      <Flex
        direction="col"
        align="center"
        className="fixed left-1/2 top-[40%] m-auto w-[50%] -translate-x-1/2 -translate-y-1/2"
      >
        <img src="/images/loading/loading.gif" />
        <p className="text-gray-500 font-body1_m">{text || ''}</p>
      </Flex>
    </div>
  );
}
