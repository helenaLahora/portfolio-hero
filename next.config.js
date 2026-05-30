/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors * https://*.figma.com https://*.figma.site https://www.figma.com https://notion.so https://*.notion.so https://*.notion.site https://webflow.com https://*.webflow.io"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;