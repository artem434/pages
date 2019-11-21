<template>
    <landing name="interbuh_november2019_2" advantages="epressa_add_interbuh" class="landing-interbuh_november2019_2">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head.webp')" type="image/webp">
                                <img :src="mix('images/head.jpg')" class="img-fluid" alt="coffe">
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
                <h2 class="landing-title landing-title--columns"><span>АКЦІЙНА ПРОПОЗИЦІЯ ДІЄ ДО 22 ЛИСТОПАДА </span></h2>

            </div>
        </template>
        <template v-slot:action-due>

            <p class="landing-section__action">Передплатити бухгалтерський сервіс «Інтерактивна бухгалтерія» – це отримати у подарунок смартфон або планшет та ще й квиток до залу на Великий Кадровий Семінар!</p>

        </template>
        <template v-slot:tab-radio>
            <div class="tab-content"> <label class="label" :class="{active: tab ==='6'}" @click="tab = '6'">+ 1 подарунок </label> <label class="label" :class="{active: tab ==='12'}" @click="tab = '12'">+ 2 подарунки </label></div>
        </template>
        <template v-slot:packages_list>
            <landing-package-row v-show="tab ==='6'">
                <landing-package article="ep-interbuh_st_2111">
                    <template v-slot:title>ТАРИФ<br>«СТАНДАРТ»<br>та подарунок</template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li class="no-active">сучасний планшет або смартфон</li>
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
                        <div class="package__old-price" style="text-decoration: line-through">2534 грн</div>
                    </template>
                </landing-package>
                <landing-package article="ep-interbuh_pr_2111">
                    <template v-slot:title>ТАРИФ<br>«ПРЕМІУМ»<br>та подарунок</template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li class="no-active">сучасний планшет або смартфон</li>
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
                        <div class="package__old-price" style="text-decoration: line-through">3974 грн</div>
                    </template>
                </landing-package>
                <landing-package article="ep-interbuh_pp_2111">
                    <template v-slot:title>ТАРИФ<br>«ПРЕМІУМ+»<br>та подарунок</template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li class="no-active">сучасний планшет або смартфон</li>
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
                        <div class="package__old-price" style="text-decoration: line-through">5894 грн</div>
                    </template>
                </landing-package>
                    <landing-package article="ep-interbuh_7ib_211" class="package-plus package-plus-top">
                        <template v-slot:title>ТАРИФ «Інтерактивна <br> бухгалтерія  + 7eminar.com»<br>та подарунок</template>
                        <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                        <template v-slot:gifts>
                            <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                            <li class="no-active">сучасний планшет або смартфон</li>
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
                            <div class="package__old-price" style="text-decoration: line-through">4088 грн</div>
                        </template>
                    </landing-package>
            </landing-package-row>
            <landing-package-row v-show="tab ==='12'" class="landing-package__twele">
                <landing-package article="ep-interbuh_st_2111_gift">
                    <template v-slot:title>ТАРИФ<br>«СТАНДАРТ»<br>та подарунки</template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li >сучасний <a href="https://consumer.huawei.com/ua/tablets/mediapad-t3-7/" target="_blank">планшет</a> або <a href="https://consumer.huawei.com/ua/phones/y5-2018/" target="_blank">смартфон</a></li>
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
                        <div class="package__old-price" style="text-decoration: line-through">7634 грн</div>
                    </template>
                </landing-package>
                <landing-package article="ep-interbuh_pr_2111_gift">
                    <template v-slot:title>ТАРИФ<br>«ПРЕМІУМ»<br>та подарунки</template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li >сучасний <a href="https://consumer.huawei.com/ua/tablets/mediapad-t3-7/" target="_blank">планшет</a> або <a href="https://consumer.huawei.com/ua/phones/y5-2018/" target="_blank">смартфон</a></li>
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
                        <div class="package__old-price" style="text-decoration: line-through">9074 грн</div>
                    </template>
                </landing-package>
                <landing-package article="ep-interbuh_pp_2111_gift">
                    <template v-slot:title>ТАРИФ<br>«ПРЕМІУМ+»<br>та подарунки</template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li >сучасний <a href="https://consumer.huawei.com/ua/tablets/mediapad-t3-7/" target="_blank">планшет</a> або <a href="https://consumer.huawei.com/ua/phones/y5-2018/" target="_blank">смартфон</a></li>
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
                        <div class="package__old-price" style="text-decoration: line-through">10994 грн</div>
                    </template>
                </landing-package>
                <landing-package article="ep-interbuh_7ib_2111_gift" class="package-plus package-plus-top">
                    <template v-slot:title>ТАРИФ «Інтерактивна <br> бухгалтерія  + 7eminar.com»<br>та подарунки</template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li >сучасний <a href="https://consumer.huawei.com/ua/tablets/mediapad-t3-7/" target="_blank">планшет</a> або <a href="https://consumer.huawei.com/ua/phones/y5-2018/" target="_blank">смартфон</a></li>
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
                        <div class="package__old-price" style="text-decoration: line-through">9188 грн</div>
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