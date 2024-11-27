import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental:{
        swcPlugins:[
            ['swc-plugin-coverage-instrument',{}],
            ['swc-plugin-canyon',{}]
        ]
    }
};

export default nextConfig;
