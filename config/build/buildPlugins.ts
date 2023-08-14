import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOption} from "./types/config";

export function buildPlugins(option: BuildOption): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: option.paths.html
        }),
        new webpack.ProgressPlugin()
    ]
}