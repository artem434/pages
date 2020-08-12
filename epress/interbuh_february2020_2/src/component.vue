<template>
    <landing name="interbuh_february2020_2" advantages="epressa_add_interbuh" class="landing-interbuh_february2020_2">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head2.webp')" type="image/webp">
                                <img :src="mix('images/head2.jpg')" class="img-fluid" alt="IB">
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
        <template v-slot:tab-radio>
            <div class="tab-content"> <label class="label" :class="{active: tab ==='6'}" @click="tab = '6'">+ 1 подарунок </label> <label class="label" :class="{active: tab ==='12'}" @click="tab = '12'">+ 2 подарунки </label></div>
        </template>
        <template v-slot:packages_list>
            <landing-package-row>
                <landing-package :article="tab =='6' ?  'ep-interbuh_st_1312' : 'ep-interbuh_st_2801'" class="packages__column--one">
                    <template v-slot:title>
                        <span v-if="tab =='6'"> ТАРИФ<br>«СТАНДАРТ»<br>та подарунок</span>
                        <span v-else>ТАРИФ<br>«СТАНДАРТ»<br>та подарунки</span>
                    </template>
                    <template v-slot:period>
                        <div class="period">лютий 2020 - липень 2020</div>
                    </template>
                    <template v-slot:gifts>
                        <li > Податковий кодекс України (дата виходу – 31.03.2020, <br> з урахуванням усіх змін)</li>
                        <li v-if="tab =='6'"  class="no-active">Потужна електром'ясорубка</li>
                        <li v-else >Потужна електром'ясорубка</li>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">1739 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">4539 грн</div>
                    </template>
                </landing-package>
                <landing-package :article="tab =='6' ?  'ep-interbuh_pr_1312' : 'ep-interbuh_pr_2801'" class="packages__column--two">
                    <template v-slot:title>
                        <span  v-if="tab =='6'"> ТАРИФ<br>«ПРЕМІУМ»<br>та подарунок</span>
                        <span v-else>ТАРИФ<br>«ПРЕМІУМ»<br>та подарунки</span>
                    </template>
                    <template v-slot:period>
                        <div class="period">лютий 2020 - липень 2020</div>
                    </template>
                    <template v-slot:gifts>
                        <li > Податковий кодекс України (дата виходу – 31.03.2020, <br> з урахуванням усіх змін)</li>
                        <li v-if="tab =='6'"  class="no-active">Потужна електром'ясорубка</li>
                        <li v-else >Потужна електром'ясорубка</li>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">3179 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">5979 грн</div>
                    </template>
                </landing-package>
                <landing-package :article="tab =='6' ?  'ep-interbuh_pp_1312' : 'ep-interbuh_pp_2801'" class="packages__column--three">
                    <template v-slot:title>
                        <span  v-if="tab =='6'"> ТАРИФ<br>«ПРЕМІУМ+»<br>та подарунок</span>
                        <span v-else>ТАРИФ<br>«ПРЕМІУМ+»<br>та подарунки</span>
                    </template>
                    <template v-slot:period>
                        <div class="period">лютий 2020 - липень 2020</div>
                    </template>
                    <template v-slot:gifts>
                        <li > Податковий кодекс України (дата виходу – 31.03.2020, <br> з урахуванням усіх змін)</li>
                        <li v-if="tab =='6'"  class="no-active">Потужна електром'ясорубка</li>
                        <li v-else >Потужна електром'ясорубка</li>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">5099 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">7899 грн</div>
                    </template>
                </landing-package>

                        <landing-package :article="tab =='6' ?  'ep-interbuh_7ib_1301' : 'ep-interbuh_7ib_2801'" class="package-plus package-plus-top">
                        <template v-slot:title>
                            <span  v-if="tab =='6'"> ТАРИФ <br>   «Інтербух  + 7eminar.com»<br>та подарунок</span>
                            <span v-else>ТАРИФ<br>«Інтербух  + 7eminar.com»<br>та подарунки</span>
                        </template>
                        <template v-slot:period>
                            <div class="period">лютий 2020 - липень 2020</div>
                        </template>
                            <template v-slot:gifts>
                                <li > Податковий кодекс України (дата виходу – 31.03.2020, <br> з урахуванням усіх змін)</li>
                                <li v-if="tab =='6'"  class="no-active">Потужна електром'ясорубка</li>
                                <li v-else >Потужна електром'ясорубка</li>
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
                            <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 120 курсів та вебінарів для перегляду
                                <br><span  > (лютий 2020 - липень 2020)</span> </li>
                        </template>
                        <template v-slot:old-price>
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">3293 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">6093 грн</div>
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