<template>
    <landing name="interbuh_october2020_4" advantages="epressa_add_interbuh" class="landing-interbuh_october2020_4">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container">
                      <div class="cover">
                        <a class="d-none d-md-block" href="#gift">
                          <picture class="cover__img">
                            <source :src="mix('images/ib.webp')" type="image/webp">
                            <img :src="mix('images/ib-min.jpg')" class="img-fluid" alt="IB">
                          </picture>
                        </a>
                        <a class="d-block d-md-none" href="#gift">
                          <picture class="cover__img">
                            <source :src="mix('images/ib_mob.webp')" type="image/webp">
                            <img :src="mix('images/ib_mob-min.jpg')" class="img-fluid" alt="IB">
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
        <!--  <h2 class="packages__title">{{ page.options['order_title-bottom']}}</h2>-->
          <landing-package-row >
            <landing-package article="ep-interbuh_st_action">
              <template v-slot:title>
                <span>ІНТЕРБУХ</span>
              </template>
              <template v-slot:period>
                <div class="package__month">3 місяці</div>
              </template>
              <template v-slot:old-price>
                <s class="package__old-price"> 240 грн/міс.</s>
               </template>
              <template v-slot:gifts>
                <li ><a href="https://7eminar.com/psbo2020" target="_blank">Online-школа для бухгалтера «П(С)БО легкий старт»</a></li>
                <li >Знижка 50%</li>
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
