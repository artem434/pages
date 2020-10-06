<template>
    <landing name="dtkt_october2020" advantages="epressa_add_interbuh" class="landing-dtkt_october2020">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container">
                        <div class="cover">
                            <a class="d-none d-md-block" href="#gift">
                                <picture class="cover__img">
                                    <source :src="mix('images/coffe_3.webp')" type="image/webp">
                                    <img :src="mix('images/coffe_3.jpg')" class="img-fluid" alt="IB">
                                </picture>
                            </a>
                          <a class="d-block d-md-none" href="#gift">
                            <picture class="cover__img">
                              <source :src="mix('images/320_2.webp')" type="image/webp">
                              <img :src="mix('images/320_2.jpg')" class="img-fluid" alt="IB">
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
                      <div class="package__month">4 місяці</div>
                      <p class="package__custom-price">
                        <price article="ep-dtkt_ek_action1" :options="{periods: 4}" format="0"/>
                        грн
                      </p>
                    </template>

                  <template v-slot:gifts>
                        <li >Відеокурс <br> <a href="https://7eminar.com/pdv2020" target="_blank"> «ПДВ: облік без штрафів»</a> </li>
                        <li><a href="https://bt.rozetka.com.ua/vitek-vt-1514-bk/p303286/" target="_blank">Кавомашина еспресо VITEK VT-1514 BK</a></li>
                    <p class="package__btn">
                      <router-link :to="`/order?article=ep-dtkt_ek_action1&options[periods]=4`" class="btn btn-package  btn-arrow btn-package--four"
                                   target="_blank">Замовити
                      </router-link>
                    </p>
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
                    <div class="package__footer">
                      <router-link :to="`/order?article=ep-dtkt_ek_action1&options[periods]=4`" class="btn btn-package  btn-arrow btn-package--four"
                                   target="_blank">Беру!
                      </router-link>
                    </div>
                  </template>
                </landing-package>

                <landing-package article="ep-dtkt_pr_action1">
                <template v-slot:title>
                  <span>ПРОФІ<br>та подарунки</span>
                </template>
                <template v-slot:period>
                  <div class="package__month">4 місяці</div>
                  <p class="package__custom-price">
                    <price article="ep-dtkt_pr_action1" :options="{periods: 4}" format="0"/>
                    грн
                  </p>
                </template>

                <template v-slot:gifts>
                  <li >Відеокурс <br> <a href="https://7eminar.com/pdv2020" target="_blank"> «ПДВ: облік без штрафів»</a> </li>
                  <li><a href="https://bt.rozetka.com.ua/vitek-vt-1514-bk/p303286/" target="_blank">Кавомашина еспресо VITEK VT-1514 BK</a></li>
                  <p class="package__btn">
                    <router-link :to="`/order?article=ep-dtkt_pr_action1&options[periods]=4`" class="btn btn-package  btn-arrow btn-package--four"
                                 target="_blank">Замовити
                    </router-link>
                  </p>
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
                  <div class="package__footer">
                    <router-link :to="`/order?article=ep-dtkt_pr_action1&options[periods]=4`" class="btn btn-package  btn-arrow btn-package--four"
                                 target="_blank">Беру!
                    </router-link>
                  </div>
                </template>
              </landing-package>

                <landing-package article="ep-dtkt_pp_action1" class="package__two">
                        <template v-slot:title>
                          <span>ПРОФІ + 7eminar.ua<br>та подарунки</span>
                        </template>
                            <template v-slot:period>
                              <div class="package__month">4 місяці</div>
                              <p class="package__custom-price">
                                <price article="ep-dtkt_pp_action1" :options="{periods: 4}" format="0"/>
                                грн
                              </p>
                            </template>
                        <template v-slot:gifts>
                          <li >Відеокурс <br> <a href="https://7eminar.com/pdv2020" target="_blank"> «ПДВ: облік без штрафів»</a> </li>
                          <li><a href="https://bt.rozetka.com.ua/vitek-vt-1514-bk/p303286/" target="_blank">Кавомашина еспресо VITEK VT-1514 BK</a></li>
                          <p class="package__btn">
                            <router-link :to="`/order?article=ep-dtkt_pp_action1&options[periods]=4`" class="btn btn-package  btn-arrow btn-package--four"
                                         target="_blank">Замовити
                            </router-link>
                          </p>
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
                      <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 190 курсів та вебінарів для перегляду
                        <!--<br><span  > (квітень - вересень 2020)</span>--> </li>
                    </div>
                    <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
                    <div class="package__footer">
                      <router-link :to="`/order?article=ep-dtkt_pp_action1&options[periods]=4`" class="btn btn-package  btn-arrow btn-package--four"
                                   target="_blank">Беру!
                      </router-link>
                    </div>
                  </template>
                    </landing-package>
            </landing-package-row>
          <h2 class="packages__title">{{ page.options['order_title-bottom']}}</h2>
          <landing-package-row class="package-two">
            <landing-package article="ep-dtkt_ek_action">
              <template v-slot:title>
                <span>ЕКСПЕРТ<br>та подарунок</span>
              </template>
              <template v-slot:period>
                <div class="package__month">4 місяці</div>
                <p class="package__custom-price">
                  <price article="ep-dtkt_ek_action" :options="{periods: 4}" format="0"/>
                  грн
                </p>
              </template>

              <template v-slot:gifts>
                <li >Відеокурс <br> <a href="https://7eminar.com/pdv2020" target="_blank"> «ПДВ: облік без штрафів»</a> </li>
                <p class="package__btn">
                  <router-link :to="`/order?article=ep-dtkt_ek_action&options[periods]=4`" class="btn btn-package  btn-arrow btn-package--four"
                               target="_blank">Замовити
                  </router-link>
                </p>
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
                <div class="package__footer">
                  <router-link :to="`/order?article=ep-dtkt_ek_action&options[periods]=4`" class="btn btn-package  btn-arrow btn-package--four"
                               target="_blank">Беру!
                  </router-link>
                </div>
              </template>
            </landing-package>

            <landing-package article="ep-dtkt_pr_action">
              <template v-slot:title>
                <span>ПРОФІ<br>та подарунок</span>
              </template>
              <template v-slot:period>
                <div class="package__month">4 місяці</div>
                <p class="package__custom-price">
                  <price article="ep-dtkt_pr_action" :options="{periods: 4}" format="0"/>
                  грн
                </p>
              </template>

              <template v-slot:gifts>
                <li >Відеокурс <br> <a href="https://7eminar.com/pdv2020" target="_blank"> «ПДВ: облік без штрафів»</a> </li>
                <p class="package__btn">
                  <router-link :to="`/order?article=ep-dtkt_pr_action&options[periods]=4`" class="btn btn-package  btn-arrow btn-package--four"
                               target="_blank">Замовити
                  </router-link>
                </p>
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
                <div class="package__footer">
                  <router-link :to="`/order?article=ep-dtkt_pr_action&options[periods]=4`" class="btn btn-package  btn-arrow btn-package--four"
                               target="_blank">Беру!
                  </router-link>
                </div>
              </template>
            </landing-package>

            <landing-package article="ep-dtkt_pp_action" class="package__two">
              <template v-slot:title>
                <span>ПРОФІ + 7eminar.ua<br>та подарунок</span>
              </template>
              <template v-slot:period>
                 <div class="package__month">4 місяці</div>
                <p class="package__custom-price">
                  <price article="ep-dtkt_pp_action" :options="{periods: 4}" format="0"/>
                  грн
                </p>
              </template>
              <template v-slot:gifts>
                <li >Відеокурс <br> <a href="https://7eminar.com/pdv2020" target="_blank"> «ПДВ: облік без штрафів»</a> </li>
                <p class="package__btn">
                  <router-link :to="`/order?article=ep-dtkt_pp_action&options[periods]=4`" class="btn btn-package  btn-arrow btn-package--four"
                               target="_blank">Замовити
                  </router-link>
                </p>
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
                  <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 190 курсів та вебінарів для перегляду
                    <!--<br><span  > (квітень - вересень 2020)</span>--> </li>
                </div>
                <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
                <div class="package__footer">
                  <router-link :to="`/order?article=ep-dtkt_pp_action&options[periods]=4`" class="btn btn-package  btn-arrow btn-package--four"
                               target="_blank">Беру!
                  </router-link>
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
