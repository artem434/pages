{% set link = page.url('/images') %}

<template>
    <landing name="dtkt_demo2020" advantages="epressa_add_dtkt" class="landing-dtkt__demo2020">
        <template v-slot:cover>
          <div class="hero">
            <div class="hero__content">
              <div class="hero__block">
                <a href="https://dtkt.ua/about" target="_blank" class="hero__logo">
                  <picture>
                    <img :src="mix('images/logo_dk.png')"  width="141" height="36" class="img-fluid" alt="«Дебет-Кредит» | Бухгалтерський сервіс №1 в Україні">
                  </picture>
                </a>
                <p class="hero__title">Даруємо <br> безкоштовний місяць</p>
                <p class="hero__sub-title">передплати на бухгалтерський <br> сервіс "Дебет-Кредит"</p>
                <p class="hero__btn">
                  <a href="https://subscribe.dtkt.ua/order/001302bb30d25fa78d59c0" target="_blank" class="btn">отримати безкоштовно</a>
                </p>
                <picture class="d-md-none">
                  <source :src="mix('images/hero_mob.webp')" type="image/webp">
                  <img :src="mix('images/hero_mob-min.png')"  width="300"  class="img-fluid" alt="«Дебет-Кредит» | Бухгалтерський сервіс №1 в Україні">
                </picture>
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
              <div class="info">
                <p class="info__title">Що ви отримаєте</p>
                <ul class="info__list">
                  <li>
                    <div class="info__icon">
                      <picture>
                        <img :src="mix('images/img1.png')"  width="73" height="73" class="img-fluid" alt="Електронний журнал «Дебет-Кредит»">
                      </picture>
                    </div>
                    <b>Електронний журнал <br>
                      «Дебет-Кредит»</b>
                    <p>
                      Щопонеділка читайте журнал <br>
                      онлайн на сайті</p>
                  </li>

                  <li>
                    <div class="info__icon">
                      <picture>
                        <img :src="mix('images/img2.png')"  width="73" height="73" class="img-fluid" alt="Електронний журнал «Дебет-Кредит»">
                      </picture>
                    </div>
                    <b>Щоденна добірка новин</b>
                    <p>Кожного дня на Вашу поштову <br>
                      скриньку буде надходити розсилка <br>
                      найважливіших бухгалтерських новин</p>
                  </li>

                  <li>
                    <div class="info__icon">
                      <picture>
                        <img :src="mix('images/img3.png')"  width="61" height="68" class="img-fluid" alt="Електронний журнал «Дебет-Кредит»">
                      </picture>
                    </div>
                    <b>Розумний податковий <br> календар</b>
                    <p>Мы заздалегідь нагадаємо Вам <br>
                      про терміни подання звітів і <br>
                      декларацій, сплати податків і зборів</p>
                  </li>

                  <li>
                    <div class="info__icon">
                      <picture>
                        <img :src="mix('images/img4.png')"  width="73" height="73" class="img-fluid" alt="Електронний журнал «Дебет-Кредит»">
                      </picture>
                    </div>
                    <b>«Запитання і відповіді» <br>
                      за тиждень</b>
                    <p>Для Вас ми обираємо найкорисніші <br>
                      відповіді на запитання нашого  <br>
                      бухгалтерського сервісу  за минулий тиждень
                    </p>
                  </li>

                  <li>
                    <div class="info__icon">
                      <picture>
                        <img :src="mix('images/img5.png')"  width="73" height="73" class="img-fluid" alt="Електронний журнал «Дебет-Кредит»">
                      </picture>
                    </div>
                    <b>«Головне за тиждень» <br>
                      від редакції</b>
                    <p>Раз на тиждень, щопонеділка, ми пишемо <br>
                      про те, що сталося минулого тижня <br>
                      і чого Вам очікувати у найближчі п`ять днів.</p>
                  </li>

                  <li>
                    <div class="info__icon">
                      <picture>
                        <img :src="mix('images/img6.png')"  width="73" height="73" class="img-fluid" alt="Електронний журнал «Дебет-Кредит»">
                      </picture>
                    </div>
                    <b>«Документи за тиждень»</b>
                    <p>
                      Щопонеділка отримуйте найактуальніші <br>
                      документи за тиждень, що минув</p>
                  </li>


                </ul>
                <p class="info__btn">
                  <a href="https://subscribe.dtkt.ua/order/001302bb30d25fa78d59c0" target="_blank" class="btn">отримати безкоштовно</a>
                </p>
              </div>
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