<template>
    <landing name="dtkt_december2020" advantages="epressa_add_interbuh" class="landing-dtkt_may2021_1">
      <template v-slot:cover>
        <div class="dtkt-promo">
          <div class="landing-section">
            <div class="container">
              <div class="cover">
                <a class="d-none d-md-block" href="#gift">
                  <picture class="cover__img">
                    <source :src="mix('images/hero_bg.webp')" type="image/webp">
                    <img :src="mix('images/hero_bg-min.png')" class="img-fluid" alt="dk">
                  </picture>
                </a>
                <a class="d-block d-md-none" href="#gift">
                  <picture class="cover__img">
                    <source :src="mix('images/hero_bg_mob.webp')" type="image/webp">
                    <img :src="mix('images/hero_bg_mob-min.png')" class="img-fluid" alt="dk">
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
          <h2  class="landing-title"><span>{{ page.options['order_title']}}</span></h2>
          <p id="gift" class="landing-section__action">{{ page.options['order_subtitle']}} </p>
<!--          <p class="landing-section__action">{{ page.options['order_subtitle-two']}} </p>-->
        </div>
      </template>
      <template  v-slot:packages_list>
<!--        <h2  id="gift" class="packages__title">{{ page.options['order_title-top']}}</h2>-->
        <landing-package-row>
          <landing-package article="ep-dtkt_ek_action">
            <template v-slot:title>
              <span>ЕКСПЕРТ</span>
            </template>
            <template v-slot:period>
<!--                <div class="package__month">3 місяці</div>-->
              <p class="package__custom-price">
                <price article="ep-dtkt_ek_action" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
              <s>216 грн/міс.</s>
            </template>

            <template v-slot:gifts>
              <li >Великий Бухгалтерський Семінар
                (6 липня, online-трансляцію та запис)</li>
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

          <landing-package article="ep-dtkt_pr_action" class="package__two">
            <template v-slot:title>
              <span>ПРОФІ</span>
            </template>
            <template v-slot:period>
              <!--              <div class="package__month">3 місяці</div>-->
              <p class="package__custom-price">
                <price article="ep-dtkt_pr_action" :options="{periods: 1}" format="0"/>   <b>грн/міс.</b>

              </p>
              <s>383 грн/міс.</s>
            </template>
            <template v-slot:gifts>
              <li >Великий Бухгалтерський Семінар
                (6 липня, online-трансляцію та запис)</li>
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

          <landing-package article="ep-dtkt_pp_action" class="package__three package__plus-top ">
            <template v-slot:title>
              <span>ПРОФІ + 7eminar.ua</span>
            </template>
            <template v-slot:period>
              <!--              <div class="package__month">3 місяці</div>-->
              <p class="package__custom-price">
                <price article="ep-dtkt_pp_action" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
              <s>599 грн/міс.</s>
            </template>
            <template v-slot:gifts>
              <li >Великий Бухгалтерський Семінар
                (6 липня, online-трансляцію та запис)</li>
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
                <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 300 курсів та вебінарів для перегляду
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
