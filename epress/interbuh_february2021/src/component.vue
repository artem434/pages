<template>
    <landing name="interbuh_december2020" advantages="epressa_add_interbuh" class="landing-interbuh_february2021">
        <template v-slot:cover>

            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container">
                        <div class="cover">
                            <a class="d-none d-md-block" href="#gift">
                                <picture class="cover__img">
                                    <source :src="mix('images/inter.webp')" type="image/webp">
                                    <img :src="mix('images/inter-min.jpg')" class="img-fluid" alt="IB">
                                </picture>
                            </a>
                          <a class="d-block d-md-none" href="#gift">
                            <picture class="cover__img">
                              <source :src="mix('images/inter_mob.webp')" type="image/webp">
                              <img :src="mix('images/inter_mob-min.jpg')" class="img-fluid" alt="IB">
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
                <landing-package article="ep-interbuh_st">
                    <template v-slot:title>
                      <span>ІНТЕРБУХ <br> ТА ПОДАРУНОК</span>
                    </template>
                    <template v-slot:period>
                      <p class="package__custom-price">
                        <price article="ep-interbuh_st" :options="{periods: 1}" format="0"/>
                        <b>грн/міс.</b>
                      </p>
                    </template>

                  <template v-slot:gifts>
                    <li ><a href="https://7eminar.com/21012021" target="_blank">Великий Річний <br>
                      Online-Семінар</a></li>
                    <li class="no-active">Холодильник Atlant</li>
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
                  <li ><a href="https://7eminar.com/21012021" target="_blank">Великий Річний <br>
                    Online-Семінар</a></li>
                  <li><a href="https://bt.rozetka.com.ua/192466247/p192466247/" target="_blank">Холодильник Atlant</a></li>
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
