export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.target as HTMLImageElement;
  target.src = '/images/default_item.svg';
};
