<template>
    <landing name="interbuh_december2019_1" advantages="epressa_add_interbuh" class="landing-interbuh_december2019_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_01_webp.webp')" type="image/webp">
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
            <landing-package-row>
                <landing-package article="ep-interbuh_st_1012">
                    <template v-slot:title>
                        <span > ТАРИФ<br>«СТАНДАРТ»<br>та подарунок</span>
                    </template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
                    </template>

                    <template v-slot:abilities>
                        <li>Щоденна електронна газета – аналітика та новини</li>
                        <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                        <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                        <li>Тематичні спецвипуски</li>
                        <li>Календар бухгалтера</li>
                        <li>Послуга «Особистий асистент»</li>
                        <li>Електронний архів номерів з 2012 року</li>
                        <li>Вебінари щомісяця</li>
                    </template>
                    <template v-slot:old-price>

                        <div   class="package__old-price" style="text-decoration: line-through">240 грн/міс.</div>
                    </template>
                </landing-package>
                <landing-package article="ep-interbuh_pr_1012">
                    <template v-slot:title>
                        <span > ТАРИФ<br>«ПРЕМІУМ»<br>та подарунок</span>

                    </template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
                    </template>

                    <template v-slot:abilities>
                        <li>Щоденна електронна газета – аналітика та новини</li>
                        <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                        <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                        <li>Тематичні спецвипуски</li>
                        <li>Календар бухгалтера</li>
                        <li>Послуга «Особистий асистент»</li>
                        <li>Електронний архів номерів з 2012 року</li>
                        <li>Вебінари щомісяця</li>
                        <li>Сервіс швидких відповідей на бухгалтерські запитання «Особистий експерт»</li>
                        <li>1 додатковий доступ до матеріалів «Інтербух»</li>
                        <li>Сервіс онлайн-звітності Liga:REPORT</li>
                    </template>
                    <template v-slot:old-price>
                        <div   class="package__old-price" style="text-decoration: line-through">480 грн/міс.</div>
                    </template>
                </landing-package>
                <landing-package article="ep-interbuh_pp_1012">
                    <template v-slot:title>
                        <span > ТАРИФ<br>«ПРЕМІУМ+»<br>та подарунок</span>

                    </template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна електронна газета – аналітика та новини</li>
                        <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                        <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                        <li>Тематичні спецвипуски</li>
                        <li>Календар бухгалтера</li>
                        <li>Послуга «Особистий асистент»</li>
                        <li>Електронний архів номерів з 2012 року</li>
                        <li>Вебінари щомісяця</li>
                        <li>Сервіс швидких відповідей на бухгалтерські запитання «Особистий експерт»</li>
                        <li>1 додатковий доступ до матеріалів «Інтербух»</li>
                        <li>Сервіс онлайн-звітності Liga:REPORT</li>
                        <li>CONTRAGENT – система перевірки та моніторингу контрагентів</li>
                    </template>
                    <template v-slot:old-price>

                        <div class="package__old-price" style="text-decoration: line-through">646 грн/міс.</div>
                    </template>
                </landing-package>

                    <landing-package article="ep-interbuh_7ib_1012" class="package-plus package-plus-top">
                        <template v-slot:title>
                            <span> ТАРИФ <br> «Інтербух  + 7eminar.com»<br>та подарунок</span>

                        </template>
                        <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                        <template v-slot:gifts>
                            <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
                        </template>
                        <template v-slot:abilities>
                            <li>Щоденна електронна газета – аналітика та новини</li>
                            <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                            <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                            <li>Тематичні спецвипуски</li>
                            <li>Календар бухгалтера</li>
                            <li>Послуга «Особистий асистент»</li>
                            <li>Електронний архів номерів з 2012 року</li>
                            <li>Вебінари щомісяця</li>
                            <li>Сервіс швидких відповідей на бухгалтерські запитання «Особистий експерт»</li>
                            <li>1 додатковий доступ до матеріалів «Інтербух»</li>
                            <li>Сервіс онлайн-звітності Liga:REPORT</li>
                            <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>:  понад 120 курсів та вебінарів для перегляду
                               </li>
                        </template>
                        <template v-slot:old-price>
                            <div   class="package__old-price" style="text-decoration: line-through">800 грн/міс.</div>
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