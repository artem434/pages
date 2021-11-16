<template>
  <landing name="interbuh_december2020" advantages="epressa_add_interbuh" class="landing-interbuh_october2021_2">
    <template v-slot:cover>
      <div class="hero">
        <picture class="hero__img ">
          <source :srcset="mix('images/bg-sm.webp')" media="(max-width: 767.98px)" type="image/webp">
          <source :srcset="mix('images/bg-sm.png')" media="(max-width: 767.98px)" type="image/jpeg">
          <source :srcset="mix('images/bg-xl.webp')" type="image/webp">
          <img :src="mix('images/bg-xl.jpg')" class="img-fluid" alt="dk">
        </picture>
        <div class="container">

          <div class="hero__content">
            <h1>З ним і локдаун <span>не страшний</span></h1>
            <p class="hero__subtitle">Столик для ноутбука <br>
              з активним охолодженням</p>
            <p class="hero__btn">
              <a href="#gift" class="btn">Дуже треба!</a>
            </p>
            <p class="hero__description">При передплаті медіа
             <br>   для бухгалтерів «Інтербух»!</p>
          </div>

        </div>
      </div>
    </template>
    <template v-slot:about>
      <div id="gift">
      </div>
    </template>
    <template v-slot:price-title>
      <div>
        <h2 class="landing-title"><span>{{ page.options['order_title'] }}</span></h2>
        <p class="landing-section__action">{{ page.options['order_subtitle'] }} </p>
        <p class="landing-section__action">{{ page.options['order_subtitle-two'] }} </p>
      </div>
    </template>
    <template v-slot:packages_list>
      <landing-package-row>

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
            <li>Запис <a href="https://7eminar.ua/21102021" target="_blank">Великого Семінару із Заробітної плати</a></li>
            <li> <a href="https://rozetka.com.ua/210269125/p210269125/" target="_blank">Столик для ноутбука</a></li>
            <div class="btn-body">
              <a href="/order?article=ep-interbuh_st_action1&amp;options%5Bperiods%5D=12"
                 class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
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
              <a href="/order?article=ep-interbuh_st_action1&amp;options%5Bperiods%5D=12"
                 class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
            </div>
          </template>
        </landing-package>
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
            <li>Запис <a href="https://7eminar.ua/21102021" target="_blank">Великого Семінару із Заробітної плати</a></li>
            <li class="no-active">Столик для ноутбука</li>
                        <div class="btn-body">
                          <a href="/order?article=ep-interbuh_st&amp;options%5Bperiods%5D=12"
                             class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
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
                  <a href="/order?article=ep-interbuh_st&amp;options%5Bperiods%5D=12"
                     class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
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
