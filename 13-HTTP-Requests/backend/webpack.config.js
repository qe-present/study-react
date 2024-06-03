import path from 'path';
import { fileURLToPath } from 'url'
import CopyPlugin from 'copy-webpack-plugin';
const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)

export default {
    entry: './app.js',
    target:"node",
    output: {
        path: path.resolve(__dirnameNew, '../../13-build/backend'),
        filename: 'bundle.cjs',
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'data', to: 'data' },
                { from: 'images', to: 'images' },
            ],
        }),
    ],
    mode: 'production',
};
