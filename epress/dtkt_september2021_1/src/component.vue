<template>
    <landing name="dtkt_december2020" advantages="epressa_add_interbuh" class="landing-dtkt_september2021_1">
      <template v-slot:cover>
        <div class="hero">
          <div class="container">

            <div class="hero__bg">
              <picture class="cover__img d-none d-md-block">
                <source :src="mix('images/bg.webp')" type="image/webp">
                <img :src="mix('images/bg-min.jpg')" class="img-fluid" alt="dk">
              </picture>

              <picture class="cover__img d-block d-md-none">
                <source :src="mix('images/bg-sm.webp')" type="image/webp">
                <img :src="mix('images/bg-sm-min.jpg')" class="img-fluid" alt="dk">
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

              <p class="hero__title">Бездоганість <span>у всьому разом з нами!</span></p>
              <p class="hero__subtitle">зручний відпарювач <b>Philips</b></p>


              <p class="hero__description"> у подарунок за передплату <br>
                бухгалтерського сервісу «Дебет-Кредит»</p>
              <p class="hero__btn">
                <a href="#gift" class="btn">БЕРУ!</a>
              </p>
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
          <landing-package article="ep-dtkt_ek_gift1">
            <template v-slot:title>
              <span>ЕКСПЕРТ<br>та подарунки</span>
            </template>
            <template v-slot:period>
<!--                <div class="package__month">3 місяці</div>-->
              <p class="package__custom-price">
                <price article="ep-dtkt_ek_gift1" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>

            <template v-slot:gifts>
              <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному Семінарі</a></li>
              <li><a href="https://bt.rozetka.com.ua/philips_3000_series_sth3000_20/p278930623/" target="_blank">Відпарювач Philips 3000</a></li>
<!--              <div class="btn-body">
                <a href="/order?article=ep-dtkt_ek_action1&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package&#45;&#45;eight" target="_blank">Замовити</a>
              </div>-->
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
<!--              <div class="package__footer package__footer&#45;&#45;top">
                <a href="/order?article=ep-dtkt_ek_action1&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package&#45;&#45;eight" target="_blank">Беру!</a>
              </div>-->
            </template>
          </landing-package>



          <landing-package article="ep-dtkt_pr_gift1" class="package__two">
            <template v-slot:title>
              <span>ПРОФІ<br>та подарунки</span>
            </template>
            <template v-slot:period>
              <!--              <div class="package__month">3 місяці</div>-->
              <p class="package__custom-price">
                <price article="ep-dtkt_pr_gift1" :options="{periods: 1}" format="0"/>   <b>грн/міс.</b>
              </p>
            </template>
            <template v-slot:gifts>
              <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному Семінарі</a></li>
              <li><a href="https://bt.rozetka.com.ua/philips_3000_series_sth3000_20/p278930623/" target="_blank">Відпарювач Philips 3000</a></li>
<!--              <div class="btn-body">
                <a href="/order?article=ep-dtkt_pr_action1&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package&#45;&#45;eight" target="_blank">Замовити</a>
              </div>-->
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
<!--              <div class="package__footer package__footer&#45;&#45;top">
                <a href="/order?article=ep-dtkt_pr_action1&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package&#45;&#45;eight" target="_blank">Беру!</a>
              </div>-->
            </template>



          </landing-package>

          <landing-package article="ep-dtkt_pp_gift1" class="package__three package__plus-top ">
            <template v-slot:title>
              <span>ПРОФІ + 7eminar.ua<br>та подарунки</span>
            </template>
            <template v-slot:period>
              <!--              <div class="package__month">3 місяці</div>-->
              <p class="package__custom-price">
                <price article="ep-dtkt_pp_gift1" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>
            <template v-slot:gifts>
              <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному Семінарі</a></li>
              <li><a href="https://bt.rozetka.com.ua/philips_3000_series_sth3000_20/p278930623/" target="_blank">Відпарювач Philips 3000</a></li>
<!--              <div class="btn-body">
                <a href="/order?article=ep-dtkt_pp_action1&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package&#45;&#45;eight" target="_blank">Замовити</a>
              </div>-->
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
                <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 400  курсів та вебінарів для перегляду
                  <!--<br><span  > (квітень - вересень 2020)</span>--> </li>
              </div>
              <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
<!--              <div class="package__footer package__footer&#45;&#45;top">
                <a href="/order?article=ep-dtkt_pp_action1&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package&#45;&#45;eight" target="_blank">Беру!</a>
              </div>-->
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

              <p class="package__custom-price">
                <price article="ep-dtkt_ek_action" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>

            <template v-slot:gifts>

              <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному
                Семінарі</a></li>
<!--              <div class="btn-body">
                <a href="/order?article=ep-dtkt_ek_action&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package&#45;&#45;eight" target="_blank">Замовити</a>
              </div>-->
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
<!--              <div class="package__footer package__footer&#45;&#45;top">
                <a href="/order?article=ep-dtkt_ek_action&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package&#45;&#45;eight" target="_blank">Беру!</a>
              </div>-->
            </template>
          </landing-package>



          <landing-package article="ep-dtkt_pr_action" class="package__two">
            <template v-slot:title>
              <span>ПРОФІ<br>та подарунок</span>
            </template>
            <template v-slot:period>

              <p class="package__custom-price">
                <price article="ep-dtkt_pr_action" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>

            <template v-slot:gifts>
              <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному
                Семінарі</a></li>
<!--              <div class="btn-body">
                <a href="/order?article=ep-dtkt_pr_action&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package&#45;&#45;eight" target="_blank">Замовити</a>
              </div>-->
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
<!--              <div class="package__footer package__footer&#45;&#45;top">
                <a href="/order?article=ep-dtkt_pr_action&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package&#45;&#45;eight" target="_blank">Беру!</a>
              </div>-->

            </template>
          </landing-package>

          <landing-package article="ep-dtkt_pp_action" class="package__three">
            <template v-slot:title>
              <span>ПРОФІ + 7eminar.ua<br>та подарунок</span>
            </template>
            <template v-slot:period>

              <p class="package__custom-price">
                <price article="ep-dtkt_pp_action" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>
            <template v-slot:gifts>
              <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному
                Семінарі</a></li>
<!--              <div class="btn-body">
                <a href="/order?article=ep-dtkt_pp_action&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package&#45;&#45;eight" target="_blank">Замовити</a>
              </div>-->
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
                  <!--<br><span  > (квітень - вересень 2020)</span>--> </li>
              </div>
              <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
<!--              <div class="package__footer package__footer&#45;&#45;top">
                <a href="/order?article=ep-dtkt_pp_action&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package&#45;&#45;eight" target="_blank">Беру!</a>
              </div>-->
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
