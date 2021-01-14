<template>
  <landing name="dtkt_december2020" advantages="epressa_add_interbuh" class="landing-buhzakon_january2021">
    <template v-slot:cover>

      <div class="dtkt-promo">
        <div class="landing-section">
          <div class="container">
            <div class="cover">
              <a class="d-none d-md-block" href="#gift">
                <picture class="cover__img">
                  <source :src="mix('images/AnyConv.com__buh.webp')" type="image/webp">
                  <img :src="mix('images/buh-min.jpg')" class="img-fluid" alt="IB">
                </picture>
              </a>
              <a class="d-block d-md-none" href="#gift">
                <picture class="cover__img">
                  <source :src="mix('images/AnyConv.com__buh_mob.webp')" type="image/webp">
                  <img :src="mix('images/buh_mob-min.jpg')" class="img-fluid" alt="IB">
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
            <li ><a href="https://7eminar.com/21012021" target="_blank">Великий Річний <br>
              Online-Семінар</a></li>
            <li class="no-active">Гриль TEFAL</li>
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
            <li ><a href="https://7eminar.com/21012021" target="_blank">Великий Річний <br>
              Online-Семінар</a></li>
            <li><a href="https://www.tefal.ua/ru/%D0%9A%D0%A3%D0%A5%D0%9E%D0%9D%D0%9D%D0%AB%D0%95-%D0%9F%D0%A0%D0%98%D0%91%D0%9E%D0%A0%D0%AB/%D0%93%D1%80%D0%B8%D0%BB%D0%B8/INICIO-GRILL-GC241/p/8000035958" target="_blank">Гриль TEFAL</a></li>
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
