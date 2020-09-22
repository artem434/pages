const mix = require('laravel-mix');
const webPackConfig = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {appendTsSuffixTo: [/\.vue$/]},
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".vue", ".ts", ".tsx"]
    }
};

const page = 'action22092020';
const id = 435;

const proxy = `https://ua7eminar.local/${page}`;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .webpackConfig(webPackConfig)
    .setPublicPath(`../${id}_${page}`)
    .setResourceRoot('./')
    //.ts('src/apr2019/script.ts', '')
    .sass(`src/${page}/style.scss`, '')
    .options({
        autoprefixer: {
            options: {
                browsers: [
                    'last 6 versions',
                ]
            }
        }
    })
    .copy(`src/${page}/index.twig`, `../${id}_${page}`)
    .copy(`src/${page}/*.js`, `../${id}_${page}`)
    .copy(`src/${page}/images/*`, `../${id}_${page}/images`)
    .browserSync({
        open: false,
        notify: false,
        proxy: proxy,
        files: [`src/${page}/*`, 'styles']
    });

if (mix.inProduction()) {
    mix.version();
}

mix.disableNotifications();