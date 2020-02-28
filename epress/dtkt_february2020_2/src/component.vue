<template>
    <landing name="dtkt_february2020_2" advantages="epressa_add_dtkt" class="landing-dtkt_february2020_2">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                             <picture class="cover__img">
                                 <source :srcset="mix('images/head1.webp')" type="image/webp">
                                 <img :src="mix('images/head1.jpg')" class="img-fluid" alt="">

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
                <h2 class="landing-title landing-title--columns"><span>{{ page.options['order_title']}}</span></h2>
            </div>
        </template>
        <template v-slot:action-due>
            <p class="landing-section__action">{{ page.options['order_action']}}</p>
        </template>
        <template v-slot:tab-radio>
            <div class="tab-content"> <label class="label" :class="{active: tab ==='6'}" @click="tab = '6'">+ 1 подарунок </label> <label class="label" :class="{active: tab ==='12'}" @click="tab = '12'">+ 2 подарунки</label></div>
        </template>
        <template v-slot:packages_list>
            <landing-package-row >
                <landing-package :article="tab =='6' ?  'ep-dtkt_ek_1392' : 'ep-dtkt_ek_2792'" class="packages__column--one">
                    <template v-slot:title>
                        <span v-if="tab =='6'">ЕКСПЕРТ<br>та подарунок</span>
                        <span v-else>ЕКСПЕРТ<br>та подарунки</span>
                    </template>
                    <template v-slot:period>
                        <div class="period">лютий 2020 - січень 2021</div>
                    </template>
                    <template v-slot:gifts>
                        <li > Податковий кодекс України (дата виходу – 31.03.2020, <br> з урахуванням усіх змін)</li>
                        <li v-if="tab =='6'"  class="no-active">Потужна електром'ясорубка</li>
                        <li v-else >Потужна електром'ясорубка</li>
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
                        <li class="package__abilities-item--noactive">Сервіс «Постав запитання редакції»</li>
                        <li class="package__abilities-item--noactive">Вебінари редакції</li>
                        <li class="package__abilities-item--noactive">Велика настільна книга</li>
                        <li class="package__abilities-item--noactive">Звітність у «СОТА»</li>
                    </template>
                    <template v-slot:old-price>
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">1931 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">4491 грн</div>
                    </template>
                </landing-package>

                <landing-package :article="tab =='6' ?  'ep-dtkt_ekp_3391' : 'ep-dtkt_ekp_4791'"  class="packages__column--two">
                    <template v-slot:title>
                        <span v-if="tab =='6'">ЕКСПЕРТ + 7eminar.ua<br>та подарунок</span>
                        <span v-else>ЕКСПЕРТ + 7eminar.ua<br>та подарунки</span>
                    </template>
                    <template v-slot:period>
                        <div class="period">лютий 2020 - січень 2021</div>
                    </template>
                    <template v-slot:gifts>
                        <li > Податковий кодекс України (дата виходу – 31.03.2020, <br> з урахуванням усіх змін)</li>
                        <li v-if="tab =='6'"  class="no-active">Потужна електром'ясорубка</li>
                        <li v-else >Потужна електром'ясорубка</li>
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
                        <li class="package__abilities-item--noactive">Сервіс «Постав запитання редакції»</li>
                        <li class="package__abilities-item--noactive">Вебінари редакції</li>
                        <li class="package__abilities-item--noactive">Велика настільна книга</li>
                        <li class="package__abilities-item--noactive">Звітність у «СОТА»</li>
                        <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 120 курсів та вебінарів для перегляду
                            <br><span  > (лютий 2020 - січень 2021)</span> </li>
                    </template>
                    <template v-slot:old-price>
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">3930 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">6490 грн</div>
                    </template>
                </landing-package>

                <landing-package :article="tab =='6' ?  'ep-dtkt_pr_2292' : 'ep-dtkt_pr_3692'" class="packages__column--three">
                    <template v-slot:title>
                        <span v-if="tab =='6'">ПРОФІ<br>та подарунок</span>
                        <span v-else>ПРОФІ<br>та подарунки</span>
                    </template>
                    <template v-slot:period>
                        <div class="period">лютий 2020 - січень 2021</div>
                    </template>
                    <template v-slot:gifts>
                        <li > Податковий кодекс України (дата виходу – 31.03.2020, <br> з урахуванням усіх змін)</li>
                        <li v-if="tab =='6'"  class="no-active">Потужна електром'ясорубка</li>
                        <li v-else >Потужна електром'ясорубка</li>
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
                    <template v-slot:old-price>
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">3287 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">5391 грн</div>
                    </template>
                </landing-package>

                <landing-package :article="tab =='6' ?  'ep-dtkt_pp_3996' : 'ep-dtkt_pp_5396'" class="package-plus package-plus-top">
                    <template v-slot:title>

                        <span v-if="tab =='6'" >ПРОФІ + 7eminar.ua<br>та подарунок</span>
                        <span v-else>ПРОФІ + 7eminar.ua<br>та подарунки</span>
                    </template>
                    <template v-slot:period>
                        <div class="period">лютий 2020 - січень 2021</div>
                    </template>
                    <template v-slot:gifts>
                        <li > Податковий кодекс України (дата виходу – 31.03.2020, <br> з урахуванням усіх змін)</li>
                        <li v-if="tab =='6'"  class="no-active">Потужна електром'ясорубка</li>
                        <li v-else >Потужна електром'ясорубка</li>
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
                        <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 120 курсів та вебінарів для перегляду
                            <br><span  > (лютий 2020 - січень 2021)</span> </li>
                    </template>
                    <template v-slot:old-price>
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">5286 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">7095 грн</div>
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
    data:()=>({
        tab: '12'
    })
}
</script>