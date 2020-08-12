<template>
    <landing >
        <template v-slot:kagrolend>

            <section class="hero">
                <div class="hero__container">
                    <div class="hero__content">
                        <p class="hero__title">Фантастична новина</p>
                        <div class="hero__platform">Зустрічайте кадрову відеоплатформу  <span>№1</span></div>
                        <p class="hero__btn">
                            <a href="#" class="btn">Передплатити</a>
                        </p>
                        <p class="hero__description">Понад 40 курсів протягом року від кращих експертів</p>
                    </div>
                    <div class="hero-nav">
                        <div class="container  hero-nav__container">
                            <ul class="hero-nav__list">
                                <li class="hero-nav__item">
                                    <a class="hero-nav__link" href="#order">
                                        <svg class="hero-nav__icon" width="35" height="28" aria-hidden="true" focusable="false" data-icon="tags" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                            <path fill="currentColor" d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"></path>
                                        </svg>
                                        Період передплати
                                    </a>
                                </li>
                                <li class="hero-nav__item">
                                    <a class="hero-nav__link" href="#video">
                                        <svg class="hero-nav__icon" width="28" height="28" aria-hidden="true" focusable="false" data-icon="play-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"></path>
                                        </svg>
                                        Дивіться зараз
                                    </a>
                                </li>
                               <!-- <li class="hero-nav__item">
                                    <a class="hero-nav__link" href="#waiting">
                                        <svg class="hero-nav__icon" width="28" height="28" aria-hidden="true" focusable="false" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
                                        </svg>
                                        Очікується у 2020 році
                                    </a>
                                </li>-->
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <section class="section">
                <div class="section__container">
                    <p class="section__title">Переваги Кадрової відеоплатформи  <span>№1</span></p>
                            <ul class="section__advantages-list  advantages-list j">
                                <li class="advantages-list__item ">
                                    <svg width="45" height="40" aria-hidden="true" focusable="false" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    Роз’яснення від найкращих <br> лекторів України
                                </li>
                                <li class="advantages-list__item " data-active="default">
                                    <svg  width="45" height="40" aria-hidden="true" focusable="false" data-icon="play-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>
                                    </svg>
                                    Понад 40 курсів <br>  у 2020 році!
                                </li>
                                <li class="advantages-list__item js-advantage">

                                    <svg viewBox="0 0 512 512" width="45" height="40" xmlns="http://www.w3.org/2000/svg">
                                        <path  d="M512 346.5c0-63.535-36.45-120.238-91.04-147.82-1.694 121.82-100.46 220.586-222.28 222.28C226.262 475.55 282.965 512 346.5 512c29.79 0 58.758-7.934 84.21-23.008l80.567 22.285-22.285-80.566C504.066 405.258 512 376.289 512 346.5zm0 0"></path>
                                        <path  d="M391 195.5C391 87.7 303.3 0 195.5 0S0 87.7 0 195.5c0 35.133 9.352 69.34 27.11 99.371L.718 390.277l95.41-26.386C126.16 381.648 160.367 391 195.5 391 303.3 391 391 303.3 391 195.5zM165.5 150h-30c0-33.086 26.914-60 60-60s60 26.914 60 60c0 16.793-7.11 32.934-19.512 44.277L210.5 217.605V241h-30v-36.605l35.234-32.25c6.297-5.762 9.766-13.625 9.766-22.145 0-16.543-13.457-30-30-30s-30 13.457-30 30zm15 121h30v30h-30zm0 0"></path>
                                    </svg>
                                    Відповіді на ваші запитання
                                    <br>
                                    від топових експертів
                                </li>
                                <li class="advantages-list__item ">
                                    <svg width="45" height="40" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path d="M422.762 507.605l-87.518-87.503-42.422 42.422c-3.662 3.662-8.979 5.171-14.048 3.999a14.982 14.982 0 01-10.781-9.858l-84.858-254.561a14.995 14.995 0 013.618-15.352c3.999-3.999 9.961-5.464 15.352-3.618l254.561 84.858a14.982 14.982 0 019.858 10.781 15.015 15.015 0 01-3.999 14.048l-42.422 42.422 87.503 87.517c5.859 5.859 5.859 15.352 0 21.211l-63.633 63.633c-5.86 5.861-15.352 5.861-21.211.001zM195 120c-8.291 0-15-6.709-15-15V15c0-8.291 6.709-15 15-15s15 6.709 15 15v90c0 8.291-6.709 15-15 15zM120.762 141.973L57.114 78.325c-5.859-5.859-5.859-15.352 0-21.211s15.352-5.859 21.211 0l63.647 63.647c5.859 5.859 5.859 15.352 0 21.211-5.859 5.86-15.351 5.86-21.21.001zM57.114 332.886c-5.859-5.859-5.859-15.352 0-21.211l63.647-63.647c5.859-5.859 15.352-5.859 21.211 0s5.859 15.352 0 21.211l-63.647 63.647c-5.859 5.859-15.351 5.859-21.211 0zM248.027 141.973c-5.859-5.859-5.859-15.352 0-21.211l63.647-63.647c5.859-5.859 15.352-5.859 21.211 0s5.859 15.352 0 21.211l-63.647 63.647c-5.859 5.859-15.351 5.859-21.211 0zM105 210H15c-8.291 0-15-6.709-15-15s6.709-15 15-15h90c8.291 0 15 6.709 15 15s-6.709 15-15 15z"></path>
                                    </svg>
                                    Простий і зручний
                                    <br>
                                    в користуванні
                                    <br>
                                    особистий кабінет
                                </li>
                                <li class="advantages-list__item ">
                                    <svg  width="45" height="40" aria-hidden="true" focusable="false" data-icon="undo" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"></path>
                                    </svg>
                                    Цілодобовий доступ
                                    <br>
                                    до перегляду
                                    <br>
                                    з будь-якого пристрою
                                </li>
                                <li class="advantages-list__item">
                                    <svg  width="45" height="40" aria-hidden="true" focusable="false" data-icon="film" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path  d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm272 208c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H156c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v96zm112 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"></path>
                                    </svg>
                                    Ексклюзивні додаткові <br> відеоматеріали
                                </li>
                            </ul>
                        </div>
            </section>

            <section class="section" id="order">
                <div class="section__container">
                    <p class="section__title">Акція триває до 10 липня</p>
                    <div class="section__package">
                        <div class="package" >
                            <div class="package__container">
                                    <h3 class="package__title">
                                        3 місяці
                                        <div class="package__gift">
                                            <span>Подарунок</span> <p > Вишуканий кулон</p>
                                        </div>
                                    </h3>
                                    <p class="package__sale package__sale--card">-58%</p>
                                    <div class="package__main">
                                        <p class="package__card">При оплаті картою</p>
                                        <p class="package__price ">189
                                            грн/міс.</p>
                                        <p class="package__price-old"><s>449 грн/міс.</s></p>
                                        <p class="package__btn package__btn--card">
                                            <a href="" class="btn" target="_blank">Оплатити
                                                картою</a>
                                        </p>
                                    </div>
                                    <div class="package__advantages">
                                        <span> Кожен місяць:</span>
                                        <ul class="package__list">
                                            <li>один відеокурс <br> (5-7 уроків)</li>
                                            <li>онлайн-семінар (5 годин)</li>
                                            <li>вебінар (2 години)</li>
                                            <li>відповіді на питнання <br> (1,5 години)</li>
                                            <li>Роздатковий матеріал</li>
                                            <li>Сертифікати після <br>  проходження курсів</li>
                                            <li v-if="show">Розумний податковий календар</li>
                                            <li v-if="show">База нормативних документів</li>
                                            <li v-if="show">Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                                            <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
                                        </ul>
                                    </div>
                                    <div class="package__main">
                                        <p class="package__price package__price--large">249
                                            грн/міс.</p>
                                        <p class="package__price-old"><s>449 грн/міс.</s></p>
                                        <p class="package__btn package__btn--bill">
                                            <a href="https://subscribe.dtkt.ua/order/14f20103032d9ae45e0e254cb7" class="btn btn--package" target="_blank">Замовити
                                                рахунок</a>
                                        </p>
                                        <p class="package__sale package__sale--bill">-45%</p>
                                    </div>
                                </div>
                        </div>
                        <div class="package" >
                            <div class="package__container">
                                <h3 class="package__title">
                                    6 місяців
                                    <div class="package__gift">
                                        <span>Подарунок</span> <p >П +2 місяці передплати <br> безкоштовно</p>
                                    </div>
                                </h3>
                                <p class="package__sale package__sale--card">-58%</p>
                                <div class="package__main">
                                    <p class="package__card">При оплаті картою</p>
                                    <p class="package__price ">189
                                        грн/міс.</p>
                                    <p class="package__price-old"><s>449 грн/міс.</s></p>
                                    <p class="package__btn package__btn--card">
                                        <a href="" class="btn" target="_blank">Оплатити
                                            картою</a>
                                    </p>
                                </div>
                                <div class="package__advantages">
                                    <span> Кожен місяць:</span>
                                    <ul class="package__list">
                                        <li>один відеокурс <br> (5-7 уроків)</li>
                                        <li>онлайн-семінар (5 годин)</li>
                                        <li>вебінар (2 години)</li>
                                        <li>відповіді на питнання <br> (1,5 години)</li>
                                        <li>Роздатковий матеріал</li>
                                        <li>Сертифікати після <br>  проходження курсів</li>
                                        <li v-if="show">Розумний податковий календар</li>
                                        <li v-if="show">База нормативних документів</li>
                                        <li v-if="show">Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                                        <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
                                    </ul>
                                </div>
                                <div class="package__main">
                                    <p class="package__price package__price--large">249
                                        грн/міс.</p>
                                    <p class="package__price-old"><s>449 грн/міс.</s></p>
                                    <p class="package__btn package__btn--bill">
                                        <a href="https://subscribe.dtkt.ua/order/14f20103032d9ae45e0e254cb7" class="btn btn--package" target="_blank">Замовити
                                            рахунок</a>
                                    </p>
                                    <p class="package__sale package__sale--bill">-45%</p>
                                </div>
                            </div>
                        </div>
                        <div class="package" >
                            <div class="package__container">
                                <h3 class="package__title">
                                    12 місяців
                                    <div class="package__gift">
                                        <span>Подарунок</span> <p >Податковий кодекс України</p> <span>(дата виходу 13.07.2020 р.)</span>
                                    </div>
                                </h3>
                                <p class="package__sale package__sale--card">-58%</p>
                                <div class="package__main">
                                    <p class="package__card">При оплаті картою</p>
                                    <p class="package__price ">189
                                        грн/міс.</p>
                                    <p class="package__price-old"><s>449 грн/міс.</s></p>
                                    <p class="package__btn package__btn--card">
                                        <a href="" class="btn" target="_blank">Оплатити
                                            картою</a>
                                    </p>
                                </div>
                                <div class="package__advantages">
                                    <span> Кожен місяць:</span>
                                    <ul class="package__list">
                                        <li>один відеокурс <br> (5-7 уроків)</li>
                                        <li>онлайн-семінар (5 годин)</li>
                                        <li>вебінар (2 години)</li>
                                        <li>відповіді на питнання <br> (1,5 години)</li>
                                        <li>Роздатковий матеріал</li>
                                        <li>Сертифікати після <br>  проходження курсів</li>
                                        <li v-if="show">Розумний податковий календар</li>
                                        <li v-if="show">База нормативних документів</li>
                                        <li v-if="show">Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                                        <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
                                    </ul>
                                </div>
                                <div class="package__main">
                                    <p class="package__price package__price--large">249
                                        грн/міс.</p>
                                    <p class="package__price-old"><s>449 грн/міс.</s></p>
                                    <p class="package__btn package__btn--bill">
                                        <a href="https://subscribe.dtkt.ua/order/14f20103032d9ae45e0e254cb7" class="btn btn--package" target="_blank">Замовити
                                            рахунок</a>
                                    </p>
                                    <p class="package__sale package__sale--bill">-45%</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="section" id="video">
                <div class="section__container">
                    <p class="section__title">Дивіться зараз</p>
                    <div class="video-slider">
                        <div class="swiper-pagination video-slider__nav" :class="customClassName+'__pagination'"></div>
                        <div class="video-slider__content">
                            <swiper class="swiper" :options="swiperOptionVideo">
                                <swiper-slide>
                                    <div class="video-slider__card">
                                        <a href="/" target="_blank" tabindex="0">
                                            <picture>
                                                <source :srcset="mix('images/square04.webp')" type="image/webp">
                                                <img :src="mix('images/square04-min.png')" class="img-fluid" alt="">
                                            </picture>
                                        </a>
                                    </div>
                                    <div class="video-slider__card">
                                        <a href="/" target="_blank" tabindex="0">
                                            <picture>
                                                <source :srcset="mix('images/square04.webp')" type="image/webp">
                                                <img :src="mix('images/square04-min.png')" class="img-fluid" alt="">
                                            </picture>
                                        </a>
                                    </div>
                                    <div class="video-slider__card">
                                        <a href="/" target="_blank" tabindex="0">
                                            <picture>
                                                <source :srcset="mix('images/square04.webp')" type="image/webp">
                                                <img :src="mix('images/square04-min.png')" class="img-fluid" alt="">
                                            </picture>
                                        </a>
                                    </div>
                                    <div class="video-slider__card">
                                        <a href="/" target="_blank" tabindex="0">
                                            <picture>
                                                <source :srcset="mix('images/square04.webp')" type="image/webp">
                                                <img :src="mix('images/square04-min.png')" class="img-fluid" alt="">
                                            </picture>
                                        </a>
                                    </div>
                                    <div class="video-slider__card">
                                        <a href="/" target="_blank" tabindex="0">
                                            <picture>
                                                <source :srcset="mix('images/square04.webp')" type="image/webp">
                                                <img :src="mix('images/square04-min.png')" class="img-fluid" alt="">
                                            </picture>
                                        </a>
                                    </div>
                                    <div class="video-slider__card">
                                        <a href="/" target="_blank" tabindex="0">
                                            <picture>
                                                <source :srcset="mix('images/square04.webp')" type="image/webp">
                                                <img :src="mix('images/square04-min.png')" class="img-fluid" alt="">
                                            </picture>
                                        </a>
                                    </div>

                                </swiper-slide>
                              <!--  <swiper-slide>
                                    <div class="video-slider__card">
                                        <a href="/" target="_blank" tabindex="0">
                                            <picture>
                                                <source :srcset="mix('images/square04.webp')" type="image/webp">
                                                <img :src="mix('images/square04-min.png')" class="img-fluid" alt="">
                                            </picture>
                                        </a>
                                    </div>
                                    <div class="video-slider__card">
                                        <a href="/" target="_blank" tabindex="0">
                                            <picture>
                                                <source :srcset="mix('images/square04.webp')" type="image/webp">
                                                <img :src="mix('images/square04-min.png')" class="img-fluid" alt="">
                                            </picture>
                                        </a>
                                    </div>
                                    <div class="video-slider__card">
                                        <a href="/" target="_blank" tabindex="0">
                                            <picture>
                                                <source :srcset="mix('images/square04.webp')" type="image/webp">
                                                <img :src="mix('images/square04-min.png')" class="img-fluid" alt="">
                                            </picture>
                                        </a>
                                    </div>
                                    <div class="video-slider__card">
                                        <a href="/" target="_blank" tabindex="0">
                                            <picture>
                                                <source :srcset="mix('images/square04.webp')" type="image/webp">
                                                <img :src="mix('images/square04-min.png')" class="img-fluid" alt="">
                                            </picture>
                                        </a>
                                    </div>
                                    <div class="video-slider__card">
                                        <a href="/" target="_blank" tabindex="0">
                                            <picture>
                                                <source :srcset="mix('images/square04.webp')" type="image/webp">
                                                <img :src="mix('images/square04-min.png')" class="img-fluid" alt="">
                                            </picture>
                                        </a>
                                    </div>
                                    <div class="video-slider__card">
                                        <a href="/" target="_blank" tabindex="0">
                                            <picture>
                                                <source :srcset="mix('images/square04.webp')" type="image/webp">
                                                <img :src="mix('images/square04-min.png')" class="img-fluid" alt="">
                                            </picture>
                                        </a>
                                    </div>
                                    <div class="video-slider__card">
                                        <a href="/" target="_blank" tabindex="0">
                                            <picture>
                                                <source :srcset="mix('images/square04.webp')" type="image/webp">
                                                <img :src="mix('images/square04-min.png')" class="img-fluid" alt="">
                                            </picture>
                                        </a>
                                    </div>
                                    <div class="video-slider__card">
                                        <a href="/" target="_blank" tabindex="0">
                                            <picture>
                                                <source :srcset="mix('images/square04.webp')" type="image/webp">
                                                <img :src="mix('images/square04-min.png')" class="img-fluid" alt="">
                                            </picture>
                                        </a>
                                    </div>
                                    <div class="video-slider__card">
                                        <a href="/" target="_blank" tabindex="0">
                                            <picture>
                                                <source :srcset="mix('images/square04.webp')" type="image/webp">
                                                <img :src="mix('images/square04-min.png')" class="img-fluid" alt="">
                                            </picture>
                                        </a>
                                    </div>
                                </swiper-slide>-->

                                <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
                                <div class="swiper-button-next swiper-button" slot="button-next"></div>
                            </swiper>
                        </div>

                    </div>
                    <p class="section__btn">
                        <a href="#order" class="btn">Передплатити</a>
                    </p>
                </div>
            </section>

            <section class="section" id="speakers">
                <div class="section__container">
                    <p class="section__title">Наші спікери</p>
                    <div class="section__speakers speakers">
                        <swiper class="swiper" :options="swiperOptionSpeakers">
                            <swiper-slide><div class="speakers__item">
                                <div class="speakers__img">
                                    <picture>
                                        <source :srcset="mix('images/oh_bg.webp')" type="image/webp">
                                        <img :src="mix('images/oh_bg-min.png')" class="img-fluid" alt="">
                                    </picture>
                                </div>
                                <p class="speakers__name">Ольга Хільчук</p>
                                <p class="speakers__regalia">Бухгалтер-експерт,
                                    провідний консультант
                                    по роботі з 1С</p>
                            </div></swiper-slide>
                            <swiper-slide> <div class="speakers__item">
                                <div class="speakers__img">
                                    <picture>
                                        <source :srcset="mix('images/oh_bg.webp')" type="image/webp">
                                        <img :src="mix('images/oh_bg-min.png')" class="img-fluid" alt="">
                                    </picture>
                                </div>
                                <p class="speakers__name">Ольга Хільчук</p>
                                <p class="speakers__regalia">Бухгалтер-експерт,
                                    провідний консультант
                                    по роботі з 1С</p>
                            </div></swiper-slide>
                            <swiper-slide><div class="speakers__item">
                                <div class="speakers__img">
                                    <picture>
                                        <source :srcset="mix('images/oh_bg.webp')" type="image/webp">
                                        <img :src="mix('images/oh_bg-min.png')" class="img-fluid" alt="">
                                    </picture>
                                </div>
                                <p class="speakers__name">Ольга Хільчук</p>
                                <p class="speakers__regalia">Бухгалтер-експерт,
                                    провідний консультант
                                    по роботі з 1С</p>
                            </div></swiper-slide>
                            <swiper-slide><div class="speakers__item">
                                <div class="speakers__img">
                                    <picture>
                                        <source :srcset="mix('images/oh_bg.webp')" type="image/webp">
                                        <img :src="mix('images/oh_bg-min.png')" class="img-fluid" alt="">
                                    </picture>
                                </div>
                                <p class="speakers__name">Ольга Хільчук</p>
                                <p class="speakers__regalia">Бухгалтер-експерт,
                                    провідний консультант
                                    по роботі з 1С</p>
                            </div></swiper-slide>
                            <swiper-slide><div class="speakers__item">
                                <div class="speakers__img">
                                    <picture>
                                        <source :srcset="mix('images/oh_bg.webp')" type="image/webp">
                                        <img :src="mix('images/oh_bg-min.png')" class="img-fluid" alt="">
                                    </picture>
                                </div>
                                <p class="speakers__name">Ольга Хільчук</p>
                                <p class="speakers__regalia">Бухгалтер-експерт,
                                    провідний консультант
                                    по роботі з 1С</p>
                            </div></swiper-slide>
                            <swiper-slide><div class="speakers__item">
                                <div class="speakers__img">
                                    <picture>
                                        <source :srcset="mix('images/oh_bg.webp')" type="image/webp">
                                        <img :src="mix('images/oh_bg-min.png')" class="img-fluid" alt="">
                                    </picture>
                                </div>
                                <p class="speakers__name">Ольга Хільчук</p>
                                <p class="speakers__regalia">Бухгалтер-експерт,
                                    провідний консультант
                                    по роботі з 1С</p>
                            </div></swiper-slide>
                            <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
                            <div class="swiper-button-next swiper-button" slot="button-next"></div>
                        </swiper>

                    </div>
                    <div class="speakers__description">та ще понад 20 професійних спікерів</div>
                    <p class="section__btn">
                        <a href="#order" class="btn">Передплатити</a>
                    </p>
                </div>
            </section>

            <section class="section" id="questions">
                <div class="section__container">
                    <p class="section__title">Про що найчастіше запитують?</p>
                    <div class="questions">
                        <div class="questions__item">
                            <div class="questions__header">
                                <b-div v-b-toggle.collapse-1 class="questions__box">
                                    <div class="questions__text">
                                        <div class="questions__info">
                                            <p class="questions__lessons-titel">Що таке Кадрова відеоплатформа №1?</p>
                                        </div>
                                    </div>
                                    <span class=" when-opened"></span>
                                    <span class="when-closed"></span></b-div>
                            </div>
                            <b-collapse visible id="collapse-1">
                                <div class="questions__more-body">
                                    <ul class="questions__more-list">
                                        <li class="questions__more-list-item"> Доступ до 40 курсів, вебінарів та трансляцій вже у 2020 році на всі актуальні кадрові теми.</li>
                                    </ul>
                                </div>
                            </b-collapse>
                        </div>
                        <div class="questions__item">
                            <div class="questions__header">
                                <b-div v-b-toggle.collapse-2 class="questions__box">
                                    <div class="questions__text">
                                        <div class="questions__info">
                                            <p class="questions__lessons-titel">З якими лекторами співпрацюєте?</p>
                                        </div>
                                    </div>
                                    <span class=" when-opened"></span>
                                    <span class="when-closed"></span></b-div>
                            </div>
                            <b-collapse  id="collapse-2">
                                <div class="questions__more-body">
                                    <ul class="questions__more-list">
                                        <li class="questions__more-list-item"> Доступ до 40 курсів, вебінарів та трансляцій вже у 2020 році на всі актуальні кадрові теми. </li>
                                    </ul>
                                </div>
                            </b-collapse>

                        </div>
                    </div>
                    <p class="section__btn">
                        <a href="#order" class="btn">Передплатити</a>
                    </p>
                </div>
            </section>
        </template>
    </landing>
</template>


<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    var tab = ['актуальні', 'актуальні', 'новинки']
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        computed: {
            btnText: function() {
                if(this.show) {
                    return 'приховати'
                }
                return 'а ще входить...'
            }
        },
        data() {
            return {
                swiperOptionSpeakers: {

                    /*loopFillGroupWithBlank: true,*/

                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                    }
                },

                show: false,

                swiperOptionVideo: {
                   /* navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },*/
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet(index, className) {
                            return '<span class="' + className + '">' + (tab[index]) + '</span>';
                        }
                    }
                }
            }
        }
    }
</script>

