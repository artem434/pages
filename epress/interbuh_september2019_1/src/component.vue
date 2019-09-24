<template>
    <landing name="interbuh" advantages="epressa_add_interbuh" class="landing-interbuh_september2019_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                         <!--   <picture class="cover__img "><source srcset="/storage/pages/68_interbuh_september2019_1/images/head_10_ib_01.webp" type="image/webp"> <img src="/storage/pages/68_interbuh_september2019_1/images/head_10_ib_01-min.jpg" alt="" class="img-fluid"></picture>-->
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
                <h2 class="landing-title landing-title--columns"><span>Акційна пропозиція діє до 30 вересня</span></h2>
            </div>
        </template>
        <template v-slot:action-due>
            <p class="landing-section__action">Осінній КотоФей прийшов не з порожніми лапками! Передплатіть «Інтерактивну бухгалтерію» та отримайте у подарунок осінній шарф або парасольку.</p>
        </template>
        <template v-slot:packages_list>
            <landing-package-row>
                <landing-package article="ep-interbuh_gp">
                    <template v-slot:title>ТАРИФ<br>«ГАЗЕТА+»<br>та подарунок</template>
                    <template v-slot:gifts>
                        <li>Cтильний шарф</li>
                        <li class="no-active">Парасолька</li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щоденна електронна газета – аналітика та новини</li>
                        <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                        <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                        <li>Тематичні спецвипуски</li>
                        <li>Календар бухгалтера</li>
                    </template>
                </landing-package>
                <landing-package article="ep-interbuh_st">
                    <template v-slot:title>ТАРИФ<br>«СТАНДАРТ»<br>та подарунок</template>
                    <template v-slot:gifts>
                        <li>Cтильний шарф</li>
                        <li class="no-active">Парасолька</li>
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
                </landing-package>
                <landing-package article="ep-interbuh_pr">
                    <template v-slot:title>ТАРИФ<br>«ПРЕМІУМ»<br>та подарунок</template>
                    <template v-slot:gifts>
                        <li class="no-active">Cтильний шарф</li>
                        <li>Парасолька</li>
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
                </landing-package>
            </landing-package-row>
            <landing-package-row>
                <landing-package article="ep-interbuh_pp"  >
                    <template v-slot:title>ТАРИФ<br>«ПРЕМІУМ+»<br>та подарунок</template>
                    <template v-slot:gifts>
                        <li class="no-active">Cтильний шарф</li>
                        <li>Парасолька</li>
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
                </landing-package>
                <landing-package article="ep-interbuh_7ib" class="package-plus-top package-plus">
                    <template v-slot:title>ТАРИФ «Інтерактивна <br> бухгалтерія  + 7eminar.ua»<br>та подарунок</template>
                    <template v-slot:gifts>
                        <li>Cтильний шарф</li>
                        <li class="no-active">Парасолька</li>
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
                        <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 120 курсів та вебінарів для перегляду протягом 2020 р.</li>
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