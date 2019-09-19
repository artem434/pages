<template>
    <landing name="dtkt_september2019_1" advantages="epressa_add_dtkt" class="landing-dtkt_september2019_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                           <!-- <picture class="cover__img"><source srcset="/storage/pages/65_dtkt_september2019_1/images/head_10_gif.webp?id=284d6b122e69d65566e7" type="image/webp"> <img src="/storage/pages/65_dtkt_september2019_1/images/head_10_gif.gif?id=f26811f96e19aa835067" alt="" class="img-fluid"></picture>-->
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
                <h2 class="landing-title landing-title--columns"><span>Акційна пропозиція діє до 20 вересня</span></h2>
            </div>
        </template>
        <template v-slot:action-due>
            <p class="landing-section__action">Осінній КотоФей прийшов не з порожніми лапками! Передплатіть «Дебет-Кредит» зі знижкою 50% та отримайте у подарунок відеозапис семінару «Все про ПДВ», а ще осінній шарф або парасольку.</p>
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
                <landing-package article="ep-dtkt_ek_0911">
                    <template v-slot:title>ЕКСПЕРТ<br>та подарунок</template>
                    <template v-slot:gifts>
                        <li>Осінній шарф</li>
                        <li class="no-active">Парасолька</li>
                        <li class="no-active">Відеозапис семінару <br> «Все про ПДВ»</li>
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
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">1832 грн</div>
                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_ekp_0911" class="package-plus package-plus-recommend">
                    <template v-slot:title>ЕКСПЕРТ + 7eminar.ua <br>та подарунки</template>
                    <template v-slot:gifts>
                        <li >Осінній шарф</li>
                        <li class="no-active">Парасолька</li>
                        <li>Відеозапис семінару <br> <a href="https://7eminar.com/10092019" target="_blank">«Все про ПДВ»</a></li>
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
                        <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 120 курсів та вебінарів для перегляду протягом 2020 р.</li>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">6727 грн</div>
                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_pr_0911">
                    <template v-slot:title>ПРОФІ<br/>та подарунок</template>
                    <template v-slot:gifts>
                        <li class="no-active" >Осінній шарф</li>
                        <li>Парасолька</li>
                        <li class="no-active">Відеозапис семінару <br>«Все про ПДВ»</li>
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
                        <div class="package__old-price" style="text-decoration: line-through">3288 грн</div>
                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_prp_0911" class="package-plus package-plus-top">
                    <template v-slot:title>ПРОФІ + 7eminar.ua<br/>та подарунки</template>
                    <template v-slot:gifts>
                        <li class="no-active" >Осінній шарф</li>
                        <li >Парасолька</li>
                        <li>Відеозапис семінару <br> <a href="https://7eminar.com/10092019" target="_blank">«Все про ПДВ»</a></li>
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
                        <div class="package__old-price" style="text-decoration: line-through">8183 грн</div>
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