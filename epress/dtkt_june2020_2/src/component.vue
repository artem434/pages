<template>
    <landing name="dtkt_june2020_2" advantages="epressa_add_dtkt" class="landing-dtkt_june2020_2">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <a href="#gift">
                                <picture class="cover__img">
                                    <!--   <source :srcset="mix('images/summer1.webp')" type="image/webp">-->
                                    <img :src="mix('images/summer1.jpg')" class="img-fluid" alt="">
                                </picture>
                            </a>

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
                <h2 class="landing-title landing-title--columns"><span>{{ page.options['order_title']}}</span></h2>
                <h3 class="landing-subtitle">{{ page.options['order_subtitle']}}</h3>
                <h2  id="gift" class="landing-title--columns landing-title--columns--color"><span>{{ page.options['order_title-top']}}</span></h2>
            </div>
        </template>
        <template     v-slot:packages_list>
            <landing-package-row >
                <landing-package article="ep-dtkt_ek_gift" class="packages__column--two">
                    <template v-slot:title>
                        <span>ЕКСПЕРТ<br>та подарунки</span>

                    </template>
                    <template v-slot:period>

                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс <br> <a href="https://7eminar.com/automatization2020#course_11" target="_blank">«Облік витрат в 1С»</a> </li>
                        <li><a href="https://rozetka.com.ua/samsung_galaxy_a01_2_16gb_blue/p173919068/" target="_blank">Смартфон</a> чи <a href="https://rozetka.com.ua/83721972/p83721972/" target="_blank">планшет</a><br> на вибір</li>
                    </template>
                    Смартфон чи планшет
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
                            <li class="package__abilities-item--noactive">Сервіс «Постав запитання редакції»</li>
                            <li class="package__abilities-item--noactive">Вебінари редакції</li>
                            <li class="package__abilities-item--noactive">Велика настільна книга</li>
                            <li class="package__abilities-item--noactive">Звітність у «СОТА»</li>
                        </div>
                        <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                        <div class="package__footer">
                            <router-link :to="`/order?article=ep-dtkt_ek_gift&options[periods]=12`" class="btn btn-package  btn-arrow btn-package--twelves"
                                         target="_blank">Беру!
                            </router-link>
                        </div>
                    </template>

                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">660 грн/міс.</div>

                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_pr_gift" class="packages__column--three">
                    <template v-slot:title>
                        <span >ПРОФІ<br>та подарунки</span>

                    </template>
                      <template v-slot:period>

                      </template>
                    <template v-slot:gifts>
                        <li >Відеокурс <br> <a href="https://7eminar.com/automatization2020#course_11" target="_blank">«Облік витрат в 1С»</a> </li>
                        <li><a href="https://rozetka.com.ua/samsung_galaxy_a01_2_16gb_blue/p173919068/" target="_blank">Смартфон</a> чи <a href="https://rozetka.com.ua/83721972/p83721972/" target="_blank">планшет</a><br> на вибір</li>
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
                        <div class="package__footer">
                            <router-link :to="`/order?article=ep-dtkt_pr_gift&options[periods]=12`" class="btn btn-package  btn-arrow btn-package--twelves"
                                         target="_blank">Беру!
                            </router-link>
                        </div>
                    </template>
                    <template v-slot:old-price>
                        <div  class="package__old-price" style="text-decoration: line-through">773 грн/міс.</div>

                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_pp_gift" class="package-plus package-plus-top">
                    <template v-slot:title>

                        <span  >ПРОФІ + 7eminar.ua<br>та подарунки</span>

                    </template>
                     <template v-slot:period>

                     </template>
                    <template v-slot:gifts>
                        <li >Відеокурс <br> <a href="https://7eminar.com/automatization2020#course_11" target="_blank">«Облік витрат в 1С»</a> </li>
                        <li><a href="https://rozetka.com.ua/samsung_galaxy_a01_2_16gb_blue/p173919068/" target="_blank">Смартфон</a> чи <a href="https://rozetka.com.ua/83721972/p83721972/" target="_blank">планшет</a><br> на вибір</li>
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
                            <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 180 курсів та вебінарів для перегляду
                                <!--<br><span  > (квітень - вересень 2020)</span>--> </li>
                        </div>
                        <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                        <div class="package__footer">
                            <router-link :to="`/order?article=ep-dtkt_pp_gift&options[periods]=12`" class="btn btn-package  btn-arrow btn-package--twelves"
                                         target="_blank">Беру!
                            </router-link>
                        </div>
                    </template>
                    <template v-slot:old-price>
                        <div  class="package__old-price" style="text-decoration: line-through">923   грн/міс.</div>

                    </template>
                </landing-package>
            </landing-package-row>
            <h2 class="landing-title--columns landing-title--columns--color"><span>{{ page.options['order_title-bottom']}}</span></h2>
            <landing-package-row >
                <landing-package article="ep-dtkt_ek_action" class="packages__column--two">
                    <template v-slot:title>
                        <span>ЕКСПЕРТ<br>та подарунок</span>

                    </template>
                    <template v-slot:period>

                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс <br> <a href="https://7eminar.com/automatization2020#course_11" target="_blank">«Облік витрат в 1С»</a> </li>
                    </template>

                    Смартфон чи планшет

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
                            <li class="package__abilities-item--noactive">Сервіс «Постав запитання редакції»</li>
                            <li class="package__abilities-item--noactive">Вебінари редакції</li>
                            <li class="package__abilities-item--noactive">Велика настільна книга</li>
                            <li class="package__abilities-item--noactive">Звітність у «СОТА»</li>
                        </div>
                        <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                        <div class="package__footer">
                            <router-link :to="`/order?article=ep-dtkt_ek_action&options[periods]=12`" class="btn btn-package  btn-arrow btn-package--twelves"
                                         target="_blank">Беру!
                            </router-link>
                        </div>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">243 грн/міс.</div>

                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_pr_action" class="packages__column--three">
                    <template v-slot:title>
                        <span >ПРОФІ<br>та подарунок</span>

                    </template>
                    <template v-slot:period>

                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс <br> <a href="https://7eminar.com/automatization2020#course_11" target="_blank">«Облік витрат в 1С»</a> </li>

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
                        <div class="package__footer">
                            <router-link :to="`/order?article=ep-dtkt_pr_action&options[periods]=12`" class="btn btn-package  btn-arrow btn-package--twelves"
                                         target="_blank">Беру!
                            </router-link>
                        </div>
                    </template>
                    <template v-slot:old-price>
                        <div  class="package__old-price" style="text-decoration: line-through">356 грн/міс.</div>

                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_pp_action" class="package-plus package-plus-top">
                    <template v-slot:title>

                        <span  >ПРОФІ + 7eminar.ua<br>та подарунок</span>

                    </template>
                    <template v-slot:period>

                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс <br> <a href="https://7eminar.com/automatization2020#course_11" target="_blank">«Облік витрат в 1С»</a> </li>
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
                            <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 180 курсів та вебінарів для перегляду
                                <!--<br><span  > (квітень - вересень 2020)</span>--> </li>
                        </div>
                        <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                        <div class="package__footer">
                            <router-link :to="`/order?article=ep-dtkt_pp_action&options[periods]=12`" class="btn btn-package  btn-arrow btn-package--twelves"
                                         target="_blank">Беру!
                            </router-link>
                        </div>
                    </template>
                    <template v-slot:old-price>
                        <div  class="package__old-price" style="text-decoration: line-through">506 грн/міс.</div>

                    </template>
                </landing-package>
            </landing-package-row>
        </template>
    </landing>

</template>

<script>
import Page from '../../core/Page'

export default {
    mixins: [Page],
    computed: {

        btnText() {
            return this.show ? 'приховати' : 'а ще входить...'
        },
    },
    data:()=>({
        show: false,
    })
}
</script>