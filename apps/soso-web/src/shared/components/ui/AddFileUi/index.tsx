import AddButton from '@/shared/components/button/AddButton';
import Flex from '@/shared/components/layout/Flex';
import WhiteXIcon from '@/shared/components/ui/AddFileUi/components/WhiteXIcon';
import Image from 'next/image';

interface AddFileUiProps {
  previewArr: string[];
  removeFile: (index: number) => void;
  addFiles: (newFiles: File[]) => void;
}

export default function AddFileUi({ previewArr, addFiles, removeFile }: AddFileUiProps) {
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    addFiles(Array.from(e.target.files));
  };

  return (
    <Flex gap={8}>
      <Flex gap={8}>
        {previewArr?.map((preview, index) => (
          <div key={index} className="relative h-72 w-72 overflow-hidden rounded-12">
            <Image fill style={{ objectFit: 'cover' }} src={preview || '/images/jojo.jpg'} alt="이미지 미리보기" />
            <button
              onClick={() => removeFile(index)}
              className="absolute right-4 top-4 flex h-20 w-20 items-center justify-center rounded-full bg-black/60"
            >
              <WhiteXIcon />
            </button>
          </div>
        ))}
      </Flex>
      <AddButton onChange={handleChangeFile} />
    </Flex>
  );
}
