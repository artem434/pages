<template>
    <landing name="dtkt_august2019_2" advantages="epressa_add_dtkt" class="landing-dtkt_august2019_2">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                             <picture class="cover__img">
                                 <source src="https://e-pressa.com/storage/pages/39_dtkt_august2019_2/images/head.webp" type="image/webp">
                                 <img src="https://e-pressa.com/storage/pages/39_dtkt_august2019_2/images/head.gif" class="img-fluid" alt="">
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
                <h2 class="landing-title landing-title--columns"><span>акційна пропозиція діє до 30 серпня</span></h2>
            </div>
        </template>
        <template v-slot:action-due>

            <p class="landing-section__action">Передплатіть бухгалтерський сервіс «Дебет-Кредит» на 2020 рік зі знижкою 54% та отримайте у подарунок електрочайник і відеозапис семінару «Автомобіль на підприємстві-2019».</p>

         </template>
        <template v-slot:tab>

        </template>
        <template v-slot:tab-radio>

            <input type="radio" checked name="tab" id="tab1">
            <label class="label--left" for="tab1">ЕКСПЕРТ </label>
            <input type="radio" name="tab" id="tab2">
            <label class="label--right" for="tab2">ПРОФІ</label>
        </template>
        <template v-slot:packages_list>
            <landing-package-row>
                    <landing-package article="ep-dtkt_ek_0827">
                        <template v-slot:title>ЕКСПЕРТ<br>та 1 подарунок</template>
                        <template v-slot:gifts>
                            <li>Відеозапис семінару <br> <a href="https://7eminar.com/01082019" target="_blank">«Автомобіль на
                                підприємстві-2019»</a></li>
                            <li class="no-active">Електрочайник </li>
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
                            <div class="" style="text-decoration: line-through">2831 грн</div>
                        </template>
                    </landing-package>

                    <landing-package article="ep-dtkt_ek_0827_g" class="package-plus package-plus-recommend">
                        <template v-slot:title>ЕКСПЕРТ <br>та 2 подарунки</template>
                        <template v-slot:gifts>
                            <li>Відеозапис семінару <br> <a href="https://7eminar.com/01082019" target="_blank">«Автомобіль на
                                підприємстві-2019»</a></li>
                            <li> <a href="https://www.aks.ua/item/view/336744/elektrochainik-liberton-lek-1751-black.html" target="_blank">Електрочайник</a></li>
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
                            <div class="" style="text-decoration: line-through">3431 грн</div>
                        </template>
                    </landing-package>

                    <landing-package article="ep-dtkt_ekp_0827">
                        <template v-slot:title>ЕКСПЕРТ + 7eminar.ua<br/> та 1 подарунок</template>
                        <template v-slot:gifts>
                            <li>Відеозапис семінару <br> <a href="https://7eminar.com/01082019" target="_blank">«Автомобіль на
                                підприємстві-2019»</a></li>
                            <li class="no-active">Електрочайник</li>
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
                            <div class="" style="text-decoration: line-through">6827 грн</div>
                        </template>
                    </landing-package>

                    <landing-package article="ep-dtkt_ekp_0827_g" class="package-plus package-plus-top">
                        <template v-slot:title>ЕКСПЕРТ + 7eminar.ua<br/> та 2 подарунки</template>
                        <template v-slot:gifts>
                            <li>Відеозапис семінару <br> <a href="https://7eminar.com/01082019" target="_blank">«Автомобіль на
                                підприємстві-2019»</a></li>
                            <li><a href="https://www.aks.ua/item/view/336744/elektrochainik-liberton-lek-1751-black.html" target="_blank">Електрочайник</a></li>
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
                            <div class="" style="text-decoration: line-through">7427 грн</div>
                        </template>
                    </landing-package>
            </landing-package-row>
            <landing-package-row>
                <landing-package article="ep-dtkt_pr_0827">
                    <template v-slot:title>ПРОФІ<br>та 1 подарунок</template>
                    <template v-slot:gifts>
                        <li>Відеозапис семінару <br> <a href="https://7eminar.com/01082019" target="_blank">«Автомобіль на
                            підприємстві-2019»</a></li>
                        <li class="no-active">Електрочайник</li>
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
                        <div class="" style="text-decoration: line-through">4187 грн</div>
                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_pr_0827_g" class="package-plus package-plus-recommend">
                    <template v-slot:title>ПРОФІ <br>та 2 подарунки</template>
                    <template v-slot:gifts>
                        <li>Відеозапис семінару <br> <a href="https://7eminar.com/01082019" target="_blank">«Автомобіль на
                            підприємстві-2019»</a></li>
                        <li> <a href="https://www.aks.ua/item/view/336744/elektrochainik-liberton-lek-1751-black.html" target="_blank">Електрочайник</a></li>
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
                        <div class="" style="text-decoration: line-through">4787 грн</div>
                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_prp_0827">
                    <template v-slot:title>ПРОФІ + 7eminar.ua<br/> та 1 подарунок</template>
                    <template v-slot:gifts>
                        <li>Відеозапис семінару <br> <a href="https://7eminar.com/01082019" target="_blank">«Автомобіль на
                            підприємстві-2019»</a></li>
                        <li class="no-active">Електрочайник</li>
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
                        <div class="" style="text-decoration: line-through">8183 грн</div>
                    </template>
                </landing-package>

                <landing-package article="ep-dtkt_prp_0827_g" class="package-plus package-plus-top">
                    <template v-slot:title>ПРОФІ + 7eminar.ua<br/> та 2 подарунки</template>
                    <template v-slot:gifts>
                        <li>Відеозапис семінару <br> <a href="https://7eminar.com/01082019" target="_blank">«Автомобіль на
                            підприємстві-2019»</a></li>
                        <li><a href="https://www.aks.ua/item/view/336744/elektrochainik-liberton-lek-1751-black.html" target="_blank">Електрочайник</a></li>
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
                        <div class="" style="text-decoration: line-through">8783 грн</div>
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