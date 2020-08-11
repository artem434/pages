const mix = require('laravel-mix')
const id = 256
const alias = 'test'

mix.webpackConfig({
})
    .setResourceRoot('../')
    .setPublicPath(`../../${id}_${alias}`)
    .options({
        autoprefixer: {
            options: {
                browsers: [
                    'last 6 versions',
                ]
            }
        }
    })
    .sass('src/style.scss', 'style.css')
    .copy('src/script.ts', `../../${id}_${alias}/script.ts`)
    .copy('src/index.html', `../../${id}_${alias}/index.html`)
    .copy(`src/images/*`, `../../${id}_${alias}/images`)
    .version()



