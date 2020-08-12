<template>
    <landing name="interbuh_march2020_1" advantages="epressa_add_interbuh" class="landing-interbuh_march2020_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_032.webp')" type="image/webp">
                                <img :src="mix('images/head_032.jpg')" class="img-fluid" alt="IB">
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
                <landing-package :article="tab =='6' ?  'ep-interbuh_st' : 'ep-interbuh_st_action'" class="packages__column--one">
                    <template v-slot:title>
                        <span v-if="tab =='6'"> ТАРИФ<br>«СТАНДАРТ»<br>та подарунок</span>
                        <span v-else>ТАРИФ<br>«СТАНДАРТ»<br>та подарунки</span>
                    </template>
                    <template v-slot:period>
                        <div class="period">березень - серпень 2020</div>
                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс <a href="https://7eminar.com/zarplata2020" target="_blank">Зарплата-2020</a></li>
                        <li v-if="tab =='6'"  class="no-active">Електронна <br> подушка-масажер</li>
                        <li v-else ><a href="https://www.youtube.com/watch?v=-DulVBtynvY" target="_blank">Електронна
                            <br>подушка-масажер</a></li>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">2539 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">3939 грн</div>
                    </template>
                </landing-package>

                <landing-package :article="tab =='6' ?  'ep-interbuh_pr' : 'ep-interbuh_pr_action'" class="packages__column--two">
                    <template v-slot:title>
                        <span  v-if="tab =='6'"> ТАРИФ<br>«ПРЕМІУМ»<br>та подарунок</span>
                        <span v-else>ТАРИФ<br>«ПРЕМІУМ»<br>та подарунки</span>
                    </template>
                    <template v-slot:period>
                        <div class="period">березень - серпень 2020</div>
                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс <a href="https://7eminar.com/zarplata2020" target="_blank">Зарплата-2020</a></li>
                        <li v-if="tab =='6'"  class="no-active">Електронна <br> подушка-масажер</li>
                        <li v-else ><a href="https://www.youtube.com/watch?v=-DulVBtynvY" target="_blank">Електронна
                            <br>подушка-масажер</a></li>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">3979 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">5379 грн</div>
                    </template>
                </landing-package>
                <landing-package :article="tab =='6' ?  'ep-interbuh_pp' : 'ep-interbuh_pp_action'" class="packages__column--three">
                    <template v-slot:title>
                        <span  v-if="tab =='6'"> ТАРИФ<br>«ПРЕМІУМ+»<br>та подарунок</span>
                        <span v-else>ТАРИФ<br>«ПРЕМІУМ+»<br>та подарунки</span>
                    </template>
                    <template v-slot:period>
                        <div class="period">березень - серпень 2020</div>
                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс <a href="https://7eminar.com/zarplata2020" target="_blank">Зарплата-2020</a></li>
                        <li v-if="tab =='6'"  class="no-active">Електронна <br> подушка-масажер</li>
                        <li v-else ><a href="https://www.youtube.com/watch?v=-DulVBtynvY" target="_blank">Електронна
                            <br>подушка-масажер</a></li>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">5899 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">7299 грн</div>
                    </template>
                </landing-package>

                        <landing-package :article="tab =='6' ?  'ep-api_liga' : 'ep-api_liga_action'" class="package-plus package-plus-top">
                        <template v-slot:title>
                            <span  v-if="tab =='6'"> ТАРИФ <br>   «Інтербух  + 7eminar.com»<br>та подарунок</span>
                            <span v-else>ТАРИФ<br>«Інтербух  + 7eminar.com»<br>та подарунки</span>
                        </template>
                            <template v-slot:period>
                                <div class="period">березень - серпень 2020</div>
                            </template>
                            <template v-slot:gifts>
                                <li >Відеокурс <a href="https://7eminar.com/zarplata2020" target="_blank">Зарплата-2020</a></li>
                                <li v-if="tab =='6'"  class="no-active">Електронна <br> подушка-масажер</li>
                                <li v-else ><a href="https://www.youtube.com/watch?v=-DulVBtynvY" target="_blank">Електронна
                                    <br>подушка-масажер</a></li>
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
                                <br><span  > (березень - серпень 2020)</span> </li>
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
    data:()=>({
        tab: '12'
    })
}
</script>