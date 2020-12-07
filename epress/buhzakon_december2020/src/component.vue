<template>
  <landing name="dtkt_december2020" advantages="epressa_add_interbuh" class="landing-buhzakon_december2020">
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
                  <source :src="mix('images/bz.webp')" type="image/webp">
                  <img :src="mix('images/bz-min.jpg')" class="img-fluid" alt="IB">
                </picture>
              </a>
              <a class="d-block d-md-none" href="#gift">
                <picture class="cover__img">
                  <source :src="mix('images/320_bz.webp')" type="image/webp">
                  <img :src="mix('images/320_bz-min.jpg')" class="img-fluid" alt="IB">
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
              грн
            </p>
          </template>

          <template v-slot:gifts>
            <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
              Online-Семінар</a></li>
            <li class="no-active">Смартфон або планшет</li>
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
              грн
            </p>
          </template>

          <template v-slot:gifts>
            <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
              Online-Семінар</a></li>
            <li><a href="https://iglaz.ua/xiaomi-redmi-9a-2-32gb-granite-gray-eu/option/48272" target="_blank">Смартфон  </a> або <a href="https://www.citrus.ua/planshety/huawei-mediapad-t3-7-8gb-grey-615719.html" target="_blank">планшет</a></li>
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
