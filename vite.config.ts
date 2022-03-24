/*
 * @Author: hanjianguang
 * @Date: 2021-12-21 15:07:56
 * @LastEditors: hanjianguang
 * @Description: file content
 */
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
// import styleImport from "vite-plugin-style-import";
import strip from "@rollup/plugin-strip";
import eslintPlugin from "vite-plugin-eslint";
import { visualizer } from "rollup-plugin-visualizer";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import OptimizationPersist from "vite-plugin-optimize-persist";
import PkgConfig from "vite-plugin-package-config";
import StylelintPlugin from "vite-plugin-stylelint";

export default defineConfig(({ mode }) => {
  const plugins = [
    PkgConfig(),
    OptimizationPersist(),
    vue(),
    AutoImport({
      dts: "./src/auto-imports.d.ts",
      imports: ["vue", "vue-router"],
      eslintrc: {
        enabled: true, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Components({
      dts: "./src/components.d.ts",
      dirs: ["src/components/"],
      resolvers: [VantResolver()],
    }),
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: "vant",
    //       esModule: true,
    //       resolveStyle: (name) => `vant/es/${name}/style/index`,
    //     },
    //   ],
    // }),
    eslintPlugin({
      cache: false,
    }),
    StylelintPlugin(),
  ];
  if (loadEnv(mode, process.cwd()).VITE_NODE_ENV !== "development") {
    plugins.push(
      ...[
        strip({
          include: ["**/*.(js|ts|vue)"],
        }),
        legacy({
          targets: ["> 1%", "last 2 versions"],
          additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        }),
        visualizer(),
      ]
    );
  }
  return {
    plugins,
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    server: {
      proxy: {},
    },
  };
});
