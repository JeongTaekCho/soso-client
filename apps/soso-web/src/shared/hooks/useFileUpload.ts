import { useState } from 'react';

export const useFileUpload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  // 파일 추가
  const addFiles = (newFiles: File[]) => {
    const previewUrls = newFiles.map((file) => URL.createObjectURL(file));

    setFiles((prev) => [...prev, ...newFiles]);
    setPreviews((prev) => [...prev, ...previewUrls]);
  };

  // 파일 삭제
  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));

    setPreviews((prev) => {
      URL.revokeObjectURL(prev[index]); // 메모리 해제
      return prev.filter((_, i) => i !== index);
    });
  };

  return { files, previews, addFiles, removeFile };
};

export const useSingleFileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // 파일 설정
  const setSingleFile = (newFile: File) => {
    if (file) {
      URL.revokeObjectURL(preview!); // 기존 파일 미리보기 해제
    }
    setFile(newFile);
    setPreview(URL.createObjectURL(newFile));
  };

  // 파일 삭제
  const removeSingleFile = () => {
    if (file) {
      URL.revokeObjectURL(preview!);
    }
    setFile(null);
    setPreview(null);
  };

  return { file, preview, setSingleFile, removeSingleFile };
};
