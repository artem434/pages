<template>
    <landing name="dtkt_october2019_1" advantages="epressa_add_dtkt" class="landing-dtkt_october2019_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                             <picture class="cover__img">
                                 <source :srcset="mix('images/head_coffe.webp')" type="image/webp">
                                 <img :src="mix('images/head_coffe.jpg')" class="img-fluid" alt="coffe">
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
                <h2 class="landing-title landing-title--columns"><span>АКЦІЙНА ПРОПОЗИЦІЯ ДІЄ ДО 11 ЖОВТНЯ</span></h2>
            </div>
        </template>
        <template v-slot:action-due>

            <p class="landing-section__action">Немає роботи без кави! Отримайте все необхідне для створення ідеальної атмосфери, передплативши бухгалтерський сервіс «Дебет-Кредит».</p>

         </template>

        <template v-slot:packages_list>
            <landing-package-row>
                    <landing-package article="ep-dtkt_ek_1004" >
                        <template v-slot:title>ЕКСПЕРТ<br>та подарунок</template>
                        <template v-slot:period><div class="period">січень – червень 2020</div> </template>
                        <template v-slot:gifts>
                            <li>online-трансляція та запис<br> <a href="https://7eminar.com/08102019" target="_blank">Великого Квартального Семінару</a></li>
                            <li class="no-active">гейзерна кавоварка</li>
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
                            <div class="package__old-price" style="text-decoration: line-through">1813 грн</div>
                        </template>
                    </landing-package>



                    <landing-package article="ep-dtkt_ekp_1004" class="package-plus">
                        <template v-slot:title>ЕКСПЕРТ + 7eminar.ua<br>та подарунок</template>
                        <template v-slot:period><div class="period">січень – червень 2020</div> </template>
                        <template v-slot:gifts>
                            <li>online-трансляція та запис<br> <a href="https://7eminar.com/08102019" target="_blank">Великого Квартального Семінару</a></li>
                            <li class="no-active">гейзерна кавоварка</li>
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
                            <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 90 курсів та вебінарів для перегляду (січень – червень 2020 р.)</li>
                        </template>
                        <template v-slot:old-price>
                            <div class="package__old-price" style="text-decoration: line-through">3811 грн</div>
                        </template>
                    </landing-package>

                <landing-package article="ep-dtkt_pr_1004">
                    <template v-slot:title>ПРОФІ<br>та подарунки</template>
                    <template v-slot:period><div class="period">січень – червень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>online-трансляція та запис<br> <a href="https://7eminar.com/08102019" target="_blank">Великого Квартального Семінару</a></li>
                        <li><a href="https://rozetka.com.ua/maestro_mr_1667_6/p10017018/" target="_blank"> гейзерна кавоварка</a></li>
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
                        <div class="package__old-price" style="text-decoration: line-through">2691 грн</div>
                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_prp_1004" class="package-plus package-plus-top">
                    <template v-slot:title>ПРОФІ + 7eminar.ua<br>та подарунки</template>
                    <template v-slot:period><div class="period">січень – червень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>online-трансляція та запис<br> <a href="https://7eminar.com/08102019" target="_blank">Великого Квартального Семінару</a></li>
                        <li><a href="https://rozetka.com.ua/maestro_mr_1667_6/p10017018/" target="_blank"> гейзерна кавоварка</a></li>
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
                        <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>:  понад 90 курсів та вебінарів для перегляду (січень – червень 2020 р.)</li>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">4689 грн</div>
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