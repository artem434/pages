<template>
  <landing name="dtkt_december2020" advantages="epressa_add_interbuh" class="landing-buhzakon_april2021">
    <template v-slot:cover>

      <div class="dtkt-promo">
        <div class="landing-section">
          <div class="container">
            <div class="cover">
              <a class="d-none d-md-block" href="#gift">
                <picture class="cover__img">
                  <source :src="mix('images/04_bz.webp')" type="image/webp">
                  <img :src="mix('images/04_bz-min.jpg')" class="img-fluid" alt="IB">
                </picture>
              </a>
              <a class="d-block d-md-none" href="#gift">
                <picture class="cover__img">
                  <source :src="mix('images/04_bz_mob.webp')" type="image/webp">
                  <img :src="mix('images/04_bz_mob-min.jpg')" class="img-fluid" alt="IB">
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
        <h2 id="gift" class="landing-title"><span>{{ page.options['order_title']}}</span></h2>
        <p class="landing-section__action">{{ page.options['order_subtitle']}}  </p>
      </div>
    </template>
    <template v-slot:packages_list>

      <landing-package-row>
        <landing-package article="ep-buhzakon">
          <template v-slot:title>
            <span>БУХГАЛТЕР&ЗАКОН <br>ТА ПОДАРУНок</span>
          </template>
          <template v-slot:period>
            <div class="package__month">3 місяці</div>
            <p class="package__custom-price">
              <price article="ep-buhzakon" :options="{periods: 3}" format="0"/>
              <b>грн</b>
            </p>
          </template>

          <template v-slot:gifts>
            <li ><a href="https://7eminar.com/25032021" target="_blank">Великий Квартальний Семінар запис</a></li>
            <li><h5 class="package__presents-title">Оберіть подарунок:</h5></li>

            <li class="no-active">Електрошашличниця
              SCARLETT</li>
            <li class="no-active">Мультипекар
              REDMOND</li>
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
          </template>
        </landing-package>
        <landing-package article="ep-buhzakon_action" class="package__three package__plus-top">
          <template v-slot:title>
            <span>БУХГАЛТЕР&ЗАКОН <br> ТА ПОДАРУНКИ</span>
          </template>
          <template v-slot:period>
            <div class="package__month">3 місяці</div>
            <p class="package__custom-price">
              <price article="ep-buhzakon_action" :options="{periods: 3}" format="0"/>
              <b>грн</b>
            </p>
          </template>

          <template v-slot:gifts>
            <li ><a href="https://7eminar.com/25032021" target="_blank">Великий Квартальний Семінар запис</a></li>
            <li><h5 class="package__presents-title">Оберіть подарунок:</h5></li>
            <li><a href="https://bt.rozetka.com.ua/ua/scarlett_sc_kg22601/p24865877/characteristics/" target="_blank">Електрошашличниця
              SCARLETT</a></li>
            <li><a href="https://bt.rozetka.com.ua/ua/redmond_rmb_m616_3/p32939831/characteristics/" target="_blank">Мультипекар
              REDMOND</a></li>
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
