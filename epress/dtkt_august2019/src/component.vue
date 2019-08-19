<template>
    <landing name="dtkt_august2019" advantages="epressa_add_dtkt" class="landing-dtkt_august2019">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container">
                        <div class="cover">
                             <picture class="cover__img">
                                 <source :srcset="mix('images/ezgif.com-gif-to-webp.webp')" type="image/webp">
                                 <img :src="mix('images/dtkt_head.gif')" class="img-fluid" alt="">
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
                <h2 class="landing-title landing-title--columns"><span>акційна пропозиція діє до 23 серпня</span></h2>
            </div>
        </template>
        <template v-slot:action-due>
            <p class="landing-section__action">Передплатіть бухгалтерський сервіс «Дебет-Кредит» на 2020 рік зі знижкою 54% та отримайте у подарунок портативну
                стерео-колонку і відеозапис семінару «Автомобіль на підприємстві-2019».</p>
         </template>
        <template v-slot:packages_list>
            <landing-package-row>

                    <landing-package article="ep-dtkt_ek_0819">
                        <template v-slot:title>ЕКСПЕРТ<br>та подарунок</template>
                        <template v-slot:gifts>
                            <li>Відеозапис семінару <br> <a href="https://7eminar.com/01082019" target="_blank">«Автомобіль на
                                підприємстві-2019»</a></li>
                            <li class="no-active">Стерео-колонка <br> T&G Charge 2 mini</li>
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
                            <div class="" style="text-decoration: line-through">2831 грн</div>
                        </template>
                    </landing-package>

                    <landing-package article="ep-dtkt_ek_0819_g" class="package-plus package-plus-recommend">
                        <template v-slot:title>ЕКСПЕРТ <br>та подарунки</template>
                        <template v-slot:gifts>
                            <li>Відеозапис семінару <br> <a href="https://7eminar.com/01082019" target="_blank">«Автомобіль на
                                підприємстві-2019»</a></li>
                            <li>Стерео-колонка <br> <a href="/" target="_blank">T&G Charge 2 mini</a></li>
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
                            <div class="" style="text-decoration: line-through">3681 грн</div>
                        </template>
                    </landing-package>

                    <landing-package article="ep-dtkt_ekp_0819">
                        <template v-slot:title>ЕКСПЕРТ + 7eminar.ua<br/> та подарунок</template>
                        <template v-slot:gifts>
                            <li>Відеозапис семінару <br> <a href="https://7eminar.com/01082019" target="_blank">«Автомобіль на
                                підприємстві-2019»</a></li>
                            <li class="no-active">Стерео-колонка <br> T&G Charge 2 mini</li>
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
                            <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a> понад 120 курсів та вебінарів для перегляду протягом 2020 р</li>
                        </template>
                        <template v-slot:old-price>
                            <div class="" style="text-decoration: line-through">6827 грн</div>
                        </template>
                    </landing-package>

                    <landing-package article="ep-dtkt_ekp_0819_g" class="package-plus package-plus-top">
                        <template v-slot:title>ЕКСПЕРТ + 7eminar.ua<br/> та подарунки</template>
                        <template v-slot:gifts>
                            <li>Відеозапис семінару <br> <a href="https://7eminar.com/01082019" target="_blank">«Автомобіль на
                                підприємстві-2019»</a></li>
                            <li>Стерео-колонка <br> <a href="/" target="_blank">T&G Charge 2 mini</a></li>
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
                            <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a> понад 120 курсів та вебінарів для перегляду протягом 2020 р</li>
                        </template>
                        <template v-slot:old-price>
                            <div class="" style="text-decoration: line-through">7677 грн</div>
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