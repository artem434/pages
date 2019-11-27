<template>
    <landing name="dtkt_november2019_3" advantages="epressa_add_dtkt" class="landing-dtkt_november2019_3">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                             <picture class="cover__img">
                                 <source :srcset="mix('images/head_03_dk_webp.webp')" type="image/webp">
                                 <img :src="mix('images/head_03_dk.jpg')" class="img-fluid" alt="coffe">
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
            <div class="tab-content"> <label class="label" :class="{active: tab ==='6'}" @click="tab = '6'">+ 1 подарунок </label> <label class="label" :class="{active: tab ==='12'}" @click="tab = '12'">+ 2 подарунки </label></div>
        </template>
        <template v-slot:packages_list>
            <landing-package-row >

                <landing-package :article="tab =='6' ?  'ep-dtkt_ek_2711' : 'ep-dtkt_ek_2711_g'">
                        <template v-slot:title>
                            <span v-if="tab =='6'">ЕКСПЕРТ<br>та подарунок</span>
                            <span v-else>ЕКСПЕРТ<br>та подарунки</span>
                          </template>
                        <template v-slot:period><div class="period">грудень 2019 – лютий 2020</div> </template>
                        <template v-slot:gifts>
                            <li>відеозапис<br> <a href="https://7eminar.com/06112019" target="_blank">Великого Семінару із Заробітної Плати</a></li>
                            <li :class="{'no-active' : tab =='6' }">сертифікат номіналом <br>
                                1000 грн на вибір:
                                <ul class="package__presents-sub-list">
                                    <li :class="{'no-active' : tab =='6' }">
                                        <span>Розетка</span>
                                    </li>
                                    <li :class="{'no-active' : tab =='6' }">
                                        <span>Brocard</span>
                                    </li>
                                    <li :class="{'no-active' : tab =='6' }">
                                        <span>Будинок іграшок</span>
                                    </li>
                                </ul>
                            </li>
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
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">906 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">2606 грн</div>
                        </template>
                    </landing-package>

                <landing-package :article="tab =='6' ?  'ep-dtkt_ek_2711p' : 'ep-dtkt_ek_2711pg'">
                        <template v-slot:title>
                            <span v-if="tab =='6'">ЕКСПЕРТ + 7eminar.ua<br>та подарунок</span>
                            <span v-else>ЕКСПЕРТ + 7eminar.ua<br>та подарунки</span>
                        </template>
                    <template v-slot:period><div class="period">грудень 2019 – лютий 2020</div> </template>
                    <template v-slot:gifts>
                        <li>відеозапис<br> <a href="https://7eminar.com/06112019" target="_blank">Великого Семінару із Заробітної Плати</a></li>
                        <li :class="{'no-active' : tab =='6' }">сертифікат номіналом <br>
                            1000 грн на вибір:
                            <ul class="package__presents-sub-list">
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Розетка</span>
                                </li>
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Brocard</span>
                                </li>
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Будинок іграшок</span>
                                </li>
                            </ul>
                        </li>
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
                                <br> (грудень – лютий 2020 р.)</li>
                        </template>
                        <template v-slot:old-price>
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">1419 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">3119 грн</div>
                        </template>
                    </landing-package>

                <landing-package :article="tab =='6' ?  'ep-dtkt_pr_2711' : 'ep-dtkt_pr_2711_g'">
                    <template v-slot:title>
                        <span v-if="tab =='6'">ПРОФІ<br>та подарунок</span>
                        <span v-else>ПРОФІ<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">грудень 2019 – лютий 2020</div> </template>
                    <template v-slot:gifts>
                        <li>відеозапис<br> <a href="https://7eminar.com/06112019" target="_blank">Великого Семінару із Заробітної Плати</a></li>
                        <li :class="{'no-active' : tab =='6' }">сертифікат номіналом <br>
                            1000 грн на вибір:
                            <ul class="package__presents-sub-list">
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Розетка</span>
                                </li>
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Brocard</span>
                                </li>
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Будинок іграшок</span>
                                </li>
                            </ul>
                        </li>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">1245 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">2945 грн</div>
                    </template>
                </landing-package>

                <landing-package :article="tab =='6' ?  'ep-dtkt_pp_2711' : 'ep-dtkt_pp_2711_g'" class="package-plus package-plus-top">
                    <template v-slot:title>
                        <span v-if="tab =='6'">ПРОФІ + 7eminar.ua<br>та подарунок</span>
                        <span v-else>ПРОФІ + 7eminar.ua<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">грудень 2019 – лютий 2020</div> </template>
                    <template v-slot:gifts>
                        <li>відеозапис<br> <a href="https://7eminar.com/06112019" target="_blank">Великого Семінару із Заробітної Плати</a></li>
                        <li :class="{'no-active' : tab =='6' }">сертифікат номіналом <br>
                            1000 грн на вибір:
                            <ul class="package__presents-sub-list">
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Розетка</span>
                                </li>
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Brocard</span>
                                </li>
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Будинок іграшок</span>
                                </li>
                            </ul>
                        </li>
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
                        <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>:  понад 120 курсів та вебінарів для перегляду
                            <br> (грудень – лютий 2020 р.)</li>
                    </template>
                    <template v-slot:old-price>
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">1695 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">3395 грн</div>
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