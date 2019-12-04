<template>
    <landing name="interbuh" advantages="epressa_add_interbuh" class="landing-interbuh">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/slider-022_webp.webp')" type="image/webp">
                                <img :src="mix('images/slider-022.jpg')" class="img-fluid" alt="coffe">
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:about_description>
            <p>«Інтербух» – це медіасервіс, який щодня надає 100% необхідної, корисної та завжди актуальної інформації для бухгалтерів, аудиторів, фінансистів, юристів, власників бізнесу, керівників, кадровиків, викладачів та студентів облікових і фінансових дисциплін.</p>
            <p>«Інтербух» – це більше, ніж просто новини.</p>
            <p>Передплатники отримують доступ до аналітики, нормативно-правової інформації та можуть звернутися за підтримкою до професіоналів.</p>
        </template>
        <template v-slot:packages_list>
            <landing-package-row>
                    <!--<landing-package article="ep-interbuh_gp">
                        <template v-slot:title>ТАРИФ<br>«ГАЗЕТА+»</template>
                        <template v-slot:gifts>
                            <li>Відеозапис Великого бухгалтерського семінару</li>
                            <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
                        </template>
                        <template v-slot:abilities>
                            <li>Щоденна електронна газета – аналітика та новини</li>
                            <li>Вбудована база нормативних документів від ЛІГА:ЗАКОН</li>
                            <li>Довідники, бланки та форми від ЛІГА:ЗАКОН (понад 7000 документів)</li>
                            <li>Тематичні спецвипуски</li>
                            <li>Календар бухгалтера</li>
                        </template>
                    </landing-package>-->
                    <landing-package article="ep-interbuh_st_1111">
                        <template v-slot:title>ТАРИФ<br>«СТАНДАРТ»</template>
                        <template v-slot:gifts>
                            <li>Відеозапис Великого бухгалтерського семінару</li>
                            <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
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
                    <landing-package article="ep-interbuh_pr_1111">
                        <template v-slot:title>ТАРИФ<br>«ПРЕМІУМ»</template>
                        <template v-slot:gifts>
                            <li>Відеозапис Великого бухгалтерського семінару</li>
                            <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
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
                    <landing-package article="ep-interbuh_pp_1111">
                        <template v-slot:title>ТАРИФ<br>«ПРЕМІУМ+»</template>
                        <template v-slot:gifts>
                            <li>Відеозапис Великого бухгалтерського семінару</li>
                            <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
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
            </landing-package-row>
            <landing-package-row>

                    <landing-package article="ep-interbuh_7ib">
                        <template v-slot:title>ТАРИФ «Інтербух <br>  + 7eminar.com»</template>
                        <template v-slot:gifts>
                            <li>Відеозапис Великого бухгалтерського семінару</li>
                            <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
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
                            <li>Бухгалтерська відеоплатформа 7eminar.ua</li>
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