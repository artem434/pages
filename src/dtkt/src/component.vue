<template>
    <div id="page-dtkt">
        <div class="landing">
            <div class="landing-section">
                <div class="container">
                    <picture v-if="cover" class="landing-cover">
                        <source v-if="cover.webp" :srcset="cover.webp" type="image/webp">
                        <img :src="cover.cover" class="img-fluid" alt="">
                    </picture>
                    <div v-else></div>
                </div>
            </div>
            <section class="landing-section">
                <div class="container">
                    <h1 class="landing-section__title landing-title"><span>Про видання</span></h1>
                    <div class="about">
                        <div class="row">
                            <div class="col-md-6 col-lg-8 about__text">
                                <p>«Дебет-Кредит» – бухгалтерський сервіс №1, який об'єднує бухгалтерів з усієї України. Щотижня він пропонує підбірку аналітичних статей, підготовлених висококваліфікованими фахівцями редакції, бухгалтерами-практиками, юристами, фахівцями держорганів. У ньому регулярно з’являється інформація про нові закони, нормативно-правові акти з докладними коментарями та практичними рекомендаціями. І разом з тим сервіс надає доступ до сотень готових відповідей у базі онлайн-консультацій. «Дебет-Кредит» – це джерело вашої абсолютної впевненості у власних діях.
                                </p>
                            </div>
                            <div class="col-md-6 col-lg-4 about__image text-center d-none d-sm-block">
                                <source :srcset="mix('images/about.webp')" type="image/webp">
                                <img :src="mix('images/about.jpg')" class="img-fluid" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="landing-section">
                <div class="container">
                    <h2 class="landing-section__title landing-title"><span>Ціни</span></h2>
                    <p class="landing-section__action">Акційна пропозиція діє до 19 липня</p>
                    <div id="order" class="order">
                        <div class="row justify-content-center">
                            <div class="col-md-4 col-lg-3 order__package">
                                <div class="package">
                                    <div class="package__header">
                                        <h4 class="package__title">ПАКЕТ <br> «ТЕМАТИЧНІ РОЗСИЛКИ»</h4>
                                        <p class="package__period">січень – грудень 2020</p>
                                        <p class="package__price">49 грн/міс.</p>
                                        <p class="package__price-half">294 грн за півріччя</p>
                                    </div>
                                    <div class="package__body">
                                        <div class="package__presents">
                                            <h5 class="package__presents-title">Подарунки</h5>
                                            <ul class="package__presents-list">
                                                <li>Відеозапис Великого бухгалтерського семінару</li>
                                                <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
                                            </ul>
                                        </div>
                                        <p class="package__btn">
                                            <a class="btn" target="_blank">Замовити</a>
                                        </p>
                                        <div class="package__abilities">
                                            <h6 class="package__abilities-title">До пакету входить</h6>
                                            <ul class="package__abilities-list">
                                                <li>Регулярні періодичні добірки – у вашій поштовій скрині</li>
                                                <li>Обирайте з 12 можливих тем те, що вам зараз дійсно потрібно</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="package__footer">
                                        <a class="btn" target="_blank">Беру!</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-lg-3 order__package">
                                <div class="package">
                                    <div class="package__header">
                                        <h4 class="package__title">ПАКЕТ <br> «МІЙ АСИСТЕНТ»</h4>
                                        <p class="package__period">січень – грудень 2020</p>
                                        <p class="package__price">36 грн/міс.</p>
                                        <p class="package__price-half">216 грн за півріччя</p>
                                    </div>
                                    <div class="package__body">
                                        <div class="package__presents">
                                            <h5 class="package__presents-title">Подарунки</h5>
                                            <ul class="package__presents-list">
                                                <li>Відеозапис Великого бухгалтерського семінару</li>
                                                <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
                                            </ul>
                                        </div>
                                        <p class="package__btn">
                                            <a class="btn" target="_blank">Замовити</a>
                                        </p>
                                        <div class="package__abilities">
                                            <h6 class="package__abilities-title">До пакету входить</h6>
                                            <ul class="package__abilities-list">
                                                <li>Щоденна добірка новин</li>
                                                <li>«Документи за тиждень»</li>
                                                <li>«Запитання і відповіді» за тиждень</li>
                                                <li>Розумний податковий календар</li>
                                                <li>База нормативних документів</li>
                                                <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                                                <li>Сервіс «Мій кабінет»</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="package__footer">
                                        <a class="btn" target="_blank">Беру!</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-lg-3 order__package">
                                <div class="package">
                                    <div class="package__header">
                                        <h4 class="package__title">ПАКЕТ <br> «ЕКСПЕРТ»</h4>
                                        <p class="package__period">січень – грудень 2020</p>
                                        <p class="package__price">136 грн/міс.</p>
                                        <p class="package__price-half">816 грн за півріччя</p>
                                    </div>
                                    <div class="package__body">
                                        <div class="package__presents">
                                            <h5 class="package__presents-title">Подарунки</h5>
                                            <ul class="package__presents-list">
                                                <li>Відеозапис Великого бухгалтерського семінару</li>
                                                <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
                                            </ul>
                                        </div>
                                        <p class="package__btn">
                                            <a class="btn" target="_blank">Замовити</a>
                                        </p>
                                        <div class="package__abilities">
                                            <h6 class="package__abilities-title">До пакету входить</h6>
                                            <ul class="package__abilities-list">
                                                <li>Щоденна добірка новин</li>
                                                <li>«Документи за тиждень»</li>
                                                <li>«Запитання і відповіді» за тиждень</li>
                                                <li>Розумний податковий календар</li>
                                                <li>База нормативних документів</li>
                                                <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                                                <li>Сервіс «Мій кабінет»</li>
                                                <li>Пакет «Тематичні розсилки»</li>
                                                <li>Електронний журнал «Дебет-Кредит»</li>
                                                <li>Щомісячні спецвипуски</li>
                                                <li>Доступ до архівних номерів на сайті</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="package__footer">
                                        <a class="btn" target="_blank">Беру!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-4 col-lg-3 order__package">
                                <div class="package">
                                    <div class="package__header">
                                        <h4 class="package__title">ПАКЕТ <br> «ПРОФІ»</h4>
                                        <p class="package__period">січень – грудень 2020</p>
                                        <p class="package__price">249 грн/міс.</p>
                                        <p class="package__price-half">1494 грн за півріччя</p>
                                    </div>
                                    <div class="package__body">
                                        <div class="package__presents">
                                            <h5 class="package__presents-title">Подарунки</h5>
                                            <ul class="package__presents-list">
                                                <li>Відеозапис Великого бухгалтерського семінару</li>
                                                <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
                                            </ul>
                                        </div>
                                        <p class="package__btn">
                                            <a class="btn" target="_blank">Замовити</a>
                                        </p>
                                        <div class="package__abilities">
                                            <h6 class="package__abilities-title">До пакету входить</h6>
                                            <ul class="package__abilities-list">
                                                <li>Щоденна добірка новин</li>
                                                <li>«Документи за тиждень»</li>
                                                <li>«Запитання і відповіді» за тиждень</li>
                                                <li>Розумний податковий календар</li>
                                                <li>База нормативних документів</li>
                                                <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                                                <li>Сервіс «Мій кабінет»</li>
                                                <li>Пакет «Тематичні розсилки»</li>
                                                <li>Електронний журнал «Дебет-Кредит»</li>
                                                <li>Щомісячні спецвипуски</li>
                                                <li>Доступ до архівних номерів на сайті</li>
                                                <li>Сервіс «Постав запитання редакції»</li>
                                                <li>Вебінари редакції</li>
                                                <li>Велика настільна книга</li>
                                                <li>Звітність у «СОТА»</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="package__footer">
                                        <a class="btn" target="_blank">Беру!</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-lg-3 order__package">
                                <div class="package">
                                    <div class="package__header">
                                        <h4 class="package__title">ПАКЕТ <br> «ПРОФІ ПЛЮС»</h4>
                                        <p class="package__period">січень – грудень 2020</p>
                                        <p class="package__price">249 грн/міс.</p>
                                        <p class="package__price-half">1494 грн за півріччя</p>
                                    </div>
                                    <div class="package__body">
                                        <div class="package__presents">
                                            <h5 class="package__presents-title">Подарунки</h5>
                                            <ul class="package__presents-list">
                                                <li>Відеозапис Великого бухгалтерського семінару</li>
                                                <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
                                            </ul>
                                        </div>
                                        <p class="package__btn">
                                            <a class="btn" target="_blank">Замовити</a>
                                        </p>
                                        <div class="package__abilities">
                                            <h6 class="package__abilities-title">До пакету входить</h6>
                                            <ul class="package__abilities-list">
                                                <li>Щоденна добірка новин</li>
                                                <li>«Документи за тиждень»</li>
                                                <li>«Запитання і відповіді» за тиждень</li>
                                                <li>Розумний податковий календар</li>
                                                <li>База нормативних документів</li>
                                                <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                                                <li>Сервіс «Мій кабінет»</li>
                                                <li>Пакет «Тематичні розсилки»</li>
                                                <li>Електронний журнал «Дебет-Кредит»</li>
                                                <li>Щомісячні спецвипуски</li>
                                                <li>Доступ до архівних номерів на сайті</li>
                                                <li>Сервіс «Постав запитання редакції»</li>
                                                <li>Вебінари редакції</li>
                                                <li>Велика настільна книга</li>
                                                <li>Звітність у «СОТА»</li>
                                                <li>Бухгалтерська відеоплатформа 7eminar.ua</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="package__footer">
                                        <a class="btn" target="_blank">Беру!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="landing-section landing-section--advantages">
                <div class="container">
                    <h2 class="landing-section__title landing-title"><span>Переваги</span></h2>
                    <div class="advantages">
                        <div class="row">
                            <div class="col-lg-3 advantages__item">
                                <div class="advantage">
                                    <h4>Актуальні матеріали</h4>
                                    <p>Статті і консультації від авторів «Дебету-Кредиту», провідних податкових та бухгалтерських консультантів- практиків, працівників податкової служби та фондів, фахівців аудиторських компаній. Щотижня 64 сторінки корисної інформації!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="landing-section landing-section--slider">
                <div class="container">
                    <h2 class="landing-section__title landing-title">Вас може зацікавити</h2>
                    <div class="slider">
                        slider
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Page from '../../core/Page'

export default {
    mixins: [Page],
    created(){
        this.$store.dispatch('sliders/retrieve', 'epressa_main')
    },
    mounted(){
        this.$nextTick(() => this.$store.dispatch('sliders/fetch'))
    },
    computed:{
        cover(){
            return (this.$store.getters['sliders/sliders']['epressa_main'] || []).find(slide=>slide.link.params.page == 'dtkt')
        }
    }
}
</script>