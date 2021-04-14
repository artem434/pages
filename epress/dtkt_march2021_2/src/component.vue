<template>
    <landing name="dtkt_december2020" advantages="epressa_add_interbuh" class="landing-dtkt_march2021_2">
      <template v-slot:cover>
        <div class="dtkt-promo">
          <div class="landing-section">
            <div class="container">
           <div class="hero">
             <div class="hero__content">
               <div class="hero__logo">
                 <picture >
                   <img :src="mix('images/logo-dk.png')" class="img-fluid" alt="dtkt">
                 </picture>
               </div>
               <h1 class="hero__title">Тільки 1 квітня</h1>
               <p class="hero__subtitle">Знижка — <span>60% </span>на передплату</p>
               <p class="hero__caption">І це не жарти!</p>
               <p class="hero__btn">
                 <a href="#order" class="btn">Супер! Хочу!</a>
               </p>
             </div>

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
<!--          <h2 class="landing-title"><span>{{ page.options['order_title']}}</span></h2>
          <p class="landing-section__action">{{ page.options['order_subtitle']}} </p>
          <p class="landing-section__action">{{ page.options['order_subtitle-two']}} </p>-->
        </div>
      </template>
      <template v-slot:packages_list>
        <h2  id="gift" class="packages__title">{{ page.options['order_title-top']}}</h2>
        <landing-package-row>
          <landing-package article="ep-dtkt_ek_action1">
            <template v-slot:title>
              <span>ЕКСПЕРТ<br>та подарунки</span>
            </template>

            <template v-slot:period>
              <div class="package__month">9 місяців</div>
              <p class="package__custom-price">
                <span class="package__price-text">всього за</span>
                <price article="ep-dtkt_ek_action2" :options="{periods: 9}" format="0"/>
                <b>грн</b>
              </p>
            </template>

            <template v-slot:gifts>
              <li ><a href="https://7eminar.com/25032021" target="_blank">Великий Квартальний Семінар відеозапис</a></li>
              <li><h5 class="package__presents-title package__presents-title--no-active">Оберіть подарунок:</h5></li>
              <li class="no-active">Сертифікат Алло <br> 1 000 грн</li>
              <li class="no-active">Сертифікат Епіцентр <br> 1 000 грн</li>

              <p class="package__btn">
                <a href="/order?article=ep-dtkt_ek_action2&amp;options%5Bperiods%5D=9" class="btn btn-package btn-arrow btn-package--nine" target="_blank">Замовити
              </a>
              </p>
            </template>

            <template v-slot:abilities>
              <li>Щоденна добірка новин</li>
              <li>«Документи за тиждень»</li>
              <li>«Запитання і відповіді» за тиждень</li>
              <div v-if="show">
                <li>Розумний податковий календар</li>
                <li>База нормативних документів</li>
                <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                <li>Сервіс «Мій кабінет»</li>
                <li>Пакет «Тематичні розсилки»</li>
                <li>Електронний журнал «Дебет-Кредит»</li>
                <li>Щомісячні спецвипуски</li>
              </div>
              <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-dtkt_ek_action2&amp;options%5Bperiods%5D=9" class="btn btn-package  btn-arrow btn-package--nine" target="_blank">Беру!</a>
              </div>
            </template>

          </landing-package>

          <landing-package article="ep-dtkt_ek_action1" class="package__three package__plus-top">
            <template v-slot:title>
              <span>ЕКСПЕРТ<br>та подарунки</span>
            </template>
            <template v-slot:period>
              <div class="package__month">9 місяців</div>
              <p class="package__custom-price">
                <span class="package__price-text">всього за</span>
                <price article="ep-dtkt_ek_gift2" :options="{periods: 9}" format="0"/>
                <b>грн</b>
              </p>
            </template>

            <template v-slot:gifts>
              <li ><a href="https://7eminar.com/25032021" target="_blank">Великий Квартальний Семінар відеозапис</a></li>
              <li><h5 class="package__presents-title">Оберіть подарунок:</h5></li>
              <li>Сертифікат Алло <br> 1 000 грн</li>
              <li>Сертифікат Епіцентр <br> 1 000 грн</li>
              <p class="package__btn">
                <a href="/order?article=ep-dtkt_ek_gift2&amp;options%5Bperiods%5D=9" class="btn btn-package btn-arrow btn-package--nine" target="_blank">Замовити
                </a>
              </p>
            </template>

            <template v-slot:abilities>
              <li>Щоденна добірка новин</li>
              <li>«Документи за тиждень»</li>
              <li>«Запитання і відповіді» за тиждень</li>
              <div v-if="show">
                <li>Розумний податковий календар</li>
                <li>База нормативних документів</li>
                <li>Підсумковий випуск «Дебет-Кредит» за тиждень</li>
                <li>Сервіс «Мій кабінет»</li>
                <li>Пакет «Тематичні розсилки»</li>
                <li>Електронний журнал «Дебет-Кредит»</li>
                <li>Щомісячні спецвипуски</li>
              </div>
              <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-dtkt_ek_gift2&amp;options%5Bperiods%5D=9" class="btn btn-package  btn-arrow btn-package--nine" target="_blank">Беру!</a>
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
