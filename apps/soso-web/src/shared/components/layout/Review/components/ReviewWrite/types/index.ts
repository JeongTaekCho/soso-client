export interface ReviewRequestType {
  shopId: number;
  content: string;
  files: File[];
}

export interface PatchReviewRequestType {
  reviewId: number;
  content: string;
  deleteImages: number[];
  files: File[];
}
