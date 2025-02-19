import UploadIcon from '@/shared/components/inputs/ProfileUpload/components/UploadIcon';
import ProfileImage from '@/shared/components/ui/ProfileImage';
import { useSingleFileUpload } from '@/shared/hooks/useFileUpload';
import { ChangeEvent } from 'react';

export default function ProfileUpload() {
  const { preview, file, setSingleFile } = useSingleFileUpload();

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setSingleFile(e.target.files[0]);
  };

  console.log(file);

  return (
    <div>
      <input id="profile-upload" type="file" className="hidden" onChange={handleChangeFile} />
      <div className="relative">
        <ProfileImage size={82} imgUrl={preview} />
        <label htmlFor="profile-upload" className="absolute bottom-0 right-0 cursor-pointer">
          <UploadIcon />
        </label>
      </div>
    </div>
  );
}
