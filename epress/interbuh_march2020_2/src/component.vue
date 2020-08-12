<template>
    <landing name="interbuh_march2020_2" advantages="epressa_add_interbuh" class="landing-interbuh_march2020_2">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_031.webp')" type="image/webp">
                                <img :src="mix('images/head_031.jpg')" class="img-fluid" alt="IB">
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
            <p class="landing-section__action">{{ page.options['order_action']}} <b> {{ page.options['order_action--bold']}}</b> </p>
        </template>
      <!--  <template v-slot:tab-radio>
            <div class="tab-content"> <label class="label" :class="{active: tab ==='6'}" @click="tab = '6'">+ 1 подарунок </label> <label class="label" :class="{active: tab ==='12'}" @click="tab = '12'">+ 2 подарунки </label></div>
        </template>-->
        <template v-slot:packages_list>
            <landing-package-row>
                <landing-package article="ep-interbuh_st_action" class="packages__column--one">
                    <template v-slot:title>
                        <span > ТАРИФ<br>«СТАНДАРТ»<br>та подарунок</span>

                    </template>
                    <template v-slot:period>
                        <div class="period"> квітень - вересень 2020</div>
                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс «ЗП в 1С»</li>
                        <p class="package__btn">
                            <router-link :to="`/order?article=ep-interbuh_st_action&options[periods]=6`" class="btn btn-package btn-package--card"
                                         target="_blank">оплатити карткою
                            </router-link>
                            <router-link :to="`/order?article=ep-interbuh_st&options[periods]=6`" class="btn btn-package btn-package--order-mob"
                                         target="_blank">отримати рахунок
                            </router-link>
                        </p>
                    </template>

                    <template v-slot:abilities>
                        <div class="list">
                            <li>Щоденна електронна газета – аналітика та новини</li>
                            <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                            <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                            <div v-if="show">
                                <li>Тематичні спецвипуски</li>
                                <li>Календар бухгалтера</li>
                                <li>Онлайн-сервіс «Мої документи»</li>
                                <li>Послуга «Особистий асистент»</li>
                                <li>Електронний архів номерів з 2012 року</li>
                                <li>Вебінари щомісяця</li>
                            </div>
                            <p class="packages__list-show" @click="show = !show">{{ btnText }}</p></div>

                        <router-link :to="`/order?article=ep-interbuh_st&options[periods]=6`" class="btn btn-package btn-package--order"
                                     target="_blank">отримати рахунок
                        </router-link>
                    </template>
                    <template v-slot:old-price>

                        <div class="package__old-price" style="text-decoration: line-through">2539 грн</div>
                    </template>
                </landing-package>

                <landing-package article="ep-interbuh_pr_action" class="packages__column--two">
                    <template v-slot:title>
                        <span > ТАРИФ<br>«ПРЕМІУМ»<br>та подарунок</span>

                    </template>
                    <template v-slot:period>
                        <div class="period"> квітень - вересень 2020</div>
                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс «ЗП в 1С»</li>
                        <p class="package__btn">
                            <router-link :to="`/order?article=ep-interbuh_pr_action&options[periods]=6`" class="btn btn-package btn-package--card"
                                         target="_blank">оплатити карткою
                            </router-link>
                            <router-link :to="`/order?article=ep-interbuh_pr&options[periods]=6`" class="btn btn-package btn-package--order-mob"
                                         target="_blank">отримати рахунок
                            </router-link>
                        </p>
                    </template>

                    <template v-slot:abilities>
                        <div class="list">
                        <li>Щоденна електронна газета – аналітика та новини</li>
                        <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                        <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                        <div v-if="show">
                            <li>Тематичні спецвипуски</li>
                            <li>Календар бухгалтера</li>
                            <li>Онлайн-сервіс «Мої документи»</li>
                            <li>Послуга «Особистий асистент»</li>
                            <li>Електронний архів номерів з 2012 року</li>
                            <li>Вебінари щомісяця</li>
                            <li>Сервіс швидких відповідей на бухгалтерські запитання «Особистий експерт»</li>
                            <li>1 додатковий доступ до матеріалів «Інтербух»</li>
                            <li>Сервіс онлайн-звітності Liga:REPORT</li>
                        </div>
                        <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                        </div>
                        <router-link :to="`/order?article=ep-interbuh_pr&options[periods]=6`" class="btn btn-package btn-package--order"
                                     target="_blank">отримати рахунок
                        </router-link>
                    </template>
                    <template v-slot:old-price>
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">3979 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">5379 грн</div>
                    </template>
                </landing-package>
                <landing-package article="ep-interbuh_pp" class="packages__column--three">
                    <template v-slot:title>
                        <span > ТАРИФ<br>«ПРЕМІУМ+»<br>та подарунок</span>

                    </template>
                    <template v-slot:period>
                        <div class="period"> квітень - вересень 2020</div>
                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс «ЗП в 1С»</li>
                        <p class="package__btn">
                            <router-link :to="`/order?article=ep-interbuh_pp&options[periods]=6`" class="btn btn-package btn-package--card"
                                         target="_blank">оплатити карткою
                            </router-link>
                            <router-link :to="`/order?article=ep-interbuh_pp&options[periods]=6`" class="btn btn-package btn-package--order-mob"
                                         target="_blank">отримати рахунок
                            </router-link>
                        </p>

                    </template>

                    <template v-slot:abilities>
                        <div class="list">
                        <li>Щоденна електронна газета – аналітика та новини</li>
                        <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                        <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                        <div v-if="show">
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
                        </div>
                        <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                        </div>
                        <router-link :to="`/order?article=ep-interbuh_pp&options[periods]=6`" class="btn btn-package btn-package--order"
                                     target="_blank">отримати рахунок
                        </router-link>
                    </template>
                    <template v-slot:old-price>
                        <div   class="package__old-price" style="text-decoration: line-through">5899 грн</div>

                    </template>
                </landing-package>

                        <landing-package article="ep-api_liga" class="package-plus package-plus-top">
                        <template v-slot:title>
                            <span  > ТАРИФ <br>   «Інтербух  + 7eminar.com»<br>та подарунок</span>

                        </template>
                            <template v-slot:period>
                                <div class="period"> квітень - вересень 2020</div>
                            </template>
                            <template v-slot:gifts>
                                <li >Відеокурс «ЗП в 1С»</li>
                                <p class="package__btn">
                                    <router-link :to="`/order?article=ep-api_liga&options[periods]=6`" class="btn btn-package btn-package--card"
                                                 target="_blank">оплатити карткою
                                    </router-link>
                                    <router-link :to="`/order?article=ep-api_liga&options[periods]=6`" class="btn btn-package btn-package--order-mob"
                                                 target="_blank">отримати рахунок
                                    </router-link>
                                </p>

                            </template>
                        <template v-slot:abilities>
                            <div class="list">
                                <li>Щоденна електронна газета – аналітика та новини</li>
                                <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                                <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                                <div v-if="show">
                                    <li>Тематичні спецвипуски</li>
                                    <li>Календар бухгалтера</li>
                                    <li>Онлайн-сервіс «Мої документи»</li>
                                    <li>Послуга «Особистий асистент»</li>
                                    <li>Електронний архів номерів з 2012 року</li>
                                    <li>Вебінари щомісяця</li>
                                    <li>Сервіс швидких відповідей на бухгалтерські запитання «Особистий експерт»</li>
                                    <li>1 додатковий доступ до матеріалів «Інтербух»</li>
                                    <li>Сервіс онлайн-звітності Liga:REPORT</li>
                                    <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 140 курсів та вебінарів для перегляду
                                        <br><span  > ( квітень - вересень 2020)</span> </li>
                                </div>
                                <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                            </div>

                            <router-link :to="`/order?article=ep-api_liga&options[periods]=6`" class="btn btn-package btn-package--order"
                                         target="_blank">отримати рахунок
                            </router-link>
                        </template>



                        <template v-slot:old-price>
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">4093 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">5493 грн</div>
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
        computed: {

            btnText: function() {
                if(this.show) {
                    return 'Приховати'
                }

                return 'А ще входить...'
            }
        },
        data:()=>({
            show: false,
        })

    }
</script>
