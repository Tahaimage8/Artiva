/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '**',
        search: '',
      },    
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
