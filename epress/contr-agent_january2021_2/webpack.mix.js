const mix = require('laravel-mix');
const id = 521;
const alias = 'contr-agent_2Fjanuary2021_2';

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



