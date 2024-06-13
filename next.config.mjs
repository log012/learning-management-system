import { config } from 'process';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack:(config)=>{
       config.cache=false;
       return config;
    }
};

export default nextConfig;
