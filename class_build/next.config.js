/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // 폴더구조 맞추기 위해 설정
  generateBuildId: () => "codecamp-deploy-06", // 스토리지와 vm의 빌드 id를 통일시켜주기 위해
  exportPathMap: () => ({
    // ssg 배포 내용 ('어떤 파일을 정적 파일로 미리 만들어 놓을래?')
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
