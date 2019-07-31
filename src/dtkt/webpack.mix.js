const mix = require('laravel-mix')
const id = 23
const alias = 'dtkt'
const files = [
    // 'images/2.jpg'
];
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
    .version()

files.forEach(file=>mix.copy(file,`../../${id}_${alias}/${file}`))


