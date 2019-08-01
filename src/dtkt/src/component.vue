<template>
    <div id="page-dtkt">
        <div class="landing">
            <div class="landing-section">
                <div class="container">
                    <div class="landing-cover">
                        <picture class="landing-cover">
                            <source :srcset="mix('images/cover.webp')" type="image/webp">
                            <img :src="mix('images/cover.jpg')" class="img-fluid" alt="">
                        </picture>
                    </div>
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
            <section id="order"  class="landing-section">
                <div class="container">
                    <h2 class="landing-section__title landing-title"><span>Ціни</span></h2>
                    <p class="landing-section__action">Акційна пропозиція діє до 19 липня</p>
                    <div class="order">
                        <div class="row justify-content-center">
                            <div class="col-sm-6 col-md-4 col-lg-3 order__package">
                               <package article="ep-dtkt_tr">
                                    <template v-slot:title>ПАКЕТ <br> «ТЕМАТИЧНІ РОЗСИЛКИ»</template>
                                    <template v-slot:gifts>
                                        <li>Відеозапис Великого бухгалтерського семінару</li>
                                        <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
                                    </template>
                                    <template v-slot:abilities>
                                        <li>Регулярні періодичні добірки – у вашій поштовій скрині</li>
                                        <li>Обирайте з 12 можливих тем те, що вам зараз дійсно потрібно</li>
                                    </template>
                                </package>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3 order__package">
                                <package article="ep-dtkt_ma" class="dddd">
                                    <template v-slot:title>ПАКЕТ <br> «МІЙ АСИСТЕНТ»</template>
                                    <template v-slot:gifts>
                                        <li>Відеозапис Великого бухгалтерського семінару</li>
                                        <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
                                    </template>
                                    <template v-slot:abilities>
                                        <li>Щоденна добірка новин</li>
                                        <li>«Документи за тиждень»</li>
                                        <li>«Запитання і відповіді» за тиждень</li>
                                        <li>Розумний податковий календар</li>
                                        <li>База нормативних документів</li>
                                        <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                                        <li>Сервіс «Мій кабінет»</li>
                                    </template>
                                </package>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3 order__package">
                                <package article="ep-dtkt_ek">
                                    <template v-slot:title>ПАКЕТ <br> «ЕКСПЕРТ»</template>
                                    <template v-slot:gifts>
                                        <li>Відеозапис Великого бухгалтерського семінару</li>
                                        <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
                                    </template>
                                    <template v-slot:abilities>
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
                                    </template>
                                </package>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-4 col-lg-3 order__package">
                                <package article="ep-dtkt_pr" class="dddd">
                                    <template v-slot:title>ПАКЕТ <br> «ПРОФІ»</template>
                                    <template v-slot:gifts>
                                        <li>Відеозапис Великого бухгалтерського семінару</li>
                                        <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
                                    </template>
                                    <template v-slot:abilities>
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
                                    </template>
                                </package>
                            </div>
                            <div class="col-md-4 col-lg-3 order__package">
                                <package article="ep-dtkt_pp" class="dddd">
                                    <template v-slot:title>ПАКЕТ <br> «ПРОФІ ПЛЮС»</template>
                                    <template v-slot:gifts>
                                        <li>Відеозапис Великого бухгалтерського семінару</li>
                                        <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
                                    </template>
                                    <template v-slot:abilities>
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
                                    </template>
                                </package>
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
                    <h2 class="landing-section__title landing-title"><span>Вас може зацікавити</span></h2>
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
import Package from './Package'

export default {
    mixins: [Page],
    components: {Package},
    data:()=>({
        showList: true
    }),
}
</script>