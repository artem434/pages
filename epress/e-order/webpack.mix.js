const mix = require('laravel-mix'),
    id = 30,
    alias = 'order',
    files = []

mix.webpackConfig({})
    .setResourceRoot('../')
    .setPublicPath(`../../${id}_${alias}`)
    .options({
        extractVueStyles: true,
    })
    .sass('src/style.scss', 'vue/style.css')
    .js('src/vue.js', 'vue/component.js')
    .copy('index.twig', `../../${id}_${alias}/index.twig`)
    .copy(`images/*`, `../../${id}_${alias}/images`)
    .version()

files.forEach(file => mix.copy(file, `../../${id}_${alias}/${file}`))


