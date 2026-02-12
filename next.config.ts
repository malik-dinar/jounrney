// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // 🔥 required for GitHub Pages
  images: {
    unoptimized: true // required because GitHub Pages has no image optimizer
  }
}

module.exports = nextConfig