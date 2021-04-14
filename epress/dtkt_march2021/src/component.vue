<template>
    <landing name="dtkt_december2020" advantages="epressa_add_interbuh" class="landing-dtkt_march2021">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container">
                        <div class="cover">
                            <a class="d-none d-md-block" href="#order">
                                <picture class="cover__img">

                                  <source :src="mix('images/header.webp')" type="image/webp">
                                  <img :src="mix('images/header-min.jpg')" class="img-fluid" alt="dk">
                                </picture>
                            </a>
                          <a class="d-block d-md-none" href="#order">
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
        <template id="gift" v-slot:price-title>
            <div>
              <h2 class="landing-title"><span>{{ page.options['order_title']}}</span></h2>
<!--
                <p class="landing-section__action">{{ page.options['order_subtitle']}} </p>
              <p class="landing-section__action">{{ page.options['order_subtitle-two']}} </p>-->
            </div>
        </template>
        <template   v-slot:packages_list>
<!--          <h2   class="packages__title">{{ page.options['order_title-top']}}</h2>-->
          <landing-package-row class="package-two">
            <landing-package article="ep-dtkt_ek">
              <template v-slot:title>
                <span>ПАКЕТ<br>«ЕКСПЕРТ»</span>
              </template>
              <template v-slot:period>

                <p class="package__custom-price">
                  <price article="ep-dtkt_ek" :options="{periods: 1}" format="0"/>
                  <b>грн/міс.</b>
                </p>
              </template>

              <template v-slot:gifts>
                <li ><a href="https://7eminar.com/25032021" target="_blank">Великий Квартальний Семінар онлайн</a></li>
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

                </div>
                <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
              </template>
            </landing-package>

            <landing-package article="ep-dtkt_pr" class="package__two">
              <template v-slot:title>
                <span>ПАКЕТ<br>«ПРОФІ»</span>
              </template>
              <template v-slot:period>

                <p class="package__custom-price">
                  <price article="ep-dtkt_pr" :options="{periods: 1}" format="0"/>
                  <b>грн/міс.</b>
                </p>
              </template>

              <template v-slot:gifts>
                <li ><a href="https://7eminar.com/25032021" target="_blank">Великий Квартальний Семінар онлайн</a></li>
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
                </div>
                <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
              </template>
            </landing-package>

            <landing-package article="ep-dtkt_pp" class="package__three package__plus-top">
              <template v-slot:title>
                <span>ПАКЕТ<br> «ПРОФІ ПЛЮС»</span>


              </template>
              <template v-slot:period>
                <p class="package__custom-price">
                  <price article="ep-dtkt_pp" :options="{periods: 1}" format="0"/>
                  <b>грн/міс.</b>
                </p>
              </template>
              <template v-slot:gifts>
                <li ><a href="https://7eminar.com/25032021" target="_blank">Великий Квартальний Семінар онлайн</a></li>
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
