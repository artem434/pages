<template>
    <div id="epress-index">
        <div class="section">
            <div class="container  section__container-carousel">
                <carousel-main></carousel-main>
            </div>
        </div>
        <div class="section">
            <div class="container section__container">
                <h2 class="section__title section-title"><span>Видання</span></h2>
                <slider class="row justify-content-center" name="epressa_subs">
                    <template v-slot:placeholder>
                        <div class="col-sm-6 col-md-4 col-lg-3 product-placeholder">
                            <svg class="placeholder-img" width="230" height="320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#e4e4e4"></rect></svg>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 product-placeholder">
                            <svg class="placeholder-img" width="230" height="320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#e4e4e4"></rect></svg>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 product-placeholder">
                            <svg class="placeholder-img" width="230" height="320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#e4e4e4"></rect></svg>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-3 product-placeholder">
                            <svg class="placeholder-img" width="230" height="320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#e4e4e4"></rect></svg>
                        </div>
                    </template>
                    <template v-slot:slide="{slide}">
                        <div class="col-sm-6 col-md-4 col-lg-3 section__product">
                            <div class="product">
                                <smart-link :to="slide.link" class="product__link" :target="slide.target">
                                    <picture class="product__image">
                                        <source v-if="slide.webp" :srcset="slide.webp" type="image/webp">
                                        <img :src="slide.cover"  alt=""  width="" height="" class="img-fluid">
                                    </picture>
                                </smart-link>
                                <div class="product__info">
                                    <h3 class="product__title">{{slide.options.caption}}</h3>
                                    <span class="product__price">ціна від {{slide.options.min}} грн/міс</span>
                                </div>
                                <p class="product__btn">
                                    <smart-link :to="slide.link" class="btn page-btn page-btn--chevron-right" :target="slide.target"><span>Детальніше</span></smart-link>
                                </p>
                            </div>
                        </div>
                    </template>
                </slider>

                <!--<slider v-if="winOpen" name="epressa_win">-->
                    <!--<template v-slot:slide="{slide}" @click="winOpen=false">-->
                        <!--<picture class="product__image">-->
                            <!--<source v-if="slide.webp" :srcset="slide.webp" type="image/webp">-->
                            <!--<img :src="slide.cover"  class="" alt=""  width="230" height="320">-->
                        <!--</picture>-->
                    <!--</template>-->
                <!--</slider>-->
            </div>
        </div>
        <section class="section">
            <div class="container section__container">
                <h2 class="section__title section-title"><span>Наші переваги</span></h2>
                <div class="row justify-content-center">
                    <div class="col-sm-6 col-md-6 col-lg-3 section__advantages">
                        <div class="advantages">
                            <svg class="advantages__icon" width="54" height="50" viewBox="-19 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <linearGradient id="icon-gradient" x2="1" y2="1"><stop offset="0%" stop-color="#61d0f3"></stop><stop offset="100%" stop-color="#007094"></stop></linearGradient>
                                <linearGradient id="icon-gradient" x2="1" y2="1"><stop offset="0%" stop-color="#61d0f3"></stop><stop offset="100%" stop-color="#007094"></stop></linearGradient><path d="M352.86 121.29c-13.52-14.67-34.3-16.54-50.56-4.56L160.4 219.65c-4.99 2.9-8.87 5-12.76 5.87l-1.3.25a851.46 851.46 0 0 1 4.93-15.67c6.45-20.09 9.21-29.3 9.3-35.53.68-12.63.15-28.97-9.53-44.05l-.08-.12c-5.26-8.03-15.64-15.52-24.69-17.81-9.8-2.48-18.19-1.59-24.93 2.67-6.55 4.15-10.82 10.95-12.68 20.22-4.51 21.06-12.55 42.76-24.57 66.36-2.05 3.96-4.08 8.52-6.04 12.95-2.48 5.6-5.05 11.4-7.51 15.56l-.13.23c-9.47 16.67-11.87 32.4-12.9 44.2-.05.49-4.89 49.93-30.08 91.51-12.32 20.48-9.08 46.75 7.92 63.92l72.53 72.52.67.64a34.53 34.53 0 0 0 22.87 8.63c7 0 13.98-2.13 19.85-6.43l8.04-5.82c4.1-2.97 8.43-5.74 12.92-8.27 8.53-4.8 17.25-8.58 25.92-11.23 38.56-11.77 75.74-34.16 100.31-51.03 7.5-4.4 12.5-11.99 14.16-21.48l.11-.74c8.66-70.02-12.62-130.19-22.47-153.41l80.3-80.28c14.24-14.25 15.43-36.39 2.76-51.5zm0 0" fill="url(#icon-gradient)"></path><path d="M395.23 76.08c-33.5-33.5-88-33.5-121.5 0a15 15 0 1 0 21.22 21.22 55.97 55.97 0 0 1 79.05 0 55.97 55.97 0 0 1 0 79.06 15 15 0 1 0 21.23 21.22c33.5-33.5 33.5-88 0-121.5zm0 0" fill="url(#icon-gradient)"></path><path d="M433.77 40.73A138.15 138.15 0 0 0 335.42 0a138.17 138.17 0 0 0-98.34 40.73 15.01 15.01 0 0 0 21.22 21.23 108.36 108.36 0 0 1 77.12-31.94c29.13 0 56.52 11.34 77.12 31.94 42.53 42.52 42.53 111.71 0 154.24a15 15 0 1 0 21.23 21.22c54.22-54.22 54.22-142.46 0-196.69zm0 0" fill="url(#icon-gradient)"></path></svg>
                            <h4 class="advantages__title advantages__title--self">Вибір сервісу</h4>
                            <p class="advantages__text">Оберіть передплату на улюбленні бухгалтерські сервіси</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 section__advantages">
                        <div class="advantages">
                            <svg class="advantages__icon" width="54" height="50" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <linearGradient id="icon-gradient" x2="1" y2="1"><stop offset="0%" stop-color="#61d0f3"></stop><stop offset="100%" stop-color="#007094"></stop></linearGradient>
                                <path d="M272.7 280.34h183.12V512H272.7zM56.19 280.34h183.12V512H56.19zM398.76 94.43a63.52 63.52 0 0 0 7.77-30.52A63.98 63.98 0 0 0 342.63 0c-26.07 0-52.74 13.47-73.17 36.95A130.25 130.25 0 0 0 256 55.51c-3.9-6.5-8.4-12.75-13.46-18.56C222.11 13.47 195.44 0 169.38 0a63.98 63.98 0 0 0-63.91 63.91 63.51 63.51 0 0 0 7.77 30.52H26.2v152.52h213.1V94.43h33.4v152.52h213.1V94.43h-87.04zm-229.38 0a30.56 30.56 0 0 1-30.52-30.52 30.55 30.55 0 0 1 30.52-30.52c30.3 0 59.1 31 67.49 61.04h-67.5zm173.24 0h-67.48c8.38-30.05 37.19-61.04 67.48-61.04a30.56 30.56 0 0 1 30.52 30.52 30.56 30.56 0 0 1-30.52 30.52z" fill="url(#icon-gradient)"></path></svg>
                            <h4 class="advantages__title">Подарунки передплатникам</h4>
                            <p class="advantages__text">Отримайте корисні та приємні подарунки</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 section__advantages">
                        <div class="advantages">
                            <svg class="advantages__icon" width="54" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.834 33.834">
                                <linearGradient id="icon-gradient" x2="1" y2="1"><stop offset="0%" stop-color="#61d0f3"></stop><stop offset="100%" stop-color="#007094"></stop></linearGradient>
                                <path d="M32.25 29.33v4.5H1.58v-4.5c0-2.12 1.83-4.74 4.07-5.8l4.98-2.37 3.46 7.2 1.77-4.8c.35.07.7.16 1.06.16s.7-.09 1.06-.15l1.68 4.56 3.39-7.05 5.14 2.45c2.23 1.06 4.06 3.68 4.06 5.8zM6.11 13.56v-3.25c0-.55.28-1.03.72-1.31.58-5.06 4.88-9 10.09-9s9.51 3.94 10.1 9c.43.28.71.76.71 1.31v3.25a1.56 1.56 0 1 1-3.12 0v-.68c-.85 4.25-3.96 8.2-7.69 8.2-3.73 0-6.84-3.95-7.69-8.2v.68c0 .7-.46 1.29-1.1 1.49.62 2.11 2 3.94 3.91 5.14.35-.11.8-.1 1.23.13.69.36 1.04 1.06.78 1.56s-1.03.61-1.73.25c-.5-.26-.83-.7-.86-1.12a10.13 10.13 0 0 1-4.37-6 1.56 1.56 0 0 1-.98-1.45zm1.78-4.93c.05 0 .1 0 .14.03.11.04.2.12.25.21.34.15.6.41.77.74C9.51 5.29 12.85 3 16.92 3c4.06 0 7.4 2.29 7.86 6.6.23-.44.66-.76 1.19-.83A9.17 9.17 0 0 0 16.91 1a9.18 9.18 0 0 0-9.03 7.63z" fill="url(#icon-gradient)"></path></svg>
                            <h4 class="advantages__title">Персональний менеджер</h4>
                            <p class="advantages__text">Задавайте питання щодо передплати</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 section__advantages">
                        <div class="advantages">
                            <svg class="advantages__icon" width="54" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320.65 320.65">
                                <linearGradient id="icon-gradient" x2="1" y2="1"><stop offset="0%" stop-color="#61d0f3"></stop><stop offset="100%" stop-color="#007094"></stop></linearGradient>
                                <path d="M139.22 124.5c12.37-13.42 19.18-31.42 19.18-50.68C158.4 37.13 132.2 0 82.12 0 58.8 0 39.14 8 25.25 23.15 12.94 36.57 6.16 54.56 6.16 73.82c0 36.68 26.1 73.81 75.96 73.81 23.4 0 43.14-8 57.1-23.14zm-57.1-90.18c27.44 0 39.94 20.49 39.94 39.52 0 10.36-3.49 19.94-9.82 26.99-7.06 7.87-17.33 12.03-29.68 12.03-28.14 0-40.95-20.48-40.95-39.51 0-19.43 12.52-39.03 40.5-39.03zM264.27 28.48c-4.53.08-10.73 2.9-13.77 6.28L25.2 285.27c-3.04 3.38-.89 8.12 3.65 8.12h29.49c4.54 0 10.73-2.77 13.76-6.15L296.01 36.78c3.03-3.39 2.83-8.89-4.67-8.89l-27.07.59zM239.65 175.82c-22.86 0-42.15 7.86-55.79 22.72-12.07 13.16-18.72 30.8-18.72 49.7 0 35.98 25.6 72.4 74.5 72.4 22.96 0 42.33-7.84 56.03-22.7 12.13-13.15 18.82-30.8 18.82-49.7 0-35.99-25.71-72.42-74.84-72.42zm.44 111.6c-27.38 0-39.85-20.56-39.85-39.65 0-10.4 3.48-20.02 9.81-27.1 7.05-7.89 17.29-12.06 29.6-12.06 27.37 0 39.84 20.55 39.84 39.65 0 10.4-3.48 20.02-9.8 27.1-7.06 7.89-17.3 12.06-29.6 12.06z" fill="url(#icon-gradient)"></path></svg>
                            <h4 class="advantages__title">Програма лояльності</h4>
                            <p class="advantages__text">Унікальні знижки на бухгалтерські семінари, курси та вебінари</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container section__container">
                <h2 class="section__title section-title"><span>Наші дипломи <br> та нагороди</span></h2>
                <slider class="row justify-content-center" name="epressa_win">
                    <template v-slot:slide="{slide,index}">
                        <div class="col-sm-6 col-md-6 col-lg-3 section__award">
                            <div class="award">
                                <picture class="award__image" @click="winOpen=false">
                                    <source v-if="slide.webp" :srcset="slide.webp" type="image/webp">
                                    <img :src="slide.cover"  alt=""  width="230" height="320">
                                </picture>
                                <p class="award__text">{{slide.options.caption}}</p>
                            </div>
                        </div>
                    </template>
                </slider>
            </div>
        </section>
    </div>
</template>

<script>
import Page from '../../core/Page'
import CarouselMain from "./CarouselMain"


export default {
    components: {CarouselMain},
    mixins: [Page],
    data:()=>({
        winOpen: false
    }),
}
</script>
