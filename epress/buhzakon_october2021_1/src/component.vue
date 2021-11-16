<template>
  <landing name="dtkt_december2020" advantages="epressa_add_interbuh" class="landing-buhzakon_october2021_1">
    <template v-slot:cover>
      <div class="hero">
        <div class="container">
          <a href="#gift">
            <picture class="hero__img ">
              <source :srcset="mix('images/bz-sm.webp')" media="(max-width: 767.98px)" type="image/webp">
              <source :srcset="mix('images/bz-sm-min.jpg')" media="(max-width: 767.98px)" type="image/jpeg">
              <source :srcset="mix('images/bz-xl.webp')" type="image/webp">
              <img :src="mix('images/bz-xl-min.png')" class="img-fluid" alt="dk">
            </picture>
          </a>
        </div>
      </div>
    </template>
    <template v-slot:about>
      <div>
      </div>
    </template>
    <template v-slot:price-title>
      <div>
        <h2 id="gift" class="landing-title"><span>{{ page.options['order_title']}}</span></h2>
        <p class="landing-section__action">{{ page.options['order_subtitle']}}  </p>
      </div>
    </template>
    <template v-slot:packages_list>

      <landing-package-row>
        <landing-package article="ep-buhzakon_action" class="package__three package__plus-top">
          <template v-slot:title>
            <span>БУХГАЛТЕР&ЗАКОН <br> ТА ПОДАРУНКИ</span>
          </template>
          <template v-slot:period>
            <!--            <div class="package__month">3 місяці</div>-->
            <p class="package__custom-price">
              <price article="ep-buhzakon_action" :options="{periods: 1}" format="0"/>
              <b>грн/міс.</b>
            </p>
          </template>

          <template v-slot:gifts>
            <li>Онлайн-трансляція
              та запис  <a href="https://7eminar.ua/21102021" target="_blank">Великого Семінару
                із Заробітної плати</a></li>
            <li >Сертифікат Алло 3 тис</li>
            <div class="btn-body">
              <a href="/order?article=ep-buhzakon_action&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
            </div>
          </template>
          <template v-slot:abilities>
            <li>Електронне видання</li>
            <li>Консультації для передплатників</li>
            <li>Аналітичні матеріали з практичними рекомендаціями експертів</li>
            <div v-if="show">
              <li>Доступ до архівних випусків видання</li>
              <li>Все про РРО, ЄСВ, ПДВ тощо з аналітикою та порадами експертів</li>
              <li>Інформація для будь-якого напряму та масштабу бізнесу</li>
              <li>Доступ до нормативно-правової, консультаційної та аналітичної інформації ЛІГА:ЗАКОН</li>
            </div>
            <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
            <div class="package__footer package__footer--top">
              <a href="/order?article=ep-buhzakon_action&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
            </div>
          </template>
        </landing-package>
        <landing-package article="ep-buhzakon">
          <template v-slot:title>
            <span>БУХГАЛТЕР&ЗАКОН <br>ТА ПОДАРУНок</span>
          </template>
          <template v-slot:period>
<!--            <div class="package__month">3 місяці</div>-->
            <p class="package__custom-price">
              <price article="ep-buhzakon" :options="{periods: 1}" format="0"/>
              <b>грн/міс.</b>
            </p>
          </template>

          <template v-slot:gifts>

            <li>Онлайн-трансляція
              та запис  <a href="https://7eminar.ua/21102021" target="_blank">Великого Семінару
              із Заробітної плати</a></li>
            <li class="no-active">Сертифікат Алло 3 тис</li>

            <div class="btn-body">
              <a href="/order?article=ep-buhzakon&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
            </div>
          </template>
          <template v-slot:abilities>
            <li>Електронне видання</li>
            <li>Консультації для передплатників</li>
            <li>Аналітичні матеріали з практичними рекомендаціями експертів</li>
            <div v-if="show">
              <li>Доступ до архівних випусків видання</li>
              <li>Все про РРО, ЄСВ, ПДВ тощо з аналітикою та порадами експертів</li>
              <li>Інформація для будь-якого напряму та масштабу бізнесу</li>
              <li>Доступ до нормативно-правової, консультаційної та аналітичної інформації ЛІГА:ЗАКОН</li>
            </div>
            <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
            <div class="package__footer package__footer--top">
              <a href="/order?article=ep-buhzakon&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
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
