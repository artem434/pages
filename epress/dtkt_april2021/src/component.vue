<template>
    <landing name="dtkt_december2020" advantages="epressa_add_interbuh" class="landing-dtkt_april2021">
      <template v-slot:cover>
        <div class="dtkt-promo">
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
          <landing-package article="ep-dtkt_ek_action">
            <template v-slot:title>
              <span>ЕКСПЕРТ<br>та подарунки</span>
            </template>
            <template v-slot:period>
<!--                <div class="package__month">3 місяці</div>-->
              <p class="package__custom-price">
                <price article="ep-dtkt_ek_action" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>

            <template v-slot:gifts>
              <li ><a href="https://7eminar.ua/22042021" target="_blank">Великий Online-Семінар із Заробітної Плати запис</a></li>
              <li><h5 class="package__presents-title">Оберіть подарунок:</h5></li>
              <li><a href="https://bt.rozetka.com.ua/ua/scarlett_sc_kg22601/p24865877/characteristics/" target="_blank">Електрошашличниця
                SCARLETT</a></li>
              <li><a href="https://bt.rozetka.com.ua/ua/redmond_rmb_m616_3/p32939831/characteristics/" target="_blank">Мультипекар
                REDMOND</a></li>
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
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-dtkt_pp_gift2&amp;options%5Bperiods%5D=3" class="btn btn-package  btn-arrow btn-package--nine" target="_blank">Беру!</a>
              </div>

            </template>
          </landing-package>

          <landing-package article="ep-dtkt_pr_action" class="package__two">
            <template v-slot:title>
              <span>ПРОФІ + 7eminar.ua<br>та подарунки</span>
            </template>
            <template v-slot:period>
              <!--              <div class="package__month">3 місяці</div>-->
              <p class="package__custom-price">
                <price article="ep-dtkt_pp_gift2" :options="{periods: 6}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>
            <template v-slot:gifts>
              <li ><a href="https://7eminar.ua/22042021" target="_blank">Великий Online-Семінар із Заробітної Плати запис</a></li>
              <li><h5 class="package__presents-title">Оберіть подарунок:</h5></li>
              <li><a href="https://bt.rozetka.com.ua/ua/scarlett_sc_kg22601/p24865877/characteristics/" target="_blank">Електрошашличниця
                SCARLETT</a></li>
              <li><a href="https://bt.rozetka.com.ua/ua/redmond_rmb_m616_3/p32939831/characteristics/" target="_blank">Мультипекар
                REDMOND</a></li>
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
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-dtkt_pp_gift2&amp;options%5Bperiods%5D=3" class="btn btn-package  btn-arrow btn-package--nine" target="_blank">Беру!</a>
              </div>
            </template>
          </landing-package>

          <landing-package article="ep-dtkt_pr_gift2" class="package__three package__plus-top">
            <template v-slot:title>
              <span>ПРОФІ<br>та подарунки</span>
            </template>
            <template v-slot:period>
              <!--              <div class="package__month">3 місяці</div>-->
              <p class="package__custom-price">
                <price article="ep-dtkt_pr_gift2" :options="{periods: 1}" format="0"/>   <b>грн/міс.</b>
              </p>
            </template>
            <template v-slot:gifts>
              <li ><a href="https://7eminar.ua/22042021" target="_blank">Великий Online-Семінар із Заробітної Плати запис</a></li>
              <li><h5 class="package__presents-title">Оберіть подарунок:</h5></li>
              <li><a href="https://bt.rozetka.com.ua/ua/scarlett_sc_kg22601/p24865877/characteristics/" target="_blank">Електрошашличниця
                SCARLETT</a></li>
              <li><a href="https://bt.rozetka.com.ua/ua/redmond_rmb_m616_3/p32939831/characteristics/" target="_blank">Мультипекар
                REDMOND</a></li>
              <p class="package__btn">
                <a href="/order?article=ep-dtkt_pr_gift2&amp;options%5Bperiods%5D=8" class="btn btn-package btn-arrow btn-package--nine" target="_blank">Замовити
                </a>
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
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-dtkt_pr_gift2&amp;options%5Bperiods%5D=8" class="btn btn-package  btn-arrow btn-package--nine" target="_blank">Беру!</a>
              </div>
            </template>



          </landing-package>
        </landing-package-row>
        <h2 class="packages__title">{{ page.options['order_title-bottom']}}</h2>
        <landing-package-row class="package-two">
          <landing-package article="ep-dtkt_ek_action2">
            <template v-slot:title>
              <span>ЕКСПЕРТ<br>та подарунок</span>
            </template>
            <template v-slot:period>

              <p class="package__custom-price">
                <price article="ep-dtkt_ek_action2" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>

            <template v-slot:gifts>
              <li ><a href="https://7eminar.ua/22042021" target="_blank">Великий Online-Семінар із Заробітної Плати запис</a></li>
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
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-dtkt_pr_gift2&amp;options%5Bperiods%5D=8" class="btn btn-package  btn-arrow btn-package--nine" target="_blank">Беру!</a>
              </div>
            </template>
          </landing-package>

          <landing-package article="ep-dtkt_pp_action2" class="package__two">
            <template v-slot:title>
              <span>ПРОФІ + 7eminar.ua<br>та подарунок</span>
            </template>
            <template v-slot:period>

              <p class="package__custom-price">
                <price article="ep-dtkt_pp_action2" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>
            <template v-slot:gifts>
              <li ><a href="https://7eminar.ua/22042021" target="_blank">Великий Online-Семінар із Заробітної Плати запис</a></li>

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
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-dtkt_pp_action2&amp;options%5Bperiods%5D=3" class="btn btn-package  btn-arrow btn-package--nine" target="_blank">Беру!</a>
              </div>
            </template>
          </landing-package>

          <landing-package article="ep-dtkt_pr_action2" class="package__three">
            <template v-slot:title>
              <span>ПРОФІ<br>та подарунок</span>
            </template>
            <template v-slot:period>

              <p class="package__custom-price">
                <price article="ep-dtkt_pr_action2" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>

            <template v-slot:gifts>
              <li ><a href="https://7eminar.ua/22042021" target="_blank">Великий Online-Семінар із Заробітної Плати запис</a></li>
              <p class="package__btn">
                <a href="/order?article=ep-dtkt_pr_action2&amp;options%5Bperiods%5D=8" class="btn btn-package btn-arrow btn-package--nine" target="_blank">Замовити
                </a>
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
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-dtkt_pr_action2&amp;options%5Bperiods%5D=8" class="btn btn-package  btn-arrow btn-package--nine" target="_blank">Беру!</a>
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
