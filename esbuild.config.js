const esbuild = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');

const outDir = './checkout-ui-custom';
const src = './src/App';
const entryPoints = {
    "checkout-confirmation-custom.js": `${src}/checkout-confirmation-custom.js`,
    "checkout-confirmation-custom.css": `${src}/checkout-confirmation-custom.scss`,
    "checkout-instore-custom.js": `${src}/checkout-instore-custom.js`,
    "checkout-instore-custom.css": `${src}/checkout-instore-custom.scss`,
    "checkout6-custom.js": `${src}/checkout6-custom.js`,
    "checkout6-custom.css": `${src}/checkout6-custom.scss`,
};

const buildOptions = {
    entryPoints: Object.values(entryPoints),
    bundle: true,
    minify: true,
    sourcemap: false,
    outdir: outDir,
    loader: { '.js': 'jsx', '.scss': 'css' },
    plugins: [
        sassPlugin(),
    ],
    define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    },
};

esbuild.build(buildOptions).catch(() => process.exit(1));


/* 

const esbuild = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');

const outDir = './checkout-ui-custom';
const src = './src/App';
const entryPoints = {
    "checkout-confirmation-custom.js": `${src}/checkout-confirmation-custom.js`,
    "checkout-confirmation-custom.css": `${src}/checkout-confirmation-custom.scss`,
    "checkout-instore-custom.js": `${src}/checkout-instore-custom.js`,
    "checkout-instore-custom.css": `${src}/checkout-instore-custom.scss`,
    "checkout6-custom.js": `${src}/checkout6-custom.js`,
    "checkout6-custom.css": `${src}/checkout6-custom.scss`,
};

const buildOptions = {
    entryPoints: Object.values(entryPoints),
    bundle: true,
    minify: true,
    sourcemap: false,
    outdir: outDir,
    loader: { '.js': 'jsx', '.scss': 'css' },
    plugins: [
        sassPlugin(),
    ],
    define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    },
};

async function build() {
    const context = await esbuild.context(buildOptions);
    if (process.argv.includes('--watch')) {
        context.watch().then(() => {
            console.log('watching...');
        }).catch(() => process.exit(1));
    } else {
        context.rebuild().catch(() => process.exit(1));
    }
}

build().catch(() => process.exit(1));

*/
