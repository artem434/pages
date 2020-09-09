{% set link = page.url('/images') %}

<template>
    <landing name="dtkt_september2020" advantages="epressa_add_dtkt" class="landing-dtkt__september2020">
        <template v-slot:cover>
          <div class="hero">
            <a href="https://dtkt.ua/about" target="_blank" class="hero__logo">
              <picture>
                <img :src="mix('images/logo_dk.png')"  width="190" height="50" class="img-fluid" alt="«Дебет-Кредит» | Бухгалтерський сервіс №1 в Україні">
              </picture>
            </a>
            <p class="hero__title">Три місяці на додачу</p>
            <p class="hero__sub-title">передплати бухгалтерського <br> сервісу «Дебет-Кредит» <br class="d-sm-block"> та Бухгалтерської <br> Відеоплатформи №1</p>
            <p class="hero__btn">
              <a href="#order" class=" btn">Замовити з подарунками</a>
            </p>
            <div class="hero__donuts">
              <div class="donut-1"></div>
              <div class="donut-2"></div>
              <div class="donut-3"></div>
            </div>
          </div>

          <div id="order" class="order">
            <div class="container">
              <p class="order__title" v-html="page.options.order_title">

              </p>
              <p class="order__sub-title">
                Обирайте ваш пакет та місяць початку передплати
              </p>
              <ul class="tab">
                <li class="tab__item" :class="{active: tab ==='3'}" @click="tab = '3'"><p>3+1</p></li>
                <li class="tab__item" :class="{active: tab ==='6'}" @click="tab = '6'"><p>6+2</p></li>
                <li class="tab__item" :class="{active: tab ==='9'}" @click="tab = '9'"><p>9+3</p></li>
              </ul>
              <div class="tab__content">
                <div  v-if="tab =='3'" class="tab__packages">
                  <div class="package three">
                    <div class="package__container">
                      <h3 class="package__title">ЕКСПЕРТ</h3>
                      <p class="package__period">на 3 місяці</p>
                      <hr>
                      <p class="package__price"> <price article="ep-dtkt_ek_action" :options="{periods: 4}" format="0"/>  <small>грн</small></p>
                      <div class="package__present">
                        <p>ПОДАРУНКИ:</p>
                        <span>+ ще 1 місяць</span>
                        <span>+ 1 місяць Бухгалтерської Відеоплатформи №1</span>
                      </div>
                      <p class="package__btn"> <router-link :to="`/order?article=ep-dtkt_ek_action&options[periods]=4`" class="btn" target="_blank">Беру!
                      </router-link>
                      </p>

                    </div>
                  </div>
                  <div class="package three">
                    <div class="package__container">
                      <h3 class="package__title">ПРОФІ</h3>
                      <p class="package__period">на 3 місяці</p>
                      <hr>
                      <p class="package__price"> <price article="ep-dtkt_pr_action" :options="{periods: 4}" format="0"/> <small>грн</small></p>
                      <div class="package__present">
                        <p>ПОДАРУНКИ:</p>
                        <span>+ ще 1 місяць</span>
                        <span>+ 1 місяць Бухгалтерської Відеоплатформи №1</span>
                      </div>
                      <p class="package__btn"> <router-link :to="`/order?article=ep-dtkt_pr_action&options[periods]=4`" class="btn" target="_blank">Беру!
                      </router-link>
                      </p>

                    </div>
                  </div>
                  <div class="package three">
                    <div class="package__container">
                      <h3 class="package__title">ПРОФІ Плюс</h3>
                      <p class="package__period">на 3 місяці</p>
                      <hr>
                      <p class="package__price">  <price article="ep-dtkt_pp_action" :options="{periods: 4}" format="0"/><small>грн</small></p>
                      <div class="package__present">
                        <p>ПОДАРУНКИ:</p>
                        <span>+ ще 1 місяць</span>
                        <span>+ 1 місяць Бухгалтерської Відеоплатформи №1</span>
                      </div>
                      <p class="package__btn"> <router-link :to="`/order?article=ep-dtkt_pp_action&options[periods]=4`" class="btn" target="_blank">Беру!
                      </router-link>
                      </p>

                    </div>
                  </div>
                </div>

                <div  v-if="tab =='6'" class="tab__packages">
                  <div class="package six">
                    <div class="package__container">
                      <h3 class="package__title">ЕКСПЕРТ</h3>
                      <p class="package__period">на 6 місяців</p>
                      <hr>
                      <p class="package__price"> <price article="ep-dtkt_ek_action" :options="{periods: 8}" format="0"/>  <small>грн</small></p>
                      <div class="package__present">
                        <p>ПОДАРУНКИ:</p>
                        <span>+ ще 2 місяці</span>
                        <span>+ 2 місяці Бухгалтерської Відеоплатформи №1</span>
                      </div>
                      <p class="package__btn"> <router-link :to="`/order?article=ep-dtkt_ek_action&options[periods]=8`" class="btn" target="_blank">Беру!
                      </router-link>
                      </p>

                    </div>
                  </div>
                  <div class="package six">
                    <div class="package__container">
                      <h3 class="package__title">ПРОФІ</h3>
                      <p class="package__period">на 6 місяців</p>
                      <hr>
                      <p class="package__price"> <price article="ep-dtkt_pr_action" :options="{periods: 8}" format="0"/> <small>грн</small></p>
                      <div class="package__present">
                        <p>ПОДАРУНКИ:</p>
                        <span>+ ще 2 місяці</span>
                        <span>+ 2 місяці Бухгалтерської Відеоплатформи №1</span>
                      </div>
                      <p class="package__btn"> <router-link :to="`/order?article=ep-dtkt_pr_action&options[periods]=8`" class="btn" target="_blank">Беру!
                      </router-link>
                      </p>

                    </div>
                  </div>
                  <div class="package six">
                    <div class="package__container">
                      <h3 class="package__title">ПРОФІ Плюс</h3>
                      <p class="package__period">на 6 місяців</p>
                      <hr>
                      <p class="package__price">  <price article="ep-dtkt_pp_action" :options="{periods: 8}" format="0"/><small>грн</small></p>
                      <div class="package__present">
                        <p>ПОДАРУНКИ:</p>
                        <span>+ ще 2 місяці</span>
                        <span>+ 2 місяці Бухгалтерської Відеоплатформи №1</span>
                      </div>
                      <p class="package__btn"> <router-link :to="`/order?article=ep-dtkt_pp_action&options[periods]=8`" class="btn" target="_blank">Беру!
                      </router-link>
                      </p>
                    </div>
                  </div>
                </div>

                <div  v-if="tab =='9'" class="tab__packages">
                  <div class="package nine">
                    <div class="package__container">
                      <h3 class="package__title">ЕКСПЕРТ</h3>
                      <p class="package__period">на 9 місяців</p>
                      <hr>
                      <p class="package__price"> <price article="ep-dtkt_ek_action" :options="{periods: 12}" format="0"/>  <small>грн</small></p>
                      <div class="package__present">
                        <p>ПОДАРУНКИ:</p>
                        <span>+ ще 3 місяці</span>
                        <span>+ 3 місяці Бухгалтерської Відеоплатформи №1</span>
                      </div>
                      <p class="package__btn"> <router-link :to="`/order?article=ep-dtkt_ek_action&options[periods]=12`" class="btn" target="_blank">Беру!
                      </router-link>
                      </p>

                    </div>
                  </div>
                  <div class="package nine">
                    <div class="package__container">
                      <h3 class="package__title">ПРОФІ</h3>
                      <p class="package__period">на 9 місяців</p>
                      <hr>
                      <p class="package__price"> <price article="ep-dtkt_pr_action" :options="{periods: 12}" format="0"/> <small>грн</small></p>
                      <div class="package__present">
                        <p>ПОДАРУНКИ:</p>
                        <span>+ ще 3 місяці</span>
                        <span>+ 3 місяці Бухгалтерської Відеоплатформи №1</span>
                      </div>
                      <p class="package__btn"> <router-link :to="`/order?article=ep-dtkt_pr_action&options[periods]=12`" class="btn" target="_blank">Беру!
                      </router-link>
                      </p>

                    </div>
                  </div>
                  <div class="package nine">
                    <div class="package__container">
                      <h3 class="package__title">ПРОФІ Плюс</h3>
                      <p class="package__period">на 9 місяців</p>
                      <hr>
                      <p class="package__price">  <price article="ep-dtkt_pp_action" :options="{periods: 12}" format="0"/><small>грн</small></p>
                      <div class="package__present">
                        <p>ПОДАРУНКИ:</p>
                        <span>+ ще 3 місяці</span>
                        <span>+ 3 місяці Бухгалтерської Відеоплатформи №1</span>
                      </div>
                      <p class="package__btn"> <router-link :to="`/order?article=ep-dtkt_pp_action&options[periods]=12`" class="btn" target="_blank">Беру!
                      </router-link>
                      </p>

                    </div>
                  </div>
                </div>
              </div>


              <div class="order__advantages">
                <p class="order__sub-title">
                  Що входить до передплатних пакетів «Дебету-Кредиту»
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
                      <router-link v-if="tab =='3'" :to="`/order?article=ep-dtkt_ek_action&options[periods]=4`" class="btn" target="_blank">Передплатити
                      </router-link>
                      <router-link v-if="tab =='6'" :to="`/order?article=ep-dtkt_ek_action&options[periods]=8`" class="btn" target="_blank">Передплатити
                      </router-link>
                      <router-link v-if="tab =='9'" :to="`/order?article=ep-dtkt_ek_action&options[periods]=12`" class="btn" target="_blank">Передплатити
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
                      <router-link v-if="tab =='3'" :to="`/order?article=ep-dtkt_pr_action&options[periods]=4`" class="btn" target="_blank">Передплатити
                      </router-link>
                      <router-link v-if="tab =='6'" :to="`/order?article=ep-dtkt_pr_action&options[periods]=8`" class="btn" target="_blank">Передплатити
                      </router-link>
                      <router-link v-if="tab =='9'" :to="`/order?article=ep-dtkt_pr_action&options[periods]=12`" class="btn" target="_blank">Передплатити
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
                      <router-link v-if="tab =='3'" :to="`/order?article=ep-dtkt_pp_action&options[periods]=4`" class="btn" target="_blank">Передплатити
                      </router-link>
                      <router-link v-if="tab =='6'" :to="`/order?article=ep-dtkt_pp_action&options[periods]=8`" class="btn" target="_blank">Передплатити
                      </router-link>
                      <router-link v-if="tab =='9'" :to="`/order?article=ep-dtkt_pp_action&options[periods]=12`" class="btn" target="_blank">Передплатити
                      </router-link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         <!-- <div class="tab-content">
            <label class="label" :class="{active: tab ==='3'}" @click="tab = '3'">3 місяців </label>
            <label class="label" :class="{active: tab ==='6'}" @click="tab = '6'">6 місяців </label>
            <label class="label" :class="{active: tab ==='9'}" @click="tab = '9'">9 місяців </label>
          </div>

          <div   v-if="tab =='3'" :class="{three: tab ==='3'}" class="package__old-price" style="text-decoration: line-through">
            <price article="ep-dtkt_ek_gift" :options="{periods: 6}" format="0"/>
          </div>
          <div  v-else-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">6 місяців</div>
          <div  v-else class="package__old-price" style="text-decoration: line-through">9 місяців</div>-->
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
    data:()=>({
        show: false,
       tab: '3'
    })
}
</script>