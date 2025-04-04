import HttpAdapter from "./adapters/http";
import CONFIGS from "./config";

HttpAdapter({
  config: {
    port: CONFIGS.port,
  },
});
