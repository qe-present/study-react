import path from 'path';
import {fileURLToPath} from 'url'
import CopyPlugin from 'copy-webpack-plugin';

const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)

export default {
    entry: './app.js',
    target: "node",
    output: {
        path: path.resolve(__dirnameNew, '../../24-build/backend'),
        filename: 'main.cjs',
        clean: true,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: 'data', to: 'data'},
                {from: 'public', to: 'public'}
            ],
        }),
    ],
    mode: 'production',
};
