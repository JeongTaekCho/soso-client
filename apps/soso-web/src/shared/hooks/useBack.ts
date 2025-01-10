import { useRouter } from 'next/navigation';

export default function useBack() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return { handleBack };
}
