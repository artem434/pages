<template>
  <landing name="dtkt_december2020" advantages="epressa_add_interbuh" class="landing-dtkt_july_2021">
    <template v-slot:cover>
      <div class="hero">
        <div class="container">
          <div class="hero__bg">
            <picture class="cover__img d-none d-md-block">
              <source :src="mix('images/bg.webp')" type="image/webp">
              <img :src="mix('images/bg-min.png')" class="img-fluid" alt="dk">
            </picture>

            <picture class="cover__img d-block d-md-none">
              <source :src="mix('images/bg-sm.webp')" type="image/webp">
              <img :src="mix('images/bg-sm.jpg')" class="img-fluid" alt="dk">
            </picture>
          </div>
          <div class="hero__content">
            <div class="hero__logo">
              <picture>
                <img :src="mix('images/epresa_white.png')" class="epresa" alt="dk">
              </picture>
              <picture>
                <img :src="mix('images/DTKT.UA_LOGO.png')" class="DTKT" alt="dk">
              </picture>
            </div>

            <p class="hero__title">На відпочинок </p>
            <p class="hero__subtitle">з подарунком! </p>
            <p class="hero__description"><b> Отримайте смартфон або планшет <br>
              у подарунок</b> при передплаті бухгалтерського <br>
              сервісу "Дебет-Кредит"</p>
            <p class="hero__btn">
              <a href="#gift" class="btn">Хочу передплатити</a>
            </p>
          </div>
        </div>
      </div>
      <!--        <div class="dtkt-promo">
                <div class="landing-section">
                  <div class="container">
                    <div class="cover">
                      <a class="d-none d-md-block" href="#gift">
                        <picture class="cover__img">
                          <source :src="mix('images/01_dk.webp')" type="image/webp">
                          <img :src="mix('images/01_dk-min.jpg')" class="img-fluid" alt="dk">
                        </picture>
                      </a>
                      <a class="d-block d-md-none" href="#gift">
                        <picture class="cover__img">
                          <source :src="mix('images/01_dk_mob.webp')" type="image/webp">
                          <img :src="mix('images/01_dk_mob-min.jpg')" class="img-fluid" alt="dk">
                        </picture>
                      </a>
                    </div>
                  </div>
                </div>
              </div>-->
    </template>
    <template v-slot:about>
      <div>
      </div>
    </template>
    <template v-slot:price-title>
      <div id="gift">
        <h2 class="landing-title"><span>{{ page.options['order_title'] }}</span></h2>
        <p class="landing-section__action">{{ page.options['order_subtitle'] }} </p>
        <p class="landing-section__action">{{ page.options['order_subtitle-two'] }} </p>
      </div>
    </template>
    <template v-slot:packages_list>
      <h2 class="packages__title">{{ page.options['order_title-top'] }}</h2>
      <landing-package-row>
        <landing-package article="ep-dtkt_pr_action1" class="package__two">
          <template v-slot:title>
            <span>ПРОФІ<br>та подарунок</span>
          </template>
          <template v-slot:period>
            <!--              <div class="package__month">6 місяців</div>-->
            <p class="package__custom-price">
              <price article="ep-dtkt_pr_action1" :options="{periods: 1}" format="0"/>
              <b>грн/міс.</b>
            </p>
          </template>
          <template v-slot:gifts>
            <li><a href="https://7eminar.ua/subscribe" target="_blank">Передплата на Бухгалтерську Відеоплатформу №1 (1
              міс)</a></li>
            <li><h5 class="package__presents-title">Оберіть подарунок:</h5></li>
            <li class="no-active">Смартфон Xiaomi Redmi</li>
            <li class="no-active">Планшет Lenovo</li>
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
            <div class="package__footer-two">
              <router-link :to="`/order?article=ep-dtkt_pr_action1&options[periods]=12`" class="btn btn-package  btn-arrow btn-package--twelve"
                           target="_blank">Беру!
              </router-link>
            </div>

          </template>


        </landing-package>

        <landing-package article="ep-dtkt_pr_gift1" class="package__two">
          <template v-slot:title>
            <span>ПРОФІ<br>та подарунки</span>
          </template>
          <template v-slot:period>
            <!--              <div class="package__month">6 місяців</div>-->
            <p class="package__custom-price">
              <price article="ep-dtkt_pr_gift1" :options="{periods: 1}" format="0"/>
              <b>грн/міс.</b>
            </p>
          </template>
          <template v-slot:gifts>
            <li><a href="https://7eminar.ua/subscribe" target="_blank">Передплата на Бухгалтерську Відеоплатформу №1 (1
              міс)</a></li>
            <li><h5 class="package__presents-title">Оберіть подарунок:</h5></li>
            <li><a href="https://rozetka.com.ua/xiaomi_redmi_9a_2_32gb_granite_gray_m2006c3lg/p232347079/"
                   target="_blank">Смартфон Xiaomi Redmi</a></li>
            <li><a
                href="https://allo.ua/ru/products/internet-planshety/lenovo-tab-m7-tb-7305x-16gb-4g-onyx-black-za570039ua.html"
                target="_blank">Планшет Lenovo</a></li>
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
            <div class="package__footer-two">
              <router-link :to="`/order?article=ep-dtkt_pr_gift1&options[periods]=12`" class="btn btn-package  btn-arrow btn-package--twelve"
                           target="_blank">Беру!
              </router-link>
            </div>
          </template>


        </landing-package>

        <landing-package article="ep-dtkt_pp_action1" class=" package__two ">
          <template v-slot:title>
            <span>ПРОФІ + 7eminar.ua<br>та подарунок</span>
          </template>
          <template v-slot:period>
            <!--              <div class="package__month">6 місяців</div>-->
            <p class="package__custom-price">
              <price article="ep-dtkt_pp_action1" :options="{periods: 1}" format="0"/>
              <b>грн/міс.</b>
            </p>
          </template>
          <template v-slot:gifts>
            <li><a href="https://7eminar.ua/subscribe" target="_blank">Передплата на Бухгалтерську Відеоплатформу №1 (1
              міс)</a></li>
            <li><h5 class="package__presents-title">Оберіть подарунок:</h5></li>
            <li class="no-active">Смартфон Xiaomi Redmi</li>
            <li class="no-active">Планшет Lenovo</li>
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
              <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа <a href="https://7eminar.ua"
                                                                                           target="_blank">7eminar.ua</a>:
                понад 400 курсів та вебінарів для перегляду
                <!--<br><span  > (квітень - вересень 2020)</span>--> </li>
            </div>
            <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
            <div class="package__footer-two">
              <router-link :to="`/order?article=ep-dtkt_pp_action1&options[periods]=12`" class="btn btn-package  btn-arrow btn-package--twelve"
                           target="_blank">Беру!
              </router-link>
            </div>
          </template>
        </landing-package>


        <landing-package article="ep-dtkt_pp_gift1" class=" package__three package__plus-top">
          <template v-slot:title>
            <span>ПРОФІ + 7eminar.ua<br>та подарунки</span>
          </template>
          <template v-slot:period>
            <!--              <div class="package__month">6 місяців</div>-->
            <p class="package__custom-price">
              <price article="ep-dtkt_pp_gift1" :options="{periods: 1}" format="0"/>
              <b>грн/міс.</b>
            </p>
          </template>
          <template v-slot:gifts>
            <li><a href="https://7eminar.ua/subscribe" target="_blank">Передплата на Бухгалтерську Відеоплатформу №1 (1
              міс)</a></li>
            <li><h5 class="package__presents-title">Оберіть подарунок:</h5></li>
            <li><a href="https://rozetka.com.ua/xiaomi_redmi_9a_2_32gb_granite_gray_m2006c3lg/p232347079/"
                   target="_blank">Смартфон Xiaomi Redmi</a></li>
            <li><a
                href="https://allo.ua/ru/products/internet-planshety/lenovo-tab-m7-tb-7305x-16gb-4g-onyx-black-za570039ua.html"
                target="_blank">Планшет Lenovo</a></li>
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
              <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа <a href="https://7eminar.ua"
                                                                                           target="_blank">7eminar.ua</a>:
                понад 400 курсів та вебінарів для перегляду
                <!--<br><span  > (квітень - вересень 2020)</span>--> </li>
            </div>
            <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
            <div class="package__footer-two">
              <router-link :to="`/order?article=ep-dtkt_pp_gift1&options[periods]=12`" class="btn btn-package  btn-arrow btn-package--twelve"
                           target="_blank">Беру!
              </router-link>
            </div>
          </template>
        </landing-package>


      </landing-package-row>
      <!--        <h2 class="packages__title">{{ page.options['order_title-bottom']}}</h2>
              <landing-package-row class="package-two">
                <landing-package article="ep-dtkt_ek">
                  <template v-slot:title>
                    <span>ЕКСПЕРТ<br>та подарунок</span>
                  </template>
                  <template v-slot:period>
      &lt;!&ndash;              <div class="package__month">6 місяців</div>&ndash;&gt;
                    <p class="package__custom-price">
                      <price article="ep-dtkt_ek" :options="{periods: 6}" format="0"/>
                      <b>грн</b>
                    </p>
                  </template>

                  <template v-slot:gifts>
                    <li ><a href="https://7eminar.ua/06072021" target="_blank">Великий Бухгалтерський Семінар </a>(онлайн-трансляція та відеозапис)</li>
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
                    <span>ПРОФІ<br>та подарунок</span>
                  </template>
                  <template v-slot:period>
                    <div class="package__month">6 місяців</div>
                    <p class="package__custom-price">
                      <price article="ep-dtkt_pr" :options="{periods: 6}" format="0"/>
                      <b>грн</b>
                    </p>
                  </template>

                  <template v-slot:gifts>
                    <li ><a href="https://7eminar.ua/06072021" target="_blank">Великий Бухгалтерський Семінар </a>(онлайн-трансляція та відеозапис)</li>
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

                <landing-package article="ep-dtkt_pp" class="package__three">
                  <template v-slot:title>
                    <span>ПРОФІ + 7eminar.ua<br>та подарунок</span>
                  </template>
                  <template v-slot:period>
                    <div class="package__month">6 місяців</div>
                    <p class="package__custom-price">
                      <price article="ep-dtkt_pp" :options="{periods: 6}" format="0"/>
                      <b>грн</b>
                    </p>
                  </template>
                  <template v-slot:gifts>
                    <li ><a href="https://7eminar.ua/06072021" target="_blank">Великий Бухгалтерський Семінар </a>(онлайн-трансляція та відеозапис)</li>

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
                      <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 400 курсів та вебінарів для перегляду
                        &lt;!&ndash;<br><span  > (квітень - вересень 2020)</span>&ndash;&gt; </li>
                    </div>
                    <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
                  </template>
                </landing-package>


              </landing-package-row>-->

    </template>
  </landing>
</template>

<script>
import Page from '../../core/Page'

export default {
  mixins: [Page],

  computed: {

    btnText: function () {
      if (this.show) {
        return 'Приховати'
      }

      return 'А ще входить...'
    }
  },
  data: () => ({
    show: false,
  })

}
</script>
