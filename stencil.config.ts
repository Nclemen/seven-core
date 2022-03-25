import { Config } from '@stencil/core';
import {postcss} from "@stencil/postcss";
import autoprefixer from 'autoprefixer';
import tailwindcss from "tailwindcss";
import cssnano from "cssnano";
import purgecss from "@fullhuman/postcss-purgecss";
import replace from "postcss-replace";


//purge function to keep only the classes used in EACH component
const purge = purgecss({
  content: ["./src/**/**/*.tsx", "./src/index.html"],
  safelist: [':host'],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});
export const config: Config = {
  namespace: 'seven-core',
  globalStyle: './src/global/seven-core.css',
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
      type: 'docs-custom',
      generator: (docs: JsonDocs) => {
        // Custom logic goes here
      }
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'docs-readme',
      dir: '/Users/narisonclemencia/projects/seven-core-docs/docs',
      strict: true
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    postcss({
      plugins: [
        tailwindcss("./tailwind.config.js"),
        autoprefixer(),
        replace({ pattern: 'html', data: { replaceAll: ':host' } }),
        ...(!process.argv.includes("--dev")
          ? [ purge, cssnano() ]
          : [])
      ]
    }),
  ],
};
