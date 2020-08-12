<template>
    <landing name="dtkt_september2019_2" advantages="epressa_add_dtkt" class="landing-dtkt_september2019_2">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <source :srcset="mix('images/head_10.webp')" type="image/webp">
                            <img :src="mix('images/head_10.jpg')" class="img-fluid" alt="">
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
                <h2 class="landing-title landing-title--columns"><span>Акційна пропозиція діє до 30 вересня</span></h2>
            </div>
        </template>
        <template v-slot:action-due>
            <p class="landing-section__action">Один квартал видо-о-овжується та перетворюється на два квартали! Три місяці 2019 р. у подарунок при передплаті
                «Дебету-Кредиту» на 1-й квартал 2020 р.</p>
         </template>
        <!--<template v-slot:tab>

        </template>-->
       <!-- <template v-slot:tab-radio>
            <input type="radio" checked name="tab" id="tab1">
            <label class="label&#45;&#45;left" for="tab1">ЕКСПЕРТ </label>
            <input type="radio" name="tab" id="tab2">
            <label class="label&#45;&#45;right" for="tab2">ПРОФІ</label>
        </template>-->
        <template v-slot:packages_list>
            <landing-package-row>
                <landing-package article="ep-dtkt_pr_0923">
                    <template v-slot:title>ПРОФІ<br/>та подарунки</template>
                    <template v-slot:gifts>
                        <li>Три місяці передплати «Дебету-Кредиту» <br> (жовтень – грудень 2019 р.)</li>
                        <li>Відеозапис семінару <br> <a href="https://7eminar.com/01082019" target="_blank">«Авто на
                            підприємстві-2019»</a></li>
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
                        <div class="package__old-price" style="text-decoration: line-through">2075 грн</div>
                    </template>
                    <template v-slot:period>
                        <div class="package__new-period" >жовтень 2019 – березень 2020</div>
                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_prp_0923" class="package-plus package-plus-top">
                    <template v-slot:title>ПРОФІ + 7eminar.ua<br/>та подарунки</template>
                    <template v-slot:gifts>
                        <li>Три місяці передплати «Дебету-Кредиту» <br> (жовтень – грудень 2019 р.)</li>
                        <li>Відеозапис семінару <br> <a href="https://7eminar.com/01082019" target="_blank">«Авто на
                            підприємстві-2019»</a></li>
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
                        <div class="package__old-price" style="text-decoration: line-through">4073 грн</div>
                    </template>
                    <template v-slot:period>
                        <div class="package__new-period" >жовтень 2019 – березень 2020</div>
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