<template>
    <landing name="interbuh_april2020_1" advantages="epressa_add_interbuh" class="landing-interbuh_april2020_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_IB.webp')" type="image/webp">
                                <img :src="mix('images/head_IB.jpg')" class="img-fluid" alt="IB">
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
            <p class="landing-section__action">{{ page.options['order_action']}} <br> <b>{{ page.options['order_action--bold']}}</b> </p>
        </template>
      <!--  <template v-slot:tab-radio>
            <div class="tab-content"> <label class="label" :class="{active: tab ==='6'}" @click="tab = '6'">+ 1 подарунок </label> <label class="label" :class="{active: tab ==='12'}" @click="tab = '12'">+ 2 подарунки </label></div>
        </template>-->
        <template v-slot:packages_list>
            <landing-package-row>
                <landing-package article="ep-interbuh_st_action" class="packages__column--two">
                    <template v-slot:title>
                        <span > ТАРИФ<br>«СТАНДАРТ»<br>та 2 подарунки</span>
                    </template>
                    <template v-slot:period>
                      <!--  <div class="period"> квітень - вересень 2020</div>-->
                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс «Виробництво та собівартість в 1С» </li>
                        <li  ><a href="https://rozetka.com.ua/193208401/p193208401/" target="_blank">Столик для ноутбука</a></li>
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


                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">357  грн/міс.</div>
                    </template>
                </landing-package>

                <landing-package article="ep-interbuh_st" class="packages__column--one">
                    <template v-slot:title>
                        <span > ТАРИФ<br>«СТАНДАРТ»<br>та подарунок</span>
                    </template>
                    <template v-slot:period>
                        <!--  <div class="period"> квітень - вересень 2020</div>-->
                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс «Виробництво та собівартість в 1С»</li>
                        <li class="no-active" >Столик для ноутбука</li>
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


                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">269 грн/міс.</div>
                    </template>
                </landing-package>


                <landing-package article="ep-api_liga_action" class="package-plus package-plus-top packages__column--three">
                        <template v-slot:title>
                            <span  > ТАРИФ <br>   «Інтербух  + 7eminar.com»<br>та 2 подарунки</span>
                        </template>
                            <template v-slot:period>
                             <!--   <div class="period"> квітень - вересень 2020</div>-->
                            </template>
                        <template v-slot:gifts>
                            <li >Відеокурс «Виробництво та собівартість в 1С»</li>
                            <li  ><a href="https://rozetka.com.ua/193208401/p193208401/" target="_blank">Столик для ноутбука</a></li>
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
                                    <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 160 курсів та вебінарів для перегляду
                                        <!--<br><span  > ( квітень - вересень 2020)</span>--> </li>
                                </div>
                                <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                            </div>
                        </template>
                        <template v-slot:old-price>
                            <div class="package__old-price" style="text-decoration: line-through">616  грн/міс.</div>
                        </template>
                    </landing-package>

                <landing-package article="ep-api_liga" class="package-plus package-plus-top">
                    <template v-slot:title>
                        <span  > ТАРИФ <br>   «Інтербух  + 7eminar.com»<br>та подарунок</span>
                    </template>
                    <template v-slot:period>
                        <!--   <div class="period"> квітень - вересень 2020</div>-->
                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс «Виробництво та собівартість в 1С»</li>
                        <li class="no-active" >Столик для ноутбука</li>
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
                                <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 160 курсів та вебінарів для перегляду
                                    <!--<br><span  > ( квітень - вересень 2020)</span>--> </li>
                            </div>
                            <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                        </div>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">528 грн/міс.</div>
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
