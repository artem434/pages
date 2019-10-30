<template>
    <landing name="dtkt_october2019_2" advantages="epressa_add_dtkt" class="landing-dtkt_october2019_2">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                             <picture class="cover__img">
                                 <source :srcset="mix('images/head_02_result.webp')" type="image/webp">
                                 <img :src="mix('images/head_02.jpg')" class="img-fluid" alt="dtkt">
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
                <h2 class="landing-title landing-title--columns"><span>АКЦІЙНА ПРОПОЗИЦІЯ ДІЄ ДО 22 ЖОВТНЯ</span></h2>
            </div>
        </template>
        <template v-slot:action-due>

            <p class="landing-section__action">Повірити складно, але це щира правда! Передплачуйте «Дебет-Кредит» всього від 1 грн/день!</p>

         </template>

        <template v-slot:packages_list>
            <landing-package-row>
                    <landing-package article="ep-dtkt_tr_1610">
                    <template v-slot:title>ПАКЕТ<br>«ТЕМАТИЧНІ РОЗСИЛКИ»
                        <p class="package__price-day"> 1 грн/день</p>
                    </template>
                    <template v-slot:gifts>
                        <li class="no-active">Відеозапис Великого Квартального Семінару </li>

                    </template>
                    <template v-slot:abilities>
                        <li>Регулярні періодичні добірки – у вашій поштовій скрині</li>
                        <li>Обирайте з 12 можливих тем те, що вам зараз дійсно потрібно</li>
                    </template>
                </landing-package>

                    <landing-package article="ep-dtkt_ma_1610" >
                    <template v-slot:title>ПАКЕТ <br> «МІЙ АСИСТЕНТ»
                        <p class="package__price-day"> 1 грн/день</p>
                    </template>

                    <template v-slot:gifts>
                        <li class="no-active">Відеозапис Великого Квартального Семінару </li>

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
                </landing-package>

                    <landing-package article="ep-dtkt_ek_1610" class="package-plus">
                    <template v-slot:title>ПАКЕТ<br>«ЕКСПЕРТ» <br>та подарунок
                        <p class="package__price-day"> 3 грн/день</p>
                    </template>

                    <template v-slot:gifts>
                        <li>Відеозапис <a href="https://7eminar.com/08102019" target="_blank">Великого Квартального Семінару</a> </li>

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
                </landing-package>

            </landing-package-row>
            <landing-package-row>
                <landing-package article="ep-dtkt_pr_1610" class="dddd">
                    <template v-slot:title>ПАКЕТ<br>«ПРОФІ»<br>та подарунок
                        <p class="package__price-day"> 6 грн/день</p>
                    </template>

                    <template v-slot:gifts>
                        <li>Відеозапис <a href="https://7eminar.com/08102019" target="_blank">Великого Квартального Семінару</a> </li>

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
                </landing-package>
                <landing-package article="ep-dtkt_pp_1610" class="package-plus package-plus-top">
                    <template v-slot:title>ПАКЕТ<br>«ПРОФІ + 7eminar.ua»<br>та подарунок
                        <p class="package__price-day"> 10 грн/день</p>
                    </template>

                    <template v-slot:gifts>
                        <li>Відеозапис <a href="https://7eminar.com/08102019" target="_blank">Великого Квартального Семінару</a> </li>

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
                        <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>:  понад 90 курсів та вебінарів для перегляду вже зараз</li>
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