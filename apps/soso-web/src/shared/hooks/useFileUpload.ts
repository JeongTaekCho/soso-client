import { useDialog } from '@/shared/context/DialogContext';
import { useState } from 'react';

export const useFileUpload = (maxFiles: number = 10) => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const { openDialog } = useDialog();

  const addFiles = (newFiles: File[]) => {
    if (files.length + newFiles.length > maxFiles) {
      openDialog({
        type: 'alert',
        title: '이미지 업로드 오류',
        message: `파일 업로드는 최대 ${maxFiles}개까지 가능합니다!`,
      });
      return;
    }

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

  // ✅ 싱글 파일 업로드 (기존 파일을 덮어씀)
  const setSingleFile = (newFile: File) => {
    if (file) {
      URL.revokeObjectURL(preview!); // 기존 파일 미리보기 해제
    }
    setFile(newFile);
    setPreview(URL.createObjectURL(newFile));
  };

  // ✅ 싱글 파일 삭제
  const removeSingleFile = () => {
    if (file) {
      URL.revokeObjectURL(preview!);
    }
    setFile(null);
    setPreview(null);
  };

  return { file, preview, setSingleFile, removeSingleFile };
};
