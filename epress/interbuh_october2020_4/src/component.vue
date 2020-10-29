<template>
    <landing name="interbuh_october2020_4" advantages="epressa_add_interbuh" class="landing-interbuh_october2020_4">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container">
                      <div class="cover">
                        <a class="d-none d-md-block" href="#gift">
                          <picture class="cover__img">
                            <source :src="mix('images/inter.webp')" type="image/webp">
                            <img :src="mix('images/inter-min.jpg')" class="img-fluid" alt="IB">
                          </picture>
                        </a>
                        <a class="d-block d-md-none" href="#gift">
                          <picture class="cover__img">
                            <source :src="mix('images/inter_mobile.webp')" type="image/webp">
                            <img :src="mix('images/inter_mobile-min.jpg')" class="img-fluid" alt="IB">
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
                <landing-package article="ep-interbuh_st_action1">
                    <template v-slot:title>
                      <span>ІНТЕРБУХ</span>
                    </template>
                    <template v-slot:period>
                        <div class="package__month">3 місяці</div>
                      <p class="package__custom-price">
                        <price article="ep-interbuh_st_action1" :options="{periods: 3}" format="0"/>
                        грн
                      </p>
                    </template>

                    <template v-slot:gifts>
                      <li ><a href="https://7eminar.com/psbo2020" target="_blank">Online-школа для бухгалтера «П(С)БО легкий старт»</a></li>
                      <li>Сертифікат <br> Розетка або Алло <br> на 5000 грн</li>
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

                <landing-package article="ep-api_liga_action1" class="package__two">
                        <template v-slot:title>
                          <span>ІНТЕРБУХ <br>+ 7EMINAR.COM</span>
                        </template>
                            <template v-slot:period>
                              <div class="package__month">3 місяці</div>
                              <p class="package__custom-price">
                                <price article="ep-api_liga_action1" :options="{periods: 3}" format="0"/>
                                грн
                              </p>
                            </template>
                        <template v-slot:gifts>
                          <li ><a href="https://7eminar.com/psbo2020" target="_blank">Online-школа для бухгалтера «П(С)БО легкий старт»</a></li>
                          <li>Сертифікат <br> Розетка або Алло <br> на 5000 грн</li>
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
                <li ><a href="https://7eminar.com/psbo2020" target="_blank">Online-школа для бухгалтера «П(С)БО легкий старт»</a></li>
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
                <li ><a href="https://7eminar.com/psbo2020" target="_blank">Online-школа для бухгалтера «П(С)БО легкий старт»</a></li>
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
