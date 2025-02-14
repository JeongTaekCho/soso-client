const isValidUrl = (url: string | undefined) => {
  if (!url) return false;

  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

export const getSafeImageUrl = (imgUrl: string | undefined, defaultUrl = '/images/default_profile.png') => {
  return isValidUrl(imgUrl) ? imgUrl : defaultUrl;
};
