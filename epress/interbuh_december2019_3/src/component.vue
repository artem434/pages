<template>
    <landing name="interbuh_december2019_3" advantages="epressa_add_interbuh" class="landing-interbuh_december2019_3">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_02_webp.webp')" type="image/webp">
                                <img :src="mix('images/head_02.jpg')" class="img-fluid" alt="coffe">
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
            <landing-package-row>
                <landing-package article="ep-interbuh_st_1312">
                    <template v-slot:title>
                        <span > ТАРИФ<br>«СТАНДАРТ»<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">січень - червень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на <a href="https://7eminar.com/23012020" target="_blank">Великий Річний Семінар (23.01.2020)</a> </li>
                        <li><a href="https://www.club-cdma.com.ua/power-bank-remax-lipmax-rpl-12-2400-mah/" target="_blank">powerbank</a> для леді</li>
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
                        <div  class="package__old-price" style="text-decoration: line-through">2738 грн</div>
                    </template>
                </landing-package>
                <landing-package article="ep-interbuh_pr_1312">
                    <template v-slot:title>

                        <span > ТАРИФ<br>«ПРЕМІУМ»<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">січень - червень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на <a href="https://7eminar.com/23012020" target="_blank">Великий Річний Семінар (23.01.2020)</a> </li>
                        <li><a href="https://www.club-cdma.com.ua/power-bank-remax-lipmax-rpl-12-2400-mah/" target="_blank">powerbank</a> для леді</li>
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
                        <li>1 додатковий доступ до матеріалів «Інтербух»</li>
                        <li>Сервіс онлайн-звітності Liga:REPORT</li>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">4178 грн</div>
                    </template>
                </landing-package>
                <landing-package article="ep-interbuh_pp_1312">
                    <template v-slot:title>

                        <span > ТАРИФ<br>«ПРЕМІУМ+»<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">січень - червень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на <a href="https://7eminar.com/23012020" target="_blank">Великий Річний Семінар (23.01.2020)</a> </li>
                        <li><a href="https://www.club-cdma.com.ua/power-bank-remax-lipmax-rpl-12-2400-mah/" target="_blank">powerbank</a> для леді</li>
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
                        <li>1 додатковий доступ до матеріалів «Інтербух»</li>
                        <li>Сервіс онлайн-звітності Liga:REPORT</li>
                        <li>CONTRAGENT – система перевірки та моніторингу контрагентів</li>
                    </template>
                    <template v-slot:old-price>

                        <div class="package__old-price" style="text-decoration: line-through">6098 грн</div>
                    </template>
                </landing-package>

                    <landing-package article="ep-interbuh_7ib_1312" class="package-plus package-plus-top">
                        <template v-slot:title>
                            <span> ТАРИФ <br>   «Інтербух  + 7eminar.com»<br>та подарунки</span>
                        </template>
                        <template v-slot:period><div class="period">січень - червень 2020 року</div> </template>
                        <template v-slot:gifts>
                            <li>квиток до залу на <a href="https://7eminar.com/23012020" target="_blank">Великий Річний Семінар (23.01.2020)</a> </li>
                            <li><a href="https://www.club-cdma.com.ua/power-bank-remax-lipmax-rpl-12-2400-mah/" target="_blank">powerbank</a> для леді</li>
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
                            <li>1 додатковий доступ до матеріалів «Інтербух»</li>
                            <li>Сервіс онлайн-звітності Liga:REPORT</li>
                            <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>:  понад 120 курсів та вебінарів для перегляду
                                <br> (січень - червень 2020 р.)</li>
                        </template>
                        <template v-slot:old-price>

                            <div  class="package__old-price" style="text-decoration: line-through">5168 грн</div>
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