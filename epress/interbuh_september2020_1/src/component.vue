<template>
    <landing name="interbuh_september2020_1" advantages="epressa_add_interbuh" class="landing-interbuh_september2020_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container">
                        <div class="cover">
                            <a class="d-none d-md-block" href="#gift">
                                <picture class="cover__img">
                                    <source :src="mix('images/interbuh_hero.png.webp')" type="image/webp">
                                    <img :src="mix('images/interbuh_hero.png.jpg')" class="img-fluid" alt="IB">
                                </picture>
                            </a>
                          <a class="d-block d-md-none" href="#gift">
                            <picture class="cover__img">
                              <source :src="mix('images/mobile_interbuh.webp')" type="image/webp">
                              <img :src="mix('images/mobile_interbuh.jpg')" class="img-fluid" alt="IB">
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
                <h2 class="landing-title"><span>{{ page.options['order_title']}}</span></h2>
                <p class="landing-section__action">{{ page.options['order_subtitle']}}  </p>
            </div>
        </template>
        <template v-slot:packages_list>
          <h2  id="gift" class="packages__title">{{ page.options['order_title-top']}}</h2>
            <landing-package-row>
                <landing-package article="ep-interbuh_st_action">
                    <template v-slot:title>
                      <span>ІНТЕРБУХ</span>
                    </template>
                    <template v-slot:period>
                        <div class="package__month">3 місяці</div>
                      <p class="package__custom-price">
                        <price article="ep-interbuh_st_action" :options="{periods: 3}" format="0"/>
                        грн
                      </p>
                    </template>

                    <template v-slot:gifts>
                        <li >Відеозапис семінару <br> <a href="https://7eminar.com/16092020" target="_blank"> «Перевірки<br> податкової/Держпраці»</a> </li>
                        <li>Сертифікат <br> Розетка або Алло <br> на 3000 грн</li>
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
                            <p class="package__list-show" @click="show = !show">{{ btnText }}</p></div>
                    </template>
                </landing-package>

                <landing-package article="ep-api_liga_action" class="package__two">
                        <template v-slot:title>
                          <span>ІНТЕРБУХ <br>+ 7EMINAR.COM</span>
                        </template>
                            <template v-slot:period>
                              <div class="package__month">3 місяці</div>
                              <p class="package__custom-price">
                                <price article="ep-api_liga_action" :options="{periods: 3}" format="0"/>
                                грн
                              </p>
                            </template>
                        <template v-slot:gifts>
                          <li>Відеозапис семінару <br> <a href="https://7eminar.com/16092020" target="_blank"> «Перевірки<br> податкової/Держпраці»</a> </li>
                          <li>Сертифікат <br> Розетка або Алло <br> на 3000 грн</li>
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
                                       </li>
                                </div>
                                <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
                            </div>
                        </template>
                    </landing-package>
            </landing-package-row>
          <h2 class="packages__title">{{ page.options['order_title-bottom']}}</h2>
          <landing-package-row class="package-two">
            <landing-package article="ep-interbuh_st">
              <template v-slot:title>
                <span>ІНТЕРБУХ</span>
              </template>
              <template v-slot:period>
                <div class="package__month">3 місяці</div>
                <p class="package__custom-price">
                  <price article="ep-interbuh_st" :options="{periods: 3}" format="0"/>
                  грн
                </p>
              </template>
              <template v-slot:gifts>
                <li >Відеозапис семінару <br> <a href="https://7eminar.com/16092020" target="_blank"> «Перевірки<br> податкової/Держпраці»</a> </li>
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
                  <p class="package__list-show" @click="show = !show">{{ btnText }}</p></div>
              </template>
            </landing-package>

            <landing-package article="ep-api_liga" class="package__two">
              <template v-slot:title>
                <span>ІНТЕРБУХ <br>+ 7EMINAR.COM</span>
              </template>
              <template v-slot:period>
                <div class="package__month">3 місяці</div>
                <p class="package__custom-price">
                  <price article="ep-api_liga" :options="{periods: 3}" format="0"/>
                  грн
                </p>
              </template>
              <template v-slot:gifts>
                <li>Відеозапис семінару <br> <a href="https://7eminar.com/16092020" target="_blank"> «Перевірки<br> податкової/Держпраці»</a> </li>
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
                    </li>
                  </div>
                  <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
                </div>
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
