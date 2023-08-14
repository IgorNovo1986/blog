import { BuildOption } from "./types/config";
import type { Configuration as DevServerConfigurations } from "webpack-dev-server";

export function buildDevServer(options: BuildOption): DevServerConfigurations {
    return {
        port: options.port,
        open: true
    }
}