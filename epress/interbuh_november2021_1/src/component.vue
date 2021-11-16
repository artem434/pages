<template>
    <landing name="dtkt_december2020" advantages="epressa_add_interbuh" class="landing-interbuh_november2021_1">
      <template v-slot:cover>

        <div class="hero">
          <picture class="hero__img ">
            <source :srcset="mix('images/bg-sm.webp')" media="(max-width: 767.98px)" type="image/webp">
            <source :srcset="mix('images/bg-sm-min.png')" media="(max-width: 767.98px)" type="image/jpeg">
            <source :srcset="mix('images/bg-xl.webp')" type="image/webp">
            <img :src="mix('images/bg-xl-min.jpg')" class="img-fluid" alt="dk">
          </picture>
          <div class="container">

            <div class="hero__content">
              <div class="hero__logo">
<!--                <picture>
                  <img :src="mix('images/epresa_white.png')" class="epresa" alt="dk">
                </picture>
                <picture>
                  <img :src="mix('images/DTKT.UA_LOGO.png')" class="DTKT" alt="dk">
                </picture>-->
              </div>
              <h1>На що витратиш <br> свою перерву:</h1>
              <p class="hero__subtitle">каву чи масаж?</p>
              <p class="hero__description">Передплачуйте медіа для бухгалтерів
                 <br>
                «Інтербух» <b>та обирайте <br>
                  масажер або кавоварку у подарунок!</b></p>
              <p class="hero__btn">
                <a href="#gift" class="btn">Детальніше</a>
              </p>

            </div>

          </div>
        </div>

      </template>
      <template v-slot:about>
        <div>
        </div>
      </template>
      <template v-slot:price-title>
        <div  id="gift">
          <h2  class="landing-title"><span>{{ page.options['order_title']}}</span></h2>
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
              <li >Великий Бухгалтерський
                Семінар (онлайн-трансляція та відеозапис)</li>
              <li  class="no-active"><h5 class="package__presents-title">Оберіть подарунок:</h5></li>
              <li  class="no-active">Mасажна подушка</li>
              <li  class="no-active">Кавоварка</li>
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
              <!--            <div class="package__footer package__footer&#45;&#45;top">
                            <a href="/order?article=ep-interbuh_st&amp;options%5Bperiods%5D=12"
                               class="btn btn-package  btn-arrow btn-package&#45;&#45;eight" target="_blank">Беру!</a>
                          </div>-->
            </template>
          </landing-package>
          <landing-package article="ep-interbuh_st_action" class="package__three package__plus-top">
            <template v-slot:title>
              <span>ІНТЕРБУХ <br> ТА ПОДАРУНКИ</span>
            </template>
            <template v-slot:period>

              <p class="package__custom-price">
                <price article="ep-interbuh_st_action" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>
            <template v-slot:gifts>
              <li >Великий Бухгалтерський
                Семінар (онлайн-трансляція та відеозапис)</li>
              <li><h5 class="package__presents-title">Оберіть подарунок:</h5></li>
              <li><a href="https://bt.rozetka.com.ua/ua/191133825/p191133825/" target="_blank">Mасажна подушка</a></li>
              <li><a href="https://bt.rozetka.com.ua/ua/magio_mg_349/p26124593/" target="_blank">Кавоварка</a></li>
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
              <!--            <div class="package__footer package__footer&#45;&#45;top">
                            <a href="/order?article=ep-interbuh_st_action&amp;options%5Bperiods%5D=12"
                               class="btn btn-package  btn-arrow btn-package&#45;&#45;eight" target="_blank">Беру!</a>
                          </div>-->
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
