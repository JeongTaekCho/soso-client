interface RequestType {
  nickName?: string;
  file?: File;
}

export type PatchUserRequestType = RequestType | undefined;
