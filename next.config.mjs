/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1) In Next.js 14+, this tells Next.js to produce static files in "out/" during `next build`.
    output: 'export',

    // Performance optimizations
    swcMinify: true,
    compress: true,
    poweredByHeader: false,
    
    // Experimental features for better performance
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['framer-motion', 'lucide-react', '@radix-ui/react-icons'],
    },

    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'moh-frh.com'
            }
        ]
    },
    trailingSlash: true,
    reactStrictMode: true,

    // Webpack optimizations
    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            // Optimize bundle splitting
            config.optimization.splitChunks = {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            };
        }
        return config;
    },

    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL
    }
};

export default nextConfig;
