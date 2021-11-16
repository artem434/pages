<template>
    <landing name="dtkt_december2020" advantages="epressa_add_interbuh" class="landing-msfz_november2021_1">
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


              <p class="hero__description">Передплачуйте журнал
                 <br>
                «Практика МСФЗ» <b>та обирайте <br>
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
          <landing-package article="ep-msfz">
            <template v-slot:title>
              <span>ПРАКТИКА МСФЗ <br> ТА ПОДАРУНОК</span>
            </template>
            <template v-slot:period>

              <p class="package__custom-price">
                <price article="ep-msfz" :options="{periods:1}" format="0"/>
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
                <li>Щомісячне друковане видання</li>
                <li>Електронна версія журналу</li>
                <li>Мінус 50% на всі платні online-семінари Видавничої групи «АС»</li>
              </div>
            </template>
          </landing-package>
          <landing-package article="ep-msfz_action" class="package__three package__plus-top">
            <template v-slot:title>
              <span>ПРАКТИКА МСФЗ <br> ТА ПОДАРУНКИ</span>
            </template>
            <template v-slot:period>

              <p class="package__custom-price">
                <price article="ep-msfz_action" :options="{periods: 1}" format="0"/>
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
                <li>Щомісячне друковане видання</li>
                <li>Електронна версія журналу</li>
                <li>Мінус 50% на всі платні online-семінари Видавничої групи «АС»</li>
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
