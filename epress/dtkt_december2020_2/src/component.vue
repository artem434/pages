<template>
    <landing name="dtkt_december2020_2" advantages="epressa_add_interbuh" class="landing-dtkt_december2020_2">
        <template v-slot:cover>

            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container">
                        <div class="cover">
                          <a class="d-none d-md-block" href="#gift">
                            <picture class="cover__img">
                              <source :src="mix('images/dk_hero.webp')" type="image/webp">
                              <img :src="mix('images/dk_hero-min.jpg')" class="img-fluid" alt="dk">
                            </picture>
                          </a>
                          <a class="d-block d-md-none" href="#gift">
                            <picture class="cover__img">
                              <source :src="mix('images/320.webp')" type="image/webp">
                              <img :src="mix('images/320-min.jpg')" class="img-fluid" alt="dk">
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
            </div>
        </template>
        <template v-slot:packages_list>

            <landing-package-row>
                <landing-package id="gift" article="ep-dtkt_pr_action1">
                    <template v-slot:title>
                      <span>«ПРОФІ»</span>
                    </template>
                    <template v-slot:period>

                      <p class="package__custom-price">
                        <price article="ep-dtkt_pr_action1" :options="{periods: 1}" format="0"/>
                        грн/міс.
                      </p>
                      <div class="package__month">349 грн/міс.</div>
                    </template>

                  <template v-slot:gifts>
                    <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
                      Online-Семінар</a></li>
                    <li>Знижка -30%</li>
                    </template>

                  <template v-slot:abilities>
                    <li>Щоденна добірка новин</li>
                    <li>«Документи за тиждень»</li>
                    <li>«Запитання і відповіді» за тиждень</li>
                    <div v-if="show">
                      <li>Розумний податковий календар</li>
                      <li>База нормативних документів</li>
                      <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                      <li>Сервіс «Мій кабінет»</li>
                      <li>Пакет «Тематичні розсилки»</li>
                      <li>Електронний журнал «Дебет-Кредит»</li>
                      <li>Щомісячні спецвипуски</li>
                      <li>Доступ до архівних номерів на сайті</li>
                      <li class="package__abilities-item--noactive">Сервіс «Постав запитання редакції»</li>
                      <li class="package__abilities-item--noactive">Вебінари редакції</li>
                      <li class="package__abilities-item--noactive">Велика настільна книга</li>
                      <li class="package__abilities-item--noactive">Звітність у «СОТА»</li>
                    </div>
                    <p class="package__list-show" @click="show = !show">{{ btnText }}</p>

                  </template>
                </landing-package>

                <landing-package article="ep-dtkt_pp_action1" class="package__two">
                <template v-slot:title>
                  <span>«профі плюс»</span>
                </template>
                <template v-slot:period>

                  <p class="package__custom-price">
                    <price article="ep-dtkt_pp_action1" :options="{periods: 1}" format="0"/> грн/міс.
                  </p>
                  <div class="package__month">599 грн/міс.</div>
                </template>

                  <template v-slot:gifts>
                    <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
                      Online-Семінар</a></li>
                    <li>Знижка -30%</li>
                </template>
                  <template v-slot:abilities>
                    <li>Щоденна добірка новин</li>
                    <li>«Документи за тиждень»</li>
                    <li>«Запитання і відповіді» за тиждень</li>
                    <div v-if="show">
                      <li>Розумний податковий календар</li>
                      <li>База нормативних документів</li>
                      <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                      <li>Сервіс «Мій кабінет»</li>
                      <li>Пакет «Тематичні розсилки»</li>
                      <li>Електронний журнал «Дебет-Кредит»</li>
                      <li>Щомісячні спецвипуски</li>
                      <li>Доступ до архівних номерів на сайті</li>
                      <li>Сервіс «Постав запитання редакції»</li>
                      <li>Вебінари редакції</li>
                      <li>Велика настільна книга</li>
                      <li>Звітність у «СОТА»</li>
                      <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 200 курсів та вебінарів для перегляду
                        <!--<br><span  > (квітень - вересень 2020)</span>--> </li>
                    </div>
                    <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
                  </template>
              </landing-package>

                <landing-package article="ep-dtkt_paper" class="package__three package__plus-top">
                        <template v-slot:title>
                          <span>ПАПЕРОВИЙ <br> «ДЕБЕТ-КРЕДИТ»</span>
                        </template>
                            <template v-slot:period>

                              <p class="package__custom-price">
                                <price article="ep-dtkt_paper" :options="{periods: 1}" format="0"/>
                                грн/міс.
                              </p>
                              <div class="package__month">511 грн/міс.</div>
                            </template>
                        <template v-slot:gifts>
                          <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
                            Online-Семінар</a></li>
                          <li>Знижка -30%</li>
                        </template>
                      <template v-slot:abilities>
                    <li>Пакет «МІЙ АСИСТЕНТ»</li>
                    <li>Пакет «ТЕМАТИЧНІ РОЗСИЛКИ»</li>
                    <li>Електронний журнал
                      «Дебет-Кредит»</li>
                    <div v-if="show">
                      <li>Щомісячні спецвипуски</li>
                      <li>Доступ до архівних номерів на сайті</li>
                      <li>Сервіс «Гаряча лінія» редакції</li>
                      <li>Вебінари редакції</li>
                      <li>Велика настільна книга</li>
                      <li>Звітність у «СОТА»</li>
                      <li>Паперовий журнал
                        «Дебет-Кредит»</li>
                    </div>
                    <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
                  </template>
                    </landing-package>
            </landing-package-row>

          <landing-package-row class="package-two">
            <landing-package article="ep-dtkt_ma">
              <template v-slot:title>
                <span>МІЙ АСИСТЕНТ</span>
              </template>
              <template v-slot:period>

                <p class="package__custom-price">
                  <price article="ep-dtkt_ma" :options="{periods: 1}" format="0"/>
                  грн/міс.
                </p>
                <div class="package__month">58 грн/міс.</div>
              </template>

              <template v-slot:gifts>
                <li class="no-active" >Великий Бухгалтерський <br>
                  Online-Семінар</li>
                <li>Знижка -30%</li>
              </template>
              <template v-slot:abilities>
                <li>Щоденна добірка новин</li>
                <li>«Документи за тиждень»</li>
                <li>«Запитання і відповіді» за тиждень</li>
                <div v-if="show">
                  <li>Розумний податковий календар</li>
                  <li>База нормативних документів</li>
                  <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                  <li>Аналітичні матеріали редакції</li>
                  <li>Сервіс «Мій кабінет»</li>
                </div>
                <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
              </template>
            </landing-package>

            <landing-package article="ep-dtkt_ek_action1"vclass="package__two">
              <template v-slot:title>
                <span>«ЕКСПЕРТ»</span>
              </template>
              <template v-slot:period>

                <p class="package__custom-price">
                  <price article="ep-dtkt_ek_action1" :options="{periods: 1}" format="0"/>
                  грн/міс.
                </p>
                <div class="package__month">199 грн/міс.</div>
              </template>

              <template v-slot:gifts>
                <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
                  Online-Семінар</a></li>
                <li>Знижка -30%</li>
              </template>
              <template v-slot:abilities>
                <li>Щоденна добірка новин</li>
                <li>«Документи за тиждень»</li>
                <li>«Запитання і відповіді» за тиждень</li>
                <div v-if="show">
                  <li>Розумний податковий календар</li>
                  <li>База нормативних документів</li>
                  <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                  <li>Сервіс «Мій кабінет»</li>
                  <li>Пакет «Тематичні розсилки»</li>
                  <li>Електронний журнал «Дебет-Кредит»</li>
                  <li>Щомісячні спецвипуски</li>
                  <li>Доступ до архівних номерів на сайті</li>
                </div>
                <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
              </template>
            </landing-package>

            <landing-package article="ep-dtkt_tr" class="package__three">
              <template v-slot:title>
                <span>«Тематичні <br> розсилки»</span>
              </template>
              <template v-slot:period>

                <p class="package__custom-price">
                  <price article="ep-dtkt_tr" :options="{periods: 1}" format="0"/>
                  грн/міс.
                </p>
                <div class="package__month">59 грн/міс.</div>
              </template>
              <template v-slot:gifts>
                <li class="no-active" >Великий Бухгалтерський <br>
                  Online-Семінар</li>
                <li>Знижка -30%</li>
              </template>
              <template v-slot:abilities>
                <li>Регулярні періодичні добірки – у вашій поштовій скрині</li>
                <li>Обирайте з 12 можливих тем те, що вам зараз дійсно потрібно</li>
              </template>
            </landing-package>
          </landing-package-row>

        </template>

    </landing>
</template>

<script>
    import Page from '../../core/Page'
    import Snowf from 'vue-snowf';
    export default {
        mixins: [Page],
      components: {
        Snowf
      },
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
