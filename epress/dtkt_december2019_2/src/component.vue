<template>
    <landing name="dtkt_december2019_2" advantages="epressa_add_dtkt" class="landing-dtkt_december2019_2">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                             <picture class="cover__img">
                                 <source :srcset="mix('images/new_year_3.webp')" type="image/webp">
                                 <img :src="mix('images/new_year_3.jpg')" class="img-fluid" alt="coffe">
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
                <landing-package :article="tab =='6' ?  'ep-dtkt_ek_1012' : 'ep-dtkt_ek_1312'">
                    <template v-slot:title>
                        <span v-if="tab =='6'">ЕКСПЕРТ<br>та подарунок</span>
                        <span v-else>ЕКСПЕРТ<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">січень - грудень 2020 року</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
                        <li :class="{'no-active' : tab =='6' }"><a href="https://www.youtube.com/watch?v=CETG9ts_fmk&feature=" target="_blank">робот-пилосос для сухого <br> та вологого прибирання</a></li>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">2597 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">6596 грн</div>
                    </template>
                </landing-package>

                <landing-package :article="tab =='6' ?  'ep-dtkt_ek_1012p' : 'ep-dtkt_ek_1312p'">
                    <template v-slot:title>
                        <span v-if="tab =='6'">ЕКСПЕРТ + 7eminar.ua<br>та подарунок</span>
                        <span v-else>ЕКСПЕРТ + 7eminar.ua<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">січень - грудень 2020 року</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
                        <li :class="{'no-active' : tab =='6' }"><a href="https://www.youtube.com/watch?v=CETG9ts_fmk&feature=" target="_blank">робот-пилосос для сухого <br> та вологого прибирання</a></li>
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
                            <br> (січень – грудень 2020 р.)</li>
                    </template>
                    <template v-slot:old-price>
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">4596 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">8595 грн</div>
                    </template>
                </landing-package>

                <landing-package :article="tab =='6' ?  'ep-dtkt_pr_1012' : 'ep-dtkt_pr_1312'">
                    <template v-slot:title>
                        <span v-if="tab =='6'">ПРОФІ<br>та подарунок</span>
                        <span v-else>ПРОФІ<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">січень - грудень 2020 року</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
                        <li :class="{'no-active' : tab =='6' }"><a href="https://www.youtube.com/watch?v=CETG9ts_fmk&feature=" target="_blank">робот-пилосос для сухого <br> та вологого прибирання</a></li>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">3786 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">7785 грн</div>
                    </template>
                </landing-package>

                <landing-package :article="tab =='6' ?  'ep-dtkt_pp_1012' : 'ep-dtkt_pp_1312'" class="package-plus package-plus-top">
                    <template v-slot:title>
                        <span v-if="tab =='6'">ПРОФІ + 7eminar.ua<br>та подарунок</span>
                        <span v-else>ПРОФІ + 7eminar.ua<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">січень - грудень 2020 року</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
                        <li :class="{'no-active' : tab =='6' }"><a href="https://www.youtube.com/watch?v=CETG9ts_fmk&feature=" target="_blank">робот-пилосос для сухого <br> та вологого прибирання</a></li>
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
                            <br> (січень – грудень 2020 р.)</li>
                    </template>
                    <template v-slot:old-price>
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">5586 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">9585 грн</div>
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