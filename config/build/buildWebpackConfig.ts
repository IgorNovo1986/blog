import { BuildOption } from "./types/config";
import webpack from "webpack";
import path from "path";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolver } from "./buildResolver";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOption): webpack.Configuration{

    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: options.paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolver(),
        devtool: options.isDev ? 'inline-source-map' : undefined ,
        devServer: options.isDev ? buildDevServer(options) : undefined

    }
}