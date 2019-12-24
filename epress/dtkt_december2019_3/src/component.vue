<template>
    <landing name="dtkt_december2019_3" advantages="epressa_add_dtkt" class="landing-dtkt_december2019_3">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                             <picture class="cover__img">
                                 <source :srcset="mix('images/head_01_webp.webp')" type="image/webp">
                                 <img :src="mix('images/head_01.jpg')" class="img-fluid" alt="coffe">
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

        <template v-slot:packages_list>
            <landing-package-row >
                <landing-package article="ep-dtkt_ek_2312">
                    <template v-slot:title>

                        <span>ЕКСПЕРТ<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">січень - грудень 2020 року</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на <a href="https://7eminar.com/23012020" target="_blank">Великий Річний Семінар (23.01.2020)</a> </li>
                        <li class="no-active">powerbank для леді</li>
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

                        <div   class="package__old-price" style="text-decoration: line-through">2930 грн</div>
                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_ek_2312p">
                    <template v-slot:title>

                        <span>ЕКСПЕРТ + 7eminar.ua<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">січень - грудень 2020 року</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на <a href="https://7eminar.com/23012020" target="_blank">Великий Річний Семінар (23.01.2020)</a> </li>
                        <li class="no-active">powerbank для леді</li>
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

                        <div  class="package__old-price" style="text-decoration: line-through">4934 грн</div>
                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_pr_2312">
                    <template v-slot:title>

                        <span >ПРОФІ<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">січень - грудень 2020 року</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на <a href="https://7eminar.com/23012020" target="_blank">Великий Річний Семінар (23.01.2020)</a> </li>
                        <li><a href="https://www.club-cdma.com.ua/power-bank-remax-lipmax-rpl-12-2400-mah/" target="_blank">powerbank</a> для леді</li>
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

                        <div   class="package__old-price" style="text-decoration: line-through">4286 грн</div>
                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_pp_2312" class="package-plus package-plus-top">
                    <template v-slot:title>

                        <span >ПРОФІ + 7eminar.ua<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">січень - грудень 2020 року</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на <a href="https://7eminar.com/23012020" target="_blank">Великий Річний Семінар (23.01.2020)</a> </li>
                        <li><a href="https://www.club-cdma.com.ua/power-bank-remax-lipmax-rpl-12-2400-mah/" target="_blank">powerbank</a> для леді</li>

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

                        <div  class="package__old-price" style="text-decoration: line-through">6086 грн</div>
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

}
</script>