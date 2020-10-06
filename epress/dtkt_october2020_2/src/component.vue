{% set link = page.url('/images') %}

<template>
    <landing name="dtkt_october2020_2" advantages="epressa_add_dtkt" class="landing-dtkt__october2020_2">
        <template v-slot:cover>
          <div class="hero">
            <a href="#order"  >
              <picture class="d-none d-md-block">
                <source :src="mix('images/banner_26%.webp')" type="image/webp">
                <img :src="mix('images/banner-min.jpg')" class="img-fluid" alt="dk">
              </picture>
              <picture class="d-block d-md-none">
                <source :src="mix('images/mob.webp')" type="image/webp">
                <img :src="mix('images/mob.png')" class="img-fluid" alt="dk">
              </picture>
            </a>
          </div>
          <div id="order" class="order">
            <div class="container">
              <p class="order__sub-title">
                Що ви отримаєте
              </p>
                <div  class="packages">
                  <div class="package ">
                    <div class="package__container">
                      <h3 class="package__title">ЕКСПЕРТ</h3>
                      <hr>
                      <p class="package__price"> <price article="ep-dtkt_ek_gift" :options="{periods: 1}" format="0"/> грн/міс.</p>
                      <p class="package__price-old"><s>163 грн/міс.</s></p>
                      <div class="package__present">
                        <p>ПОДАРУНОК:</p>
                        <span>+ 3 місяці <br> Бухгалтерської <br> Відеоплатформи №1</span>
                      </div>
                      <p class="package__btn"> <router-link :to="`/order?article=ep-dtkt_ek_gift&options[periods]=6`" class="btn" target="_blank">Беру!
                      </router-link>
                      </p>

                    </div>
                  </div>
                  <div class="package ">
                    <div class="package__container">
                      <h3 class="package__title">ПРОФІ</h3>
                      <hr>
                      <p class="package__price"> <price article="ep-dtkt_pr_gift" :options="{periods: 1}" format="0"/>  грн/міс.</p>
                      <p class="package__price-old"><s>299 грн/міс.</s></p>
                      <div class="package__present">
                        <p>ПОДАРУНОК:</p>
                        <span>+ 3 місяці <br> Бухгалтерської <br> Відеоплатформи №1</span>
                      </div>
                      <p class="package__btn"> <router-link :to="`/order?article=ep-dtkt_pr_gift&options[periods]=6`" class="btn" target="_blank">Беру!
                      </router-link>
                      </p>

                    </div>
                  </div>
                  <div class="package ">
                    <div class="package__container">
                      <h3 class="package__title">ПРОФІ Плюс</h3>
                      <hr>
                      <p class="package__price"> <price article="ep-dtkt_pp_gift" :options="{periods: 1}" format="0"/>грн/міс.</p>
                      <p class="package__price-old"><s>499 грн/міс.</s></p>
                      <div class="package__present">
                        <p>ПОДАРУНОК:</p>
                        <span>+ 3 місяці <br> Бухгалтерської <br> Відеоплатформи №1</span>
                      </div>
                      <p class="package__btn"> <router-link :to="`/order?article=ep-dtkt_pp_gift&options[periods]=6`" class="btn" target="_blank">Беру!
                      </router-link>
                      </p>
                    </div>
                  </div>
                </div>

              <div class="order__advantages">
                <p class="order__sub-title">
                  Що входить до передплатних пакетів <br class='d-none d-sm-block'> «Дебету-Кредиту»
                </p>

                <div class="order__included-list">
                  <div class="included">
                    <div class="included__title">ЕКСПЕРТ</div>
                    <hr>
                    <ul class="included__list">
                      <li>Електронний журнал</li>
                      <li>Щомісячні спецвипуски</li>
                      <li>Нормативні документи</li>
                      <li>Все важливе у вашій поштовій скринці</li>
                      <li>Доступ до архівних номерів на сайті</li>
                      <li class="is-inactive">Сервіс «Постав запитання редакції»</li>
                      <li class="is-inactive">Вебінари редакції</li>
                      <li class="is-inactive">Звітність у «СОТА»</li>
                      <li class="is-inactive">Велика настільна книга</li>
                    </ul>
                    <p class="included__platform  is-inactive">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="-6.74 -6.87 55.04 55.2">
                        <path d="M25.84 15.88V-1.58a5 5 0 10-10 0v17.46H-1.62a5 5 0 000 10h17.46v17.45a5 5 0 1010 0V25.88H43.3a4.98 4.98 0 005-5 5 5 0 00-5-5H25.84z"></path>
                      </svg>
                      Бухгалтерська відеоплатформа 7eminar.ua
                    </p>
                    <p class="included__link">
                      <a href="https://promo.dtkt.ua/expert" target="_blank">Детальніше про пакет</a>
                    </p>
                    <p class="included__btn">
                      <router-link  :to="`/order?article=ep-dtkt_ek_gift&options[periods]=6`" class="btn" target="_blank">Передплатити
                      </router-link>
                    </p>
                  </div>
                  <div class="included">
                    <div class="included__title">ПРОФІ</div>
                    <hr>
                    <ul class="included__list">
                      <li>Електронний журнал</li>
                      <li>Щомісячні спецвипуски</li>
                      <li>Нормативні документи</li>
                      <li>Все важливе у вашій поштовій скринці</li>
                      <li>Доступ до архівних номерів на сайті</li>
                      <li class="">Сервіс «Постав запитання редакції»</li>
                      <li class="">Вебінари редакції</li>
                      <li class="">Звітність у «СОТА»</li>
                      <li class="">Велика настільна книга</li>
                    </ul>
                    <p class="included__platform  is-inactive">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="-6.74 -6.87 55.04 55.2">
                        <path d="M25.84 15.88V-1.58a5 5 0 10-10 0v17.46H-1.62a5 5 0 000 10h17.46v17.45a5 5 0 1010 0V25.88H43.3a4.98 4.98 0 005-5 5 5 0 00-5-5H25.84z"></path>
                      </svg>
                      Бухгалтерська відеоплатформа 7eminar.ua
                    </p>
                    <p class="included__link">
                      <a href="https://promo.dtkt.ua/profi" target="_blank">Детальніше про пакет</a>
                    </p>
                    <p class="included__btn">
                      <router-link  :to="`/order?article=ep-dtkt_pr_gift&options[periods]=6`" class="btn" target="_blank">Передплатити
                      </router-link>
                    </p>
                  </div>
                  <div class="included">
                    <div class="included__title">ПРОФІ Плюс</div>
                    <hr>
                    <ul class="included__list">
                      <li>Електронний журнал</li>
                      <li>Щомісячні спецвипуски</li>
                      <li>Нормативні документи</li>
                      <li>Все важливе у вашій поштовій скринці</li>
                      <li>Доступ до архівних номерів на сайті</li>
                      <li class="">Сервіс «Постав запитання редакції»</li>
                      <li class="">Вебінари редакції</li>
                      <li class="">Звітність у «СОТА»</li>
                      <li class="">Велика настільна книга</li>
                    </ul>
                    <p class="included__platform  ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="-6.74 -6.87 55.04 55.2">
                        <path d="M25.84 15.88V-1.58a5 5 0 10-10 0v17.46H-1.62a5 5 0 000 10h17.46v17.45a5 5 0 1010 0V25.88H43.3a4.98 4.98 0 005-5 5 5 0 00-5-5H25.84z"></path>
                      </svg>
                      Бухгалтерська відеоплатформа 7eminar.ua
                    </p>
                    <p class="included__link">
                      <a href="https://7eminar.ua/" target="_blank">Детальніше про платформу</a>
                    </p>
                    <p class="included__btn">
                      <router-link  :to="`/order?article=ep-dtkt_pp_gift&options[periods]=6`" class="btn" target="_blank">Передплатити
                      </router-link>
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

            </div>
        </template>
        <template     v-slot:packages_list>
          <div>
          </div>
        </template>

    </landing>

</template>

<script>
import Page from '../../core/Page'

export default {
    mixins: [Page],
    computed: {

        btnText() {
            return this.show ? 'приховати' : 'а ще входить...'
        },
    },

}
</script>