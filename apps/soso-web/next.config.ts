import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'soso-project-dev.s3.ap-northeast-2.amazonaws.com',
      'soso-project.s3.ap-northeast-2.amazonaws.com',
    ],
  },
};

export default nextConfig;
