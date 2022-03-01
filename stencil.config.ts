import { Config } from '@stencil/core';
import {postcss} from "@stencil/postcss";
import autoprefixer from 'autoprefixer';
import tailwindcss from "tailwindcss";

export const config: Config = {
  namespace: 'seven-core',
  globalStyle: 'src/global/seven-core.css',
  enableCache: false,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    postcss({
      plugins: [
        autoprefixer(),
        tailwindcss("./tailwind.config.js"),
      ]
    }),
  ],
};
