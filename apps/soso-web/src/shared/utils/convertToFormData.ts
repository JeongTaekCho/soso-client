export const convertToFormData = (data: Record<string, any>): FormData => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (key === 'files' && Array.isArray(value)) {
      // ✅ 배열인 경우, 파일을 개별적으로 추가
      value.forEach((file) => {
        formData.append('files', file); // 🔥 배열을 `files` 키에 하나씩 추가
      });
    } else if (value instanceof File || value instanceof Blob) {
      formData.append(key, value);
    } else if (typeof value === 'object' && value !== null) {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value);
    }
  });

  return formData;
};
