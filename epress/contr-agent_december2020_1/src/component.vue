<template>
    <landing name="contr-agent_december2020_1" advantages="epressa_add_interbuh" class="landing-contr-agent_december2020_1">
        <template v-slot:cover>
          <Snowf
              :amount="50"
              :size="5"
              :speed="1.5"
              :wind="0"
              :opacity="0.8"
              :swing="1"
              :image="null"
              :zIndex="null"
              :resize="true"
              color="#fff"
          />
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container">
                        <div class="cover">
                            <a class="d-none d-md-block" href="#gift">
                                <picture class="cover__img">
                                    <source :src="mix('images/contr_a.webp')" type="image/webp">
                                    <img :src="mix('images/contr_a-min.jpg')" class="img-fluid" alt="IB">
                                </picture>
                            </a>
                          <a class="d-block d-md-none" href="#gift">
                            <picture class="cover__img">
                              <source :src="mix('images/320_contr_a.webp')" type="image/webp">
                              <img :src="mix('images/320_contr_a-min.jpg')" class="img-fluid" alt="IB">
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
          <h2  id="gift" class="packages__title">{{ page.options['order_title-top']}}</h2>

            <landing-package-row>
                <landing-package article="ep-contr-agent_ek">
                    <template v-slot:title>
                      <span>ТАРИФ<br>«START»</span>
                    </template>
                    <template v-slot:period>
                      <p class="package__custom-price">
                        <price article="ep-contr-agent_ek" :options="{periods: 1}" format="0"/>
                        грн/міс.
                      </p>
                    </template>

                  <template v-slot:gifts>
                    <li >Великий Річний Семінар (гарантовано)</li>
                    <li> Оберіть свій подарунок <br>  (при передплаті на 12 міс.)
                      <ul>
                        <li><a target="_blank" href="https://bt.rozetka.com.ua/260258496/p260258496/">• пульсоксиметр</a></li>
                        <li><a target="_blank" href="https://rozetka.com.ua/excellent_houseware_170170100/p61587783/">• гейзерна кавоварка</a></li>
                        <li><a target="_blank" href="https://bt.rozetka.com.ua/scarlett_sc_ks57p33/p70745330/">• кухонні ваги</a></li>
                      </ul>
                    </li>
                  </template>
                  <template v-slot:abilities>
                    <li>До 50 об'єктів моніторингу</li>
                    <li>250 переглядів карточок</li>
                    <li>Користувачі 1</li>
                    <div v-if="show">
                      <li>Повне досьє</li>
                      <li>Історія змін в ЄДР</li>
                      <li>Афілійовані зв’язки</li>
                      <li>Публічні кошти і держзакупівлі </li>
                      <li>Держперевірки і результати</li>
                      <li>Інформація про фінанси та ВЕД</li>
                      <li>Медіа-аналітика</li>
                    </div>
                    <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
                  </template>
                </landing-package>

                <landing-package article="ep-contr-agent_cp_action2">
                <template v-slot:title>
                  <span>ТАРИФ<br>«OPTIMUM»</span>
                </template>
                <template v-slot:period>

                  <p class="package__custom-price">
                    <price article="ep-contr-agent_cp_action2" :options="{periods: 1}" format="0"/>
                    грн/міс.
                  </p>
                </template>

                  <template v-slot:gifts>
                    <li >Великий Річний Семінар (гарантовано)</li>
                    <li> Оберіть свій подарунок <br>  (при передплаті на 12 міс.)
                      <ul>
                        <li><a target="_blank" href="https://bt.rozetka.com.ua/260258496/p260258496/">• пульсоксиметр</a></li>
                        <li><a target="_blank" href="https://rozetka.com.ua/excellent_houseware_170170100/p61587783/">• гейзерна кавоварка</a></li>
                        <li><a target="_blank" href="https://bt.rozetka.com.ua/scarlett_sc_ks57p33/p70745330/">• кухонні ваги</a></li>
                      </ul>
                    </li>
                  </template>
                <template v-slot:abilities>
                  <li>До 150 об'єктів моніторингу</li>
                  <li>750 переглядів карточок</li>
                  <li>Користувачі 1</li>
                  <div v-if="show">
                    <li>Повне досьє</li>
                    <li>Історія змін в ЄДР</li>
                    <li>Афілійовані зв’язки</li>
                    <li>Публічні кошти і держзакупівлі </li>
                    <li>Держперевірки і результати</li>
                    <li>Інформація про фінанси та ВЕД</li>
                    <li>Медіа-аналітика</li>
                  </div>
                  <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
                </template>
              </landing-package>

              <landing-package article="ep-contr-agent_pr">
                <template v-slot:title>
                  <span>ТАРИФ<br>«PREMIUM»</span>
                </template>
                <template v-slot:period>

                  <p class="package__custom-price">
                    <price article="ep-contr-agent_pr" :options="{periods: 1}" format="0"/>
                    грн/міс.
                  </p>
                </template>

                <template v-slot:gifts>
                  <li >Великий Річний Семінар (гарантовано)</li>
                  <li> Оберіть свій подарунок <br>  (при передплаті на 12 міс.)
                    <ul>
                      <li><a target="_blank" href="https://bt.rozetka.com.ua/260258496/p260258496/">• пульсоксиметр</a></li>
                      <li><a target="_blank" href="https://rozetka.com.ua/excellent_houseware_170170100/p61587783/">• гейзерна кавоварка</a></li>
                      <li><a target="_blank" href="https://bt.rozetka.com.ua/scarlett_sc_ks57p33/p70745330/">• кухонні ваги</a></li>
                    </ul>
                  </li>
                </template>
                <template v-slot:abilities>
                  <li>До 300 об'єктів моніторингу</li>
                  <li>1500 переглядів карточок</li>
                  <li>Користувачі 1</li>
                  <div v-if="show">
                    <li>Повне досьє</li>
                    <li>Історія змін в ЄДР</li>
                    <li>Афілійовані зв’язки</li>
                    <li>Публічні кошти і держзакупівлі </li>
                    <li>Держперевірки і результати</li>
                    <li>Інформація про фінанси та ВЕД</li>
                    <li>Медіа-аналітика</li>
                  </div>
                  <p class="package__list-show" @click="show = !show">{{ btnText }}</p>

                </template>
              </landing-package>

              <landing-package article="ep-contr-agent_pp"class="package__three package__plus-top">
                <template v-slot:title>
                  <span>ТАРИФ<br>«CORPORATE»</span>
                </template>
                <template v-slot:period>

                  <p class="package__custom-price">
                    <price article="ep-contr-agent_pp" :options="{periods: 1}" format="0"/>
                    грн/міс.
                  </p>
                </template>

                <template v-slot:gifts>
                  <li >Великий Річний Семінар (гарантовано)</li>
                  <li> Оберіть свій подарунок <br>  (при передплаті на 12 міс.)
                    <ul>
                      <li><a target="_blank" href="https://bt.rozetka.com.ua/260258496/p260258496/">• пульсоксиметр</a></li>
                      <li><a target="_blank" href="https://rozetka.com.ua/excellent_houseware_170170100/p61587783/">• гейзерна кавоварка</a></li>
                      <li><a target="_blank" href="https://bt.rozetka.com.ua/scarlett_sc_ks57p33/p70745330/">• кухонні ваги</a></li>
                    </ul>
                  </li>
                </template>
                <template v-slot:abilities>
                  <li>До 1000 об'єктів моніторингу</li>
                  <li>2500 переглядів карточок</li>
                  <li>Користувачі 3</li>
                  <div v-if="show">
                    <li>Повне досьє</li>
                    <li>Історія змін в ЄДР</li>
                    <li>Афілійовані зв’язки</li>
                    <li>Публічні кошти і держзакупівлі </li>
                    <li>Держперевірки і результати</li>
                    <li>Інформація про фінанси та ВЕД</li>
                    <li>Медіа-аналітика</li>
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
    import Snowf from 'vue-snowf';

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
