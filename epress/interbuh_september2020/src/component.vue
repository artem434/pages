<template>
    <landing name="interbuh_september2020" advantages="epressa_add_interbuh" class="landing-interbuh_september2020">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <a href="#gift">
                                <picture class="cover__img">
                                    <source :src="mix('images/bg.webp')" type="image/webp">
                                    <img :src="mix('images/bg.jpg')" class="img-fluid" alt="IB">
                                </picture>
                            </a>
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
                <p class="landing-section__action">{{ page.options['order_subtitle']}}  </p>
                <h2  id="gift" class="landing-title-gift"><span>{{ page.options['order_title-top']}}</span></h2>
            </div>
        </template>
        <template v-slot:packages_list>
            <landing-package-row>
                <landing-package article="ep-interbuh_st_action1" class="packages__column--two">
                    <template v-slot:title>
                      <!--  <span > ТАРИФ<br>«СТАНДАРТ»<br>та 2 подарунки</span>-->
                      <span>ІНТЕРБУХ</span>
                    </template>
                    <template v-slot:period>
                        <div class="period">6 місяців</div>
                    </template>
                    <template v-slot:gifts>
                      <li><a href="https://bt.rozetka.com.ua/scarlett_sc_ek27g34/p47715550/" target="_blank">Електрочайник</a></li>
                        <li >Відеозапис семінару <br> <a href="https://7eminar.com/10092020" target="_blank">«Все про ПДВ»</a> </li>
                        <li class="no-active" >Елегантний шарф</li>

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
                        <div class="package__old-price" style="text-decoration: line-through">3734 грн</div>
                    </template>
                </landing-package>

                <landing-package article="ep-api_liga_action1" class="package-plus package-plus-top packages__column--three">
                        <template v-slot:title>
                            <!--<span  > ТАРИФ <br>   «Інтербух  + 7eminar.com»<br>та 2 подарунки</span>-->
                          <span>ІНТЕРБУХ <br>+ 7eminar.com</span>
                        </template>
                            <template v-slot:period>
                              <div class="period">6 місяців</div>
                            </template>
                        <template v-slot:gifts>
                          <li><a href="https://bt.rozetka.com.ua/scarlett_sc_ek27g34/p47715550/" target="_blank">Електрочайник</a></li>
                          <li >Відеозапис семінару <br> <a href="https://7eminar.com/10092020" target="_blank">«Все про ПДВ»</a> </li>
                          <li >Елегантний шарф</li>
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
                                    <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 200 курсів та вебінарів для перегляду
                                        <!--<br><span  > ( квітень - вересень 2020)</span>--> </li>
                                </div>
                                <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                            </div>
                        </template>
                        <template v-slot:old-price>
                            <div class="package__old-price" style="text-decoration: line-through">5488 грн</div>
                        </template>
                    </landing-package>

            </landing-package-row>
            <h2   class="landing-title-gift"><span>{{ page.options['order_title-bottom']}}</span></h2>
            <landing-package-row>


                <landing-package article="ep-interbuh_st" class="packages__column--one">
                    <template v-slot:title>
                      <span>ІНТЕРБУХ</span>
                    </template>
                    <template v-slot:period>
                      <div class="period">6 місяців</div>
                    </template>
                    <template v-slot:gifts>
                      <li >Відеозапис семінару <br> <a href="https://7eminar.com/10092020" target="_blank">«Все про ПДВ»</a> </li>
                      <li class="no-active" >Елегантний шарф</li>
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
                        <div class="package__old-price" style="text-decoration: line-through">2134 грн</div>
                    </template>
                </landing-package>


                <landing-package article="ep-api_liga" class="package-plus package-plus-top">
                    <template v-slot:title>
                      <span>ІНТЕРБУХ <br>+ 7eminar.com</span>
                    </template>
                    <template v-slot:period>
                      <div class="period">6 місяців</div>
                    </template>
                    <template v-slot:gifts>
                      <li >Відеозапис семінару <br> <a href="https://7eminar.com/10092020" target="_blank">«Все про ПДВ»</a> </li>
                      <li >Елегантний шарф</li>
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
                                <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 200 курсів та вебінарів для перегляду
                                    <!--<br><span  > ( квітень - вересень 2020)</span>--> </li>
                            </div>
                            <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                        </div>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">3888 грн</div>
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
