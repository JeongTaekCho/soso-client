export const convertToFormData = (data?: Record<string, any>) => {
  if (!data) return;

  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (key === 'files' && Array.isArray(value)) {
      value.forEach((file) => {
        formData.append(key, file);
      });
    } else if (key === 'file' && value instanceof File) {
      formData.append(key, value);
    } else if (value instanceof File || value instanceof Blob) {
      formData.append(key, value);
    } else if (key === 'deleteImages' && Array.isArray(value)) {
      value.forEach((id, index) => {
        formData.append(`${key}[${index}]`, id);
      });
    } else if (typeof value === 'object' && value !== null) {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value);
    }
  });

  return formData;
};
