<template>
    <landing name="interbuh_november2020_3" advantages="epressa_add_interbuh" class="landing-interbuh_november2020_3">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container">
                        <div class="cover">
                            <a class="d-none d-md-block" href="#gift">
                                <picture class="cover__img">
                                    <source :src="mix('images/hero_inter.webp')" type="image/webp">
                                    <img :src="mix('images/hero_inter-min.jpg')" class="img-fluid" alt="IB">
                                </picture>
                            </a>
                          <a class="d-block d-md-none" href="#gift">
                            <picture class="cover__img">
                              <source :src="mix('images/320_intr.webp')" type="image/webp">
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
                <landing-package article="ep-interbuh_st">
                    <template v-slot:title>
                      <span>ІНТЕРБУХ <br> ТА ПОДАРУНОК</span>
                    </template>
                    <template v-slot:period>
                      <div class="package__month">3 місяці</div>
                      <p class="package__custom-price">
                        <price article="ep-interbuh_st" :options="{periods: 3}" format="0"/>
                        грн
                      </p>
                    </template>

                  <template v-slot:gifts>
                    <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
                      Online-Семінар</a></li>
                    <li class="no-active">Телевізор Xiaomi Mi TV</li>
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
              <landing-package article="ep-interbuh_st_action1" class="package__two package__plus-top">
                <template v-slot:title>
                  <span>ІНТЕРБУХ <br> ТА ПОДАРУНКИ</span>
                </template>
                <template v-slot:period>
                  <div class="package__month">3 місяці</div>
                  <p class="package__custom-price">
                    <price article="ep-interbuh_st_action1" :options="{periods: 3}" format="0"/>
                    грн
                  </p>
                </template>
                <template v-slot:gifts>
                  <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
                    Online-Семінар</a></li>
                  <li><a href="https://www.xiaomi.ua/tv/televizor-xiaomi-mi-tv-4a-32-14gb-2831195/" target="_blank">Телевізор Xiaomi Mi TV 4A 32 </a></li>
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
