<template>
    <landing name="interbuh_january2020" advantages="epressa_add_interbuh" class="landing-interbuh_january2020">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/IB-gift_2.webp')" type="image/webp">
                                <img :src="mix('images/IB-gift_2.jpg')" class="img-fluid" alt="coffe">
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
            <div class="tab-content"> <label class="label" :class="{active: tab ==='6'}" @click="tab = '6'">6 місяців </label> <label class="label" :class="{active: tab ==='12'}" @click="tab = '12'">12 місяців </label></div>
        </template>
        <template v-slot:packages_list>
            <landing-package-row>
                <landing-package :article="tab =='6' ?  'ep-interbuh_st_1312' : 'ep-interbuh_st_1301_p'">
                    <template v-slot:title>
                        <span > ТАРИФ<br>«СТАНДАРТ»<br>та подарунки</span>
                    </template>
                    <template v-slot:period>
                        <div v-if="tab =='12'" class="period">січень - грудень 2020 року</div>
                        <div v-else class="period">січень - червень 2020 року</div>
                    </template>
                    <template v-slot:gifts>
                        <li>Відеозапис <a href="https://7eminar.com/23012020" target="_blank">Великого Річного Семінару (23.01.2020)</a> </li>
                        <li>Срібний кулон</li>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">2738 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">4178 грн</div>
                    </template>
                </landing-package>
                <landing-package :article="tab =='6' ?  'ep-interbuh_pr_1312' : 'ep-interbuh_pr_1301_p'">
                    <template v-slot:title>
                        <span> ТАРИФ<br>«ПРЕМІУМ»<br>та подарунки</span>
                    </template>
                    <template v-slot:period>
                        <div v-if="tab =='12'" class="period">січень - грудень 2020 року</div>
                        <div v-else class="period">січень - червень 2020 року</div>
                    </template>
                    <template v-slot:gifts>
                        <li>Відеозапис <a href="https://7eminar.com/23012020" target="_blank">Великого Річного Семінару (23.01.2020)</a> </li>
                        <li>Срібний кулон</li>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">4178 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">7058 грн</div>
                    </template>
                </landing-package>
                <landing-package :article="tab =='6' ?  'ep-interbuh_pp_1312' : 'ep-interbuh_pp_1301_p'">
                    <template v-slot:title>
                        <span> ТАРИФ<br>«ПРЕМІУМ+»<br>та подарунки</span>
                    </template>
                    <template v-slot:period>
                        <div v-if="tab =='12'" class="period">січень - грудень 2020 року</div>
                        <div v-else class="period">січень - червень 2020 року</div>
                    </template>
                    <template v-slot:gifts>
                        <li>Відеозапис <a href="https://7eminar.com/23012020" target="_blank">Великого Річного Семінару (23.01.2020)</a> </li>
                        <li>Срібний кулон</li>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">6098 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">10898 грн</div>
                    </template>
                </landing-package>

                        <landing-package :article="tab =='6' ?  'ep-interbuh_7ib_1301' : 'ep-interbuh_7ib_1301_p'" class="package-plus package-plus-top">
                        <template v-slot:title>
                            <span > ТАРИФ <br>   «Інтербух  + 7eminar.com»<br>та подарунки</span>
                        </template>
                        <template v-slot:period>
                            <div v-if="tab =='12'" class="period">січень - грудень 2020 року</div>
                            <div v-else class="period">січень - червень 2020 року</div>
                        </template>
                        <template v-slot:gifts>
                            <li>Відеозапис <a href="https://7eminar.com/23012020" target="_blank">Великого Річного Семінару (23.01.2020)</a> </li>
                            <li>Срібний кулон</li>
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
                                <br><span v-if="tab =='6'" > (січень – червень 2020 р.)</span> <span v-else > (січень – грудень 2020 р.)</span></li>
                        </template>
                        <template v-slot:old-price>
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">4292 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">7286 грн</div>
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
        tab: '6'
    })
}
</script>