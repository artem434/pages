<template>
    <landing name="dtkt_december2020_1" advantages="epressa_add_interbuh" class="landing-dtkt_december2020_1">
        <template v-slot:cover>
          <Snowf
              :amount="50"
              :size="5"
              :speed="1.5"
              :wind="0"
              :opacity="0.8"
              :swing="1"
              :image="null"
              :zIndex="null"
              :resize="true"
              color="#fff"
          />
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container">
                        <div class="cover">
                            <a class="d-none d-md-block" href="#gift">
                                <picture class="cover__img">
                                    <source :src="mix('images/dk1.webp')" type="image/webp">
                                    <img :src="mix('images/dk-min1.jpg')" class="img-fluid" alt="dk">
                                </picture>
                            </a>
                          <a class="d-block d-md-none" href="#gift">
                            <picture class="cover__img">
                              <source :src="mix('images/320_dk.webp')" type="image/webp">
                              <img :src="mix('images/320_dk-min.jpg')" class="img-fluid" alt="dk">
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
                <p class="landing-section__action">{{ page.options['order_subtitle']}} </p>
              <p class="landing-section__action">{{ page.options['order_subtitle-two']}} </p>
            </div>
        </template>
        <template v-slot:packages_list>
          <h2  id="gift" class="packages__title">{{ page.options['order_title-top']}}</h2>
            <landing-package-row>
                <landing-package article="ep-dtkt_ek_action1">
                    <template v-slot:title>
                      <span>ЕКСПЕРТ<br>та подарунки</span>
                    </template>
                    <template v-slot:period>
                      <p class="package__custom-price">
                        <price article="ep-dtkt_ek_action1" :options="{periods: 1}" format="0"/>
                        грн/міс.
                      </p>
                    </template>

                  <template v-slot:gifts>
                    <li >Великий Річний Семінар (гарантовано)</li>
                    <li> Оберіть свій подарунок <br>  (при передплаті на 12 міс.)
                      <ul>
                        <li><a target="_blank" href="https://bt.rozetka.com.ua/260258496/p260258496/">• пульсоксиметр</a></li>
                        <li><a target="_blank" href="https://rozetka.com.ua/excellent_houseware_170170100/p61587783/">• гейзерна кавоварка</a></li>
                        <li><a target="_blank" href="https://bt.rozetka.com.ua/scarlett_sc_ks57p33/p70745330/">• кухонні ваги</a></li>
                      </ul>
                    </li>
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

                <landing-package article="ep-dtkt_pr" class="package__two">
                <template v-slot:title>
                  <span>ПРОФІ<br>та подарунки</span>
                </template>
                <template v-slot:period>
                  <p class="package__custom-price">
                    <price article="ep-dtkt_pr" :options="{periods: 1}" format="0"/>  грн/міс.
                  </p>
                </template>

                  <template v-slot:gifts>
                    <li >Великий Річний Семінар (гарантовано)</li>
                    <li> Оберіть свій подарунок <br>  (при передплаті на 12 міс.)
                      <ul>
                        <li><a target="_blank" href="https://bt.rozetka.com.ua/260258496/p260258496/">• пульсоксиметр</a></li>
                        <li><a target="_blank" href="https://rozetka.com.ua/excellent_houseware_170170100/p61587783/">• гейзерна кавоварка</a></li>
                        <li><a target="_blank" href="https://bt.rozetka.com.ua/scarlett_sc_ks57p33/p70745330/">• кухонні ваги</a></li>
                      </ul>
                    </li>
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

                <landing-package article="ep-dtkt_pp_action1" class="package__three package__plus-top">
                        <template v-slot:title>
                          <span>ПРОФІ + 7eminar.ua<br>та подарунки</span>
                        </template>
                            <template v-slot:period>
                              <p class="package__custom-price">
                                <price article="ep-dtkt_pp_action1" :options="{periods: 1}" format="0"/>
                                грн/міс.
                              </p>
                            </template>
                  <template v-slot:gifts>
                    <li >Великий Річний Семінар (гарантовано)</li>
                    <li> Оберіть свій подарунок <br>  (при передплаті на 12 міс.)
                      <ul>
                        <li><a target="_blank" href="https://bt.rozetka.com.ua/260258496/p260258496/">• пульсоксиметр</a></li>
                        <li><a target="_blank" href="https://rozetka.com.ua/excellent_houseware_170170100/p61587783/">• гейзерна кавоварка</a></li>
                        <li><a target="_blank" href="https://bt.rozetka.com.ua/scarlett_sc_ks57p33/p70745330/">• кухонні ваги</a></li>
                      </ul>
                    </li>
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
