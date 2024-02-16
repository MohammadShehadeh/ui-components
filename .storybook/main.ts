import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: {
      name: "@storybook/builder-vite", // 👈 The builder enabled here.
      // Override the default configuration
      options: {
        viteConfigPath: "./vite.config.ts",
      },
    },
  },
  typescript: {
    reactDocgen: "react-docgen", // 👈 react-docgen configured here.
  },
  async viteFinal(config, { configType }) {
    // Merge custom configuration into the default config
    if (configType === "DEVELOPMENT") {
      // Your development configuration goes here
    }

    if (configType === "PRODUCTION") {
      // Your production configuration goes here.
    }

    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
    });
  },
};
export default config;
