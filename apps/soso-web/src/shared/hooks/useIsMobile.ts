import useWindowSize from '@/shared/hooks/useWindowSize';

const useIsMobile = (breakpoint: number = 768): boolean => {
  const { width } = useWindowSize();

  return width !== undefined && width < breakpoint;
};

export default useIsMobile;
