<template>
    <landing name="interbuh_november2019_3" advantages="epressa_add_interbuh" class="landing-interbuh_november2019_3">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_03_ib_webp.webp')" type="image/webp">
                                <img :src="mix('images/head_03_ib.jpg')" class="img-fluid" alt="coffe">
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
                <landing-package :article="tab =='6' ?  'ep-interbuh_st_2111' : 'ep-ib_st_2711_gift'">
                    <template v-slot:title>
                        <span v-if="tab =='6'"> ТАРИФ<br>«СТАНДАРТ»<br>та подарунок</span>
                        <span v-else> ТАРИФ<br>«СТАНДАРТ»<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>відеозапис<br> <a href="https://7eminar.com/06112019" target="_blank">Великого Семінару із Заробітної Плати</a></li>
                        <li :class="{'no-active' : tab =='6' }">сертифікат номіналом <br>
                            1000 грн на вибір:
                            <ul class="package__presents-sub-list">
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Розетка</span>
                                </li>
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Brocard</span>
                                </li>
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Будинок іграшок</span>
                                </li>
                            </ul>
                        </li>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">1938 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">3638 грн</div>
                    </template>
                </landing-package>
                <landing-package :article="tab =='6' ?  'ep-interbuh_pr_2111' : 'ep-ib_pr_2711_gift'">
                    <template v-slot:title>
                        <span v-if="tab =='6'"> ТАРИФ<br>«ПРЕМІУМ»<br>та подарунок</span>
                        <span v-else> ТАРИФ<br>«ПРЕМІУМ»<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>відеозапис<br> <a href="https://7eminar.com/06112019" target="_blank">Великого Семінару із Заробітної Плати</a></li>
                        <li :class="{'no-active' : tab =='6' }">сертифікат номіналом <br>
                            1000 грн на вибір:
                            <ul class="package__presents-sub-list">
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Розетка</span>
                                </li>
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Brocard</span>
                                </li>
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Будинок іграшок</span>
                                </li>
                            </ul>
                        </li>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">3378 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">5078 грн</div>
                    </template>
                </landing-package>
                <landing-package :article="tab =='6' ?  'ep-interbuh_pp_2111' : 'ep-ib_pp_2711_gift'">
                    <template v-slot:title>
                        <span v-if="tab =='6'"> ТАРИФ<br>«ПРЕМІУМ+»<br>та подарунок</span>
                        <span v-else> ТАРИФ<br>«ПРЕМІУМ+»<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>відеозапис<br> <a href="https://7eminar.com/06112019" target="_blank">Великого Семінару із Заробітної Плати</a></li>
                        <li :class="{'no-active' : tab =='6' }">сертифікат номіналом <br>
                            1000 грн на вибір:
                            <ul class="package__presents-sub-list">
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Розетка</span>
                                </li>
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Brocard</span>
                                </li>
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Будинок іграшок</span>
                                </li>
                            </ul>
                        </li>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">5298 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">6998 грн</div>
                    </template>
                </landing-package>

                    <landing-package :article="tab =='6' ?  'ep-interbuh_7ib_211' : 'ep-ib_7ib_2711_gift'" class="package-plus package-plus-top">
                        <template v-slot:title>
                            <span v-if="tab =='6'"> ТАРИФ «Інтерактивна<br>бухгалтерія  + 7eminar.com»<br>та подарунок</span>
                            <span v-else>  ТАРИФ «Інтерактивна<br>бухгалтерія  + 7eminar.com»<br>та подарунки</span>
                        </template>
                        <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                        <template v-slot:gifts>
                            <li>відеозапис<br> <a href="https://7eminar.com/06112019" target="_blank">Великого Семінару із Заробітної Плати</a></li>
                            <li :class="{'no-active' : tab =='6' }">сертифікат номіналом <br>
                                1000 грн на вибір:
                                <ul class="package__presents-sub-list">
                                    <li :class="{'no-active' : tab =='6' }">
                                        <span>Розетка</span>
                                    </li>
                                    <li :class="{'no-active' : tab =='6' }">
                                        <span>Brocard</span>
                                    </li>
                                    <li :class="{'no-active' : tab =='6' }">
                                        <span>Будинок іграшок</span>
                                    </li>
                                </ul>
                            </li>
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
                            <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>:  понад 120 курсів та вебінарів для перегляду
                                <br> (грудень 2019 – травень 2020 р.)</li>
                        </template>
                        <template v-slot:old-price>
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">3492 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">5192 грн</div>
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