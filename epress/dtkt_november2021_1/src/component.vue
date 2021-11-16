<template>
    <landing name="dtkt_december2020" advantages="epressa_add_interbuh" class="landing-dtkt_november2021_1">
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
                <picture>
                  <img :src="mix('images/epresa_white.png')" class="epresa" alt="dk">
                </picture>
                <picture>
                  <img :src="mix('images/DTKT.UA_LOGO.png')" class="DTKT" alt="dk">
                </picture>
              </div>
              <h1>На що витратиш <br> свою перерву:</h1>
              <p class="hero__subtitle">каву чи масаж?</p>
              <p class="hero__description">Передплачуйте бухгалтерський сервіс <br>
                «Дебет-Кредит» <b>та обирайте <br>
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
        <h2  class="packages__title">{{ page.options['order_title-top']}}</h2>
        <landing-package-row>
          <landing-package article="ep-dtkt_ek_gift2">
            <template v-slot:title>
              <span>ЕКСПЕРТ<br>та подарунки</span>
            </template>
            <template v-slot:period>
              <!--                <div class="package__month">3 місяці</div>-->
              <p class="package__custom-price">
                <price article="ep-dtkt_ek_gift2" :options="{periods: 1}" format="0"/>
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
            </template>
          </landing-package>



          <landing-package article="ep-dtkt_pr_gift2" class="package__two">
            <template v-slot:title>
              <span>ПРОФІ<br>та подарунки</span>
            </template>
            <template v-slot:period>
              <!--              <div class="package__month">3 місяці</div>-->
              <p class="package__custom-price">
                <price article="ep-dtkt_pr_gift2" :options="{periods: 1}" format="0"/>   <b>грн/міс.</b>
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
                <li>Доступ до архівних номерів на сайті</li>
                <li>Сервіс «Постав запитання редакції»</li>
                <li>Вебінари редакції</li>
                <li>Велика настільна книга</li>
                <li>Звітність у «СОТА»</li>
              </div>
              <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
            </template>



          </landing-package>

          <landing-package article="ep-dtkt_pp_gift2" class="package__three package__plus-top ">
            <template v-slot:title>
              <span>ПРОФІ + 7eminar.ua<br>та подарунки</span>
            </template>
            <template v-slot:period>
              <!--              <div class="package__month">3 місяці</div>-->
              <p class="package__custom-price">
                <price article="ep-dtkt_pp_gift2" :options="{periods: 1}" format="0"/>
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
                <li>Доступ до архівних номерів на сайті</li>
                <li>Сервіс «Постав запитання редакції»</li>
                <li>Вебінари редакції</li>
                <li>Велика настільна книга</li>
                <li>Звітність у «СОТА»</li>
                <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 400  курсів та вебінарів для перегляду
                  <!--<br><span  > (квітень - вересень 2020)</span>--> </li>
              </div>
              <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
            </template>
          </landing-package>
        </landing-package-row>
        <h2 class="packages__title">{{ page.options['order_title-bottom']}}</h2>
        <landing-package-row>
          <landing-package article="ep-dtkt_ek_action">
            <template v-slot:title>
              <span>ЕКСПЕРТ<br>та подарунки</span>
            </template>
            <template v-slot:period>
              <!--                <div class="package__month">3 місяці</div>-->
              <p class="package__custom-price">
                <price article="ep-dtkt_ek_action" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>

            <template v-slot:gifts>
              <li >Великий Бухгалтерський
                Семінар (онлайн-трансляція та відеозапис)</li>
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
            </template>
          </landing-package>



          <landing-package article="ep-dtkt_pr_action" class="package__two">
            <template v-slot:title>
              <span>ПРОФІ<br>та подарунки</span>
            </template>
            <template v-slot:period>
              <!--              <div class="package__month">3 місяці</div>-->
              <p class="package__custom-price">
                <price article="ep-dtkt_pr_action" :options="{periods: 1}" format="0"/>   <b>грн/міс.</b>
              </p>
            </template>
            <template v-slot:gifts>
              <li >Великий Бухгалтерський
                Семінар (онлайн-трансляція та відеозапис)</li>
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
                <li>Доступ до архівних номерів на сайті</li>
                <li>Сервіс «Постав запитання редакції»</li>
                <li>Вебінари редакції</li>
                <li>Велика настільна книга</li>
                <li>Звітність у «СОТА»</li>
              </div>
              <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
            </template>



          </landing-package>

          <landing-package article="ep-dtkt_pp_action" class="package__three package__plus-top ">
            <template v-slot:title>
              <span>ПРОФІ + 7eminar.ua<br>та подарунки</span>
            </template>
            <template v-slot:period>
              <!--              <div class="package__month">3 місяці</div>-->
              <p class="package__custom-price">
                <price article="ep-dtkt_pp_action" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>
            <template v-slot:gifts>
              <li >Великий Бухгалтерський
                Семінар (онлайн-трансляція та відеозапис)</li>
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
                <li>Доступ до архівних номерів на сайті</li>
                <li>Сервіс «Постав запитання редакції»</li>
                <li>Вебінари редакції</li>
                <li>Велика настільна книга</li>
                <li>Звітність у «СОТА»</li>
                <li class="package__abilities-item-platform">Бухгалтерська відеоплатформа  <a href="https://7eminar.ua" target="_blank">7eminar.ua</a>: понад 400  курсів та вебінарів для перегляду
                  <!--<br><span  > (квітень - вересень 2020)</span>--> </li>
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
