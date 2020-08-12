<template>
    <landing name="interbuh_november2019_1" advantages="epressa_add_interbuh" class="landing-interbuh_november2019_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/black_f_IB.webp')" type="image/webp">
                                <img :src="mix('images/black_f_IB.jpg')" class="img-fluid" alt="coffe">
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
                <h2 class="landing-title landing-title--columns"><span>АКЦІЙНА ПРОПОЗИЦІЯ ДІЄ ТІЛЬКИ 15 ЛИСТОПАДА! </span></h2>

            </div>
        </template>
        <template v-slot:action-due>

            <p class="landing-section__action">Передплачуйте бухгалтерський сервіс «Інтерактивна бухгалтерія» із особливою чорноп’ятничною знижкою 73% та отримайте подарунки: відеозапис семінару про авто та курс про П(с)БО!</p>

        </template>
        <template v-slot:tab-radio>
            <div class="tab-content"> <label class="label" :class="{active: tab ==='6'}" @click="tab = '6'">6 місяців </label> <label class="label" :class="{active: tab ==='12'}" @click="tab = '12'">12 місяців </label></div>
        </template>
        <template v-slot:packages_list>
            <landing-package-row v-show="tab ==='6'">
                <landing-package article="ep-interbuh_st_1511">
                    <template v-slot:title>ТАРИФ<br>«СТАНДАРТ»<br>та подарунки</template>
                    <template v-slot:period><div class="period">листопад 2019 - квітень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>Відеозапис семінару  <a href="https://7eminar.com/01082019" target="_blank">"Автомобіль на підприємстві-2019"</a></li>
                        <li class="no-active">Відеозапис курсу  "П(с)БО від А до Я"</li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна електронна газета – аналітика та новини</li>
                        <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                        <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                        <li>Тематичні спецвипуски</li>
                        <li>Календар бухгалтера</li>
                        <li>Онлайн-сервіс «Мої документи»</li>
                        <li>Послуга «Особистий асистент»</li>
                        <li>Електронний архів номерів з 2012 року</li>
                        <li>Вебінари щомісяця</li>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">2639 грн</div>
                    </template>
                </landing-package>
                <landing-package article="ep-interbuh_pr_1511">
                    <template v-slot:title>ТАРИФ<br>«ПРЕМІУМ»<br>та подарунки</template>
                    <template v-slot:period><div class="period">листопад 2019 - квітень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>Відеозапис семінару  <a href="https://7eminar.com/01082019" target="_blank">"Автомобіль на підприємстві-2019"</a></li>
                        <li class="no-active">Відеозапис курсу  "П(с)БО від А до Я"</li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна електронна газета – аналітика та новини</li>
                        <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                        <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                        <li>Тематичні спецвипуски</li>
                        <li>Календар бухгалтера</li>
                        <li>Онлайн-сервіс «Мої документи»</li>
                        <li>Послуга «Особистий асистент»</li>
                        <li>Електронний архів номерів з 2012 року</li>
                        <li>Вебінари щомісяця</li>
                        <li>Сервіс швидких відповідей на бухгалтерські запитання «Особистий експерт»</li>
                        <li>1 додатковий доступ до матеріалів «Інтерактивної бухгалтерії»</li>
                        <li>Сервіс онлайн-звітності Liga:REPORT</li>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">4079 грн</div>
                    </template>
                </landing-package>
                <landing-package article="ep-interbuh_pp_1511">
                    <template v-slot:title>ТАРИФ<br>«ПРЕМІУМ+»<br>та подарунки</template>
                    <template v-slot:period><div class="period">листопад 2019 - квітень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>Відеозапис семінару  <a href="https://7eminar.com/01082019" target="_blank">"Автомобіль на підприємстві-2019"</a></li>
                        <li >Відеозапис курсу  <a href="https://7eminar.com/psbo2019" target="_blank">"П(с)БО від А до Я"</a></li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна електронна газета – аналітика та новини</li>
                        <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                        <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                        <li>Тематичні спецвипуски</li>
                        <li>Календар бухгалтера</li>
                        <li>Онлайн-сервіс «Мої документи»</li>
                        <li>Послуга «Особистий асистент»</li>
                        <li>Електронний архів номерів з 2012 року</li>
                        <li>Вебінари щомісяця</li>
                        <li>Сервіс швидких відповідей на бухгалтерські запитання «Особистий експерт»</li>
                        <li>1 додатковий доступ до матеріалів «Інтерактивної бухгалтерії»</li>
                        <li>Сервіс онлайн-звітності Liga:REPORT</li>
                        <li>CONTRAGENT – система перевірки та моніторингу контрагентів</li>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">12998 грн</div>
                    </template>
                </landing-package>
                    <landing-package article="ep-interbuh_7ib_151" class="package-plus package-plus-top">
                        <template v-slot:title>ТАРИФ «Інтерактивна <br> бухгалтерія  + 7eminar.com»<br>та подарунки</template>
                        <template v-slot:period><div class="period">листопад 2019 - квітень 2020</div> </template>
                        <template v-slot:gifts>
                            <li>Відеозапис семінару  <a href="https://7eminar.com/01082019" target="_blank">"Автомобіль на підприємстві-2019"</a></li>
                            <li >Відеозапис курсу  <a href="https://7eminar.com/psbo2019" target="_blank">"П(с)БО від А до Я"</a></li>
                        </template>
                        <template v-slot:abilities>
                            <li>Щоденна електронна газета – аналітика та новини</li>
                            <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                            <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                            <li>Тематичні спецвипуски</li>
                            <li>Календар бухгалтера</li>
                            <li>Онлайн-сервіс «Мої документи»</li>
                            <li>Послуга «Особистий асистент»</li>
                            <li>Електронний архів номерів з 2012 року</li>
                            <li>Вебінари щомісяця</li>
                            <li>Сервіс швидких відповідей на бухгалтерські запитання «Особистий експерт»</li>
                            <li>1 додатковий доступ до матеріалів «Інтерактивної бухгалтерії»</li>
                            <li>Сервіс онлайн-звітності Liga:REPORT</li>
                            <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 120 курсів та вебінарів для перегляду протягом 2020 р. </li>
                        </template>
                        <template v-slot:old-price>
                            <div class="package__old-price" style="text-decoration: line-through">11192 грн</div>
                        </template>
                    </landing-package>
            </landing-package-row>
            <landing-package-row v-show="tab ==='12'" class="landing-package__twele">
                <landing-package article="ep-interbuh_st_1512">
                    <template v-slot:title>ТАРИФ<br>«СТАНДАРТ»<br>та подарунки</template>
                    <template v-slot:period><div class="period">листопад 2019 - листопад 2020</div> </template>
                    <template v-slot:gifts>
                        <li>Відеозапис семінару  <a href="https://7eminar.com/01082019" target="_blank">"Автомобіль на підприємстві-2019"</a></li>
                        <li class="no-active">Відеозапис курсу  "П(с)БО від А до Я"</li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна електронна газета – аналітика та новини</li>
                        <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                        <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                        <li>Тематичні спецвипуски</li>
                        <li>Календар бухгалтера</li>
                        <li>Онлайн-сервіс «Мої документи»</li>
                        <li>Послуга «Особистий асистент»</li>
                        <li>Електронний архів номерів з 2012 року</li>
                        <li>Вебінари щомісяця</li>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">4079 грн</div>
                    </template>
                </landing-package>
                <landing-package article="ep-interbuh_pr_1512">
                    <template v-slot:title>ТАРИФ<br>«ПРЕМІУМ»<br>та подарунки</template>
                    <template v-slot:period><div class="period">листопад 2019 - листопад 2020</div> </template>
                    <template v-slot:gifts>
                        <li>Відеозапис семінару  <a href="https://7eminar.com/01082019" target="_blank">"Автомобіль на підприємстві-2019"</a></li>
                        <li class="no-active">Відеозапис курсу  "П(с)БО від А до Я"</li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна електронна газета – аналітика та новини</li>
                        <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                        <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                        <li>Тематичні спецвипуски</li>
                        <li>Календар бухгалтера</li>
                        <li>Онлайн-сервіс «Мої документи»</li>
                        <li>Послуга «Особистий асистент»</li>
                        <li>Електронний архів номерів з 2012 року</li>
                        <li>Вебінари щомісяця</li>
                        <li>Сервіс швидких відповідей на бухгалтерські запитання «Особистий експерт»</li>
                        <li>1 додатковий доступ до матеріалів «Інтерактивної бухгалтерії»</li>
                        <li>Сервіс онлайн-звітності Liga:REPORT</li>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">6959 грн</div>
                    </template>
                </landing-package>
                <landing-package article="ep-interbuh_pp_1512">
                    <template v-slot:title>ТАРИФ<br>«ПРЕМІУМ+»<br>та подарунки</template>
                    <template v-slot:period><div class="period">листопад 2019 - листопад 2020</div> </template>
                    <template v-slot:gifts>
                        <li>Відеозапис семінару  <a href="https://7eminar.com/01082019" target="_blank">"Автомобіль на підприємстві-2019"</a></li>
                        <li >Відеозапис курсу  <a href="https://7eminar.com/psbo2019" target="_blank">"П(с)БО від А до Я"</a></li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна електронна газета – аналітика та новини</li>
                        <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                        <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                        <li>Тематичні спецвипуски</li>
                        <li>Календар бухгалтера</li>
                        <li>Онлайн-сервіс «Мої документи»</li>
                        <li>Послуга «Особистий асистент»</li>
                        <li>Електронний архів номерів з 2012 року</li>
                        <li>Вебінари щомісяця</li>
                        <li>Сервіс швидких відповідей на бухгалтерські запитання «Особистий експерт»</li>
                        <li>1 додатковий доступ до матеріалів «Інтерактивної бухгалтерії»</li>
                        <li>Сервіс онлайн-звітності Liga:REPORT</li>
                        <li>CONTRAGENT – система перевірки та моніторингу контрагентів</li>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">17798 грн</div>
                    </template>
                </landing-package>
                <landing-package article="ep-interbuh_7ib_152" class="package-plus package-plus-top">
                    <template v-slot:title>ТАРИФ «Інтерактивна <br> бухгалтерія  + 7eminar.com»<br>та подарунки</template>
                    <template v-slot:period><div class="period">листопад 2019 - листопад 2020</div> </template>
                    <template v-slot:gifts>
                        <li>Відеозапис семінару  <a href="https://7eminar.com/01082019" target="_blank">"Автомобіль на підприємстві-2019"</a></li>
                        <li >Відеозапис курсу  <a href="https://7eminar.com/psbo2019" target="_blank">"П(с)БО від А до Я"</a></li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна електронна газета – аналітика та новини</li>
                        <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                        <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                        <li>Тематичні спецвипуски</li>
                        <li>Календар бухгалтера</li>
                        <li>Онлайн-сервіс «Мої документи»</li>
                        <li>Послуга «Особистий асистент»</li>
                        <li>Електронний архів номерів з 2012 року</li>
                        <li>Вебінари щомісяця</li>
                        <li>Сервіс швидких відповідей на бухгалтерські запитання «Особистий експерт»</li>
                        <li>1 додатковий доступ до матеріалів «Інтерактивної бухгалтерії»</li>
                        <li>Сервіс онлайн-звітності Liga:REPORT</li>
                        <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 120 курсів та вебінарів для перегляду протягом 2020 р. </li>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">14186 грн</div>
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