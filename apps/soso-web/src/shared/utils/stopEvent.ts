export const handleStopEvent = <T extends HTMLElement>(e: React.MouseEvent<T>) => {
  e.stopPropagation();
};
