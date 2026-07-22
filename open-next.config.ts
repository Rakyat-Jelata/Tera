import type { OpenNextConfig } from "@opennextjs/cloudflare";

const config: OpenNextConfig = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      incrementalCache: "dummy",
    },
  },
  dangerous: {
    disableSupportedVersionCheck: true,
  },
};

export default config;
