import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/router-component.ts',
    output: [
        {
            format: 'cjs',
            file: 'dist/router-component.common.js'
        },
        {
            format: 'esm',
            file: 'dist/router-component.js'
        }
    ],
    plugins: [resolve(), typescript()],
    watch: {
        include: 'src/**'
    }
};
