const mix = require('laravel-mix')
const id = 133
const alias = 'contr-agent_2Fnovember2019_3'

mix.webpackConfig({
})
    .setResourceRoot('../')
    .setPublicPath(`../../${id}_${alias}`)
    .options({
        extractVueStyles: true,
    })
    .sass('src/style.scss', 'vue/style.css')
    .js('src/vue.js', 'vue/component.js')
    .copy('index.twig', `../../${id}_${alias}/index.twig`)
    .copy(`src/images/*`, `../../${id}_${alias}/images`)
    .version()



