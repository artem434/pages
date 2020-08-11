<template>
    <div><swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper></div>



</template>

<!--<template>
    <landing name="dtkt_june2020" advantages="epressa_add_dtkt" class="landing-dtkt_june2020">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container&#45;&#45;august">
                        <div class="cover">
                             <picture class="cover__img">
                                 <source :srcset="mix('images/header.webp')" type="image/webp">
                                 <img :src="mix('images/header.png')" class="img-fluid" alt="">
                             </picture>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:about>
            <div>
            </div>
        </template>
        <template v-slot:price-title>
            <div>
                <h2 class="landing-title landing-title&#45;&#45;columns"><span>{{ page.options['order_title']}}</span></h2>
            </div>
        </template>
        <template v-slot:packages_list>
            <landing-package-row >
                <landing-package article="ep-dtkt_ek" class="packages__column&#45;&#45;two">
                    <template v-slot:title>
                        <span>ЕКСПЕРТ<br>та подарунок</span>

                    </template>
                    &lt;!&ndash;<template v-slot:period>
                        <div class="period">квітень - вересень 2020</div>
                    </template>&ndash;&gt;
                    <template v-slot:gifts>
                        <li >Відеокурс <br> <a href="https://7eminar.com/automatization2020#course_8" target="_blank">«Електронний кабінет <br>
                            страхувальника <br>
                            на сайті ПФУ»</a> </li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна добірка новин</li>
                        <li>«Документи за тиждень»</li>
                        <li>«Запитання і відповіді» за тиждень</li>
                        <div v-if="show">
                            <li>Розумний податковий календар</li>
                            <li>База нормативних документів</li>
                            <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                            <li>Сервіс «Мій кабінет»</li>
                            <li>Пакет «Тематичні розсилки»</li>
                            <li>Електронний журнал «Дебет-Кредит»</li>
                            <li>Щомісячні спецвипуски</li>
                            <li>Доступ до архівних номерів на сайті</li>
                            <li class="package__abilities-item&#45;&#45;noactive">Сервіс «Постав запитання редакції»</li>
                            <li class="package__abilities-item&#45;&#45;noactive">Вебінари редакції</li>
                            <li class="package__abilities-item&#45;&#45;noactive">Велика настільна книга</li>
                            <li class="package__abilities-item&#45;&#45;noactive">Звітність у «СОТА»</li>
                        </div>
                        <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">116 грн/міс.</div>

                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_pr" class="packages__column&#45;&#45;two">
                    <template v-slot:title>
                        <span >ПРОФІ<br>та подарунок</span>

                    </template>
                    &lt;!&ndash;  <template v-slot:period>
                          <div class="period">квітень - вересень 2020</div>
                      </template>&ndash;&gt;
                    <template v-slot:gifts>
                        <li >Відеокурс <br> <a href="https://7eminar.com/automatization2020#course_8" target="_blank">«Електронний кабінет <br>
                            страхувальника <br>
                            на сайті ПФУ»</a> </li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна добірка новин</li>
                        <li>«Документи за тиждень»</li>
                        <li>«Запитання і відповіді» за тиждень</li>
                        <div v-if="show">
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
                        </div>
                        <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                    </template>
                    <template v-slot:old-price>
                        <div  class="package__old-price" style="text-decoration: line-through">211 грн/міс.</div>

                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_pp" class="package-plus package-plus-top">
                    <template v-slot:title>

                        <span  >ПРОФІ + 7eminar.ua<br>та подарунок</span>

                    </template>
                    &lt;!&ndash; <template v-slot:period>
                         <div class="period">квітень - вересень 2020</div>
                     </template>&ndash;&gt;
                    <template v-slot:gifts>
                        <li >Відеокурс <br> <a href="https://7eminar.com/automatization2020#course_8" target="_blank">«Електронний кабінет <br>
                            страхувальника <br>
                            на сайті ПФУ»</a> </li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна добірка новин</li>
                        <li>«Документи за тиждень»</li>
                        <li>«Запитання і відповіді» за тиждень</li>
                        <div v-if="show">
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
                            <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 170 курсів та вебінарів для перегляду
                                &lt;!&ndash;<br><span  > (квітень - вересень 2020)</span>&ndash;&gt; </li>
                        </div>
                        <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                    </template>
                    <template v-slot:old-price>
                        <div  class="package__old-price" style="text-decoration: line-through">339 грн/міс.</div>

                    </template>
                </landing-package>
            </landing-package-row>
        </template>
    </landing>

</template>-->

<script>
import Page from '../../core/Page'

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


export default {
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    },
    mixins: [Page],
    name: 'carrousel',
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                },
                // Some Swiper option/callback...
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    mounted() {
        console.log('Current Swiper instance object', this.swiper)
        this.swiper.slideTo(3, 1000, false)
    }
}
</script>
