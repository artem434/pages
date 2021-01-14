<template>
    <landing name="interbuh_december2020_1" advantages="epressa_add_interbuh" class="landing-interbuh_december2020_1">
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
                                    <source :src="mix('images/ib.webp')" type="image/webp">
                                    <img :src="mix('images/inter-min.jpg')" class="img-fluid" alt="IB">
                                </picture>
                            </a>
                          <a class="d-block d-md-none" href="#gift">
                            <picture class="cover__img">
                              <source :src="mix('images/inter.webp')" type="image/webp">
                              <img :src="mix('images/320_intr-min.jpg')" class="img-fluid" alt="IB">
                            </picture>
                          </a>
                        </div>
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

              <landing-package article="ep-interbuh_st" class="package__two package__plus-top">
                <template v-slot:title>
                  <span>ІНТЕРБУХ</span>
                </template>
                <template v-slot:period>
                  <p class="package__custom-price">
                    <price article="ep-interbuh_st" :options="{periods: 1}" format="0"/>
                    грн/міс.
                  </p>
                </template>
                <template v-slot:gifts>
                  <li >Великий Річний Семінар (гарантовано)</li>
                  <li> Оберіть свій подарунок <br>  (при передплаті на 12 міс.)
                    <ul>
                      <li><a target="_blank" href="https://bt.rozetka.com.ua/260258496/p260258496/">• пульсоксиметр</a></li>
                      <li><a target="_blank" href="https://rozetka.com.ua/excellent_houseware_170170100/p61587783/">• гейзерна кавоварка</a></li>
                      <li><a target="_blank" href="https://bt.rozetka.com.ua/scarlett_sc_ks57p33/p70745330/">• кухонні ваги</a></li>
                    </ul>
                  </li>
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
                    <p class="package__list-show" @click="show = !show">{{ btnText }}</p></div>
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
