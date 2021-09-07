<template>
    <landing name="interbuh_december2020" advantages="epressa_add_interbuh" class="landing-interbuh_august2021_2">
      <template v-slot:cover>

        <div class="hero">
          <div class="container">
            <div class="hero__bg">
              <picture class="cover__img d-none d-md-block">
                <source :src="mix('images/bg.webp')" type="image/webp">
                <img :src="mix('images/bg.jpg')" class="img-fluid" alt="dk">
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
<!--                <picture>
                  <img :src="mix('images/DTKT.UA_LOGO.png')" class="DTKT" alt="dk">
                </picture>-->
              </div>

              <p class="hero__title">Будьте професіоналом</p>
              <p class="hero__subtitle">на роботі та на кухні</p>
              <p class="hero__description">Передплачуйте медіа для <br>
                бухгалтерів «Інтербух» та <b>отримайте <br>
                  мультиварку у подарунок!</b></p>
              <p class="hero__btn">
                <a href="#gift" class="btn">Беру!</a>
              </p>
            </div>
          </div>
        </div>
      </template>
      <template  v-slot:about>
        <div id="gift">
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
        <landing-package-row>
          <landing-package article="ep-interbuh_st">
            <template v-slot:title>
              <span>ІНТЕРБУХ <br> ТА ПОДАРУНОК</span>
            </template>
            <template v-slot:period>

              <p class="package__custom-price">
                <price article="ep-interbuh_st" :options="{periods:1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>

            <template v-slot:gifts>
              <li ><a href="https://7eminar.ua/subscribe" target="_blank">Передплата на Бухгалтерську <br>
                Відеоплатформу №1 (1 міс)</a></li>
              <li class="no-active"> Мультиварка Holmer</li>
              <div class="btn-body">
                <a href="/order?article=ep-interbuh_st&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
              </div>
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
                <p class="package__list-show" @click="show = !show">{{ btnText }}</p>

              </div>
              <div class="package__footer package__footer--top" >
                <a href="/order?article=ep-interbuh_st&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
              </div>
            </template>
          </landing-package>
          <landing-package article="ep-interbuh_st_action1" class="package__three package__plus-top">
            <template v-slot:title>
              <span>ІНТЕРБУХ <br> ТА ПОДАРУНКИ</span>
            </template>
            <template v-slot:period>

              <p class="package__custom-price">
                <price article="ep-interbuh_st_action1" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>
            <template v-slot:gifts>
              <li ><a href="https://7eminar.ua/subscribe" target="_blank">Передплата на Бухгалтерську <br>
                Відеоплатформу №1 (1 міс)</a></li>
              <li><a href="https://holmer.ua/product/multivarka-holmer-hmc-10b/" target="_blank"> Мультиварка Holmer</a></li>
              <div class="btn-body" >
                <a href="/order?article=ep-interbuh_st_action1&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
              </div>
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
                <p class="package__list-show" @click="show = !show">{{ btnText }}</p>

              </div>
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-interbuh_st_action1&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
              </div>
            </template>
          </landing-package>


        </landing-package-row>


      </template>

    </landing>
</template>

<script>
import Snowf from 'vue-snowf';
    import Page from '../../core/Page'

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
