<template>
    <landing name="dtkt_november2019_1" advantages="epressa_add_dtkt" class="landing-dtkt_november2019_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                             <picture class="cover__img">
                                 <source :srcset="mix('images/arnold.webp')" type="image/webp">
                                 <img :src="mix('images/arnold.jpg')" class="img-fluid" alt="coffe">
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
                <h2 class="landing-title landing-title--columns"><span>АКЦІЙНА ПРОПОЗИЦІЯ ДІЄ ДО 22 ЛИСТОПАДА</span></h2>
            </div>
        </template>
        <template v-slot:action-due>

            <p class="landing-section__action">Найнижчі ціни на передплату «Дебету-Кредиту» та подарунки – квиток до залу на Великий Кадровий Семінар і ПКУ.</p>

         </template>
        <template v-slot:tab-radio>
            <div class="tab-content"> <label class="label" :class="{active: tab ==='6'}" @click="tab = '6'">6 місяців </label> <label class="label" :class="{active: tab ==='12'}" @click="tab = '12'">12 місяців </label></div>
        </template>
        <template v-slot:packages_list>
            <landing-package-row v-show="tab ==='6'">
                    <landing-package article="ep-dtkt_ek_1311" >
                        <template v-slot:title>ЕКСПЕРТ<br>та подарунок</template>
                        <template v-slot:period><div class="period">січень – червень 2020</div> </template>
                        <template v-slot:gifts>
                            <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                            <li class="no-active">Податковий кодекс України <br> (у друк. вигляді) <br> станом на 1 січня 2020 р.</li>
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
                            <div class="package__old-price" style="text-decoration: line-through">1910 грн</div>
                        </template>
                    </landing-package>



                    <landing-package article="ep-dtkt_ek_1311p" class="package-plus">
                        <template v-slot:title>ЕКСПЕРТ + 7eminar.ua<br>та подарунок</template>
                        <template v-slot:period><div class="period">січень – червень 2020</div> </template>
                        <template v-slot:gifts>
                            <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                            <li class="no-active">Податковий кодекс України <br> (у друк. вигляді) <br> станом на 1 січня 2020 р.</li>
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
                                <br> (січень – червень 2020 р.)</li>
                        </template>
                        <template v-slot:old-price>
                            <div class="package__old-price" style="text-decoration: line-through">2909 грн</div>
                        </template>
                    </landing-package>

                <landing-package article="ep-dtkt_pr_1311">
                    <template v-slot:title>ПРОФІ<br>та подарунки</template>
                    <template v-slot:period><div class="period">січень – червень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li>Податковий кодекс України <br> (у друк. вигляді) <br> станом на 1 січня 2020 р.</li>
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
                        <div class="package__old-price" style="text-decoration: line-through">2788 грн</div>
                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_pp_1311" class="package-plus package-plus-top">
                    <template v-slot:title>ПРОФІ + 7eminar.ua<br>та подарунки</template>
                    <template v-slot:period><div class="period">січень – червень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li>Податковий кодекс України <br> (у друк. вигляді) <br> станом на 1 січня 2020 р.</li>
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
                            <br> (січень – червень 2020 р.)</li>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">3688 грн</div>
                    </template>
                </landing-package>

            </landing-package-row>
            <landing-package-row v-show="tab ==='12'" class="landing-package__twele">
                <landing-package article="ep-dtkt_ek_13112" >
                    <template v-slot:title>ЕКСПЕРТ<br>та подарунок</template>
                    <template v-slot:period><div class="period">січень – грудень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li class="no-active">Податковий кодекс України <br> (у друк. вигляді) <br> станом на 1 січня 2020 р.</li>

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
                        <div class="package__old-price" style="text-decoration: line-through">2786 грн</div>
                    </template>
                </landing-package>



                <landing-package article="ep-dtkt_ek_1311p1" class="package-plus">
                    <template v-slot:title>ЕКСПЕРТ + 7eminar.ua<br>та подарунок</template>
                    <template v-slot:period><div class="period">січень – грудень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li class="no-active">Податковий кодекс України <br> (у друк. вигляді) <br> станом на 1 січня 2020 р.</li>
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
                        <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 120 курсів та вебінарів для перегляду протягом 2020 р.</li>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">4784 грн</div>
                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_pr_13112">
                    <template v-slot:title>ПРОФІ<br>та подарунки</template>
                    <template v-slot:period><div class="period">січень – грудень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li>Податковий кодекс України <br> (у друк. вигляді) <br> станом на 1 січня 2020 р.</li>
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
                        <div class="package__old-price" style="text-decoration: line-through">4282 грн</div>
                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_pp_13112" class="package-plus package-plus-top">
                    <template v-slot:title>ПРОФІ + 7eminar.ua<br>та подарунки</template>
                    <template v-slot:period><div class="period">січень – грудень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li>Податковий кодекс України <br> (у друк. вигляді) <br> станом на 1 січня 2020 р.</li>
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
                        <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 120 курсів та вебінарів для перегляду протягом 2020 р.</li>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">6082 грн</div>
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