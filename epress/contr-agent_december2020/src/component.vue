<template>
    <landing name="contr-agent_december2020" advantages="epressa_add_interbuh" class="landing-contr-agent_december2020">
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
                                    <source :src="mix('images/ca.webp')" type="image/webp">
                                    <img :src="mix('images/ca-min.jpg')" class="img-fluid" alt="IB">
                                </picture>
                            </a>
                          <a class="d-block d-md-none" href="#gift">
                            <picture class="cover__img">
                              <source :src="mix('images/320_ca.webp')" type="image/webp">
                              <img :src="mix('images/320_ca-min.jpg')" class="img-fluid" alt="IB">
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
                <landing-package article="ep-contr-agent_ek_action">
                    <template v-slot:title>
                      <span>ТАРИФ<br>«START»</span>
                    </template>
                    <template v-slot:period>
                        <div class="package__month">3 місяці</div>
                      <p class="package__custom-price">
                        <price article="ep-contr-agent_ek_action" :options="{periods: 3}" format="0"/>
                        грн
                      </p>
                    </template>

                    <template v-slot:gifts>
                      <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
                        Online-Семінар</a></li>
                      <li><a href="https://iglaz.ua/xiaomi-redmi-9a-2-32gb-granite-gray-eu/option/48272" target="_blank">Смартфон  </a> або <a href="https://www.citrus.ua/planshety/huawei-mediapad-t3-7-8gb-grey-615719.html" target="_blank">планшет</a></li>
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

                <landing-package article="ep-contr-agent_cp_action">
                <template v-slot:title>
                  <span>ТАРИФ<br>«OPTIMUM»</span>
                </template>
                <template v-slot:period>
                  <div class="package__month">3 місяці</div>
                  <p class="package__custom-price">
                    <price article="ep-contr-agent_cp_action" :options="{periods: 3}" format="0"/>
                    грн
                  </p>
                </template>

                <template v-slot:gifts>
                  <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
                    Online-Семінар</a></li>
                  <li><a href="https://iglaz.ua/xiaomi-redmi-9a-2-32gb-granite-gray-eu/option/48272" target="_blank">Смартфон  </a> або <a href="https://www.citrus.ua/planshety/huawei-mediapad-t3-7-8gb-grey-615719.html" target="_blank">планшет</a></li>
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

              <landing-package article="ep-contr-agent_pr_action">
                <template v-slot:title>
                  <span>ТАРИФ<br>«PREMIUM»</span>
                </template>
                <template v-slot:period>
                  <div class="package__month">3 місяці</div>
                  <p class="package__custom-price">
                    <price article="ep-contr-agent_pr_action" :options="{periods: 3}" format="0"/>
                    грн
                  </p>
                </template>

                <template v-slot:gifts>
                  <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
                    Online-Семінар</a></li>
                  <li><a href="https://iglaz.ua/xiaomi-redmi-9a-2-32gb-granite-gray-eu/option/48272" target="_blank">Смартфон  </a> або <a href="https://www.citrus.ua/planshety/huawei-mediapad-t3-7-8gb-grey-615719.html" target="_blank">планшет</a></li>
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

              <landing-package article="ep-contr-agent_pp_action"class="package__three package__plus-top">
                <template v-slot:title>
                  <span>ТАРИФ<br>«CORPORATE»</span>
                </template>
                <template v-slot:period>
                  <div class="package__month">3 місяці</div>
                  <p class="package__custom-price">
                    <price article="ep-contr-agent_pp_action" :options="{periods: 3}" format="0"/>
                    грн
                  </p>
                </template>

                <template v-slot:gifts>
                  <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
                    Online-Семінар</a></li>
                  <li><a href="https://iglaz.ua/xiaomi-redmi-9a-2-32gb-granite-gray-eu/option/48272" target="_blank">Смартфон  </a> або <a href="https://www.citrus.ua/planshety/huawei-mediapad-t3-7-8gb-grey-615719.html" target="_blank">планшет</a></li>
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


          <h2 class="packages__title">{{ page.options['order_title-bottom']}}</h2>

          <landing-package-row class="package-two">
            <landing-package article="ep-contr-agent_ek">
              <template v-slot:title>
                <span>ТАРИФ<br>«START»</span>
              </template>
              <template v-slot:period>
                <div class="package__month">3 місяці</div>
                <p class="package__custom-price">
                  <price article="ep-contr-agent_ek" :options="{periods: 3}" format="0"/>
                  грн
                </p>
              </template>

              <template v-slot:gifts>
                <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
                  Online-Семінар</a></li>
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
                <div class="package__month">3 місяці</div>
                <p class="package__custom-price">
                  <price article="ep-contr-agent_cp_action2" :options="{periods: 3}" format="0"/>
                  грн
                </p>
              </template>

              <template v-slot:gifts>
                <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
                  Online-Семінар</a></li>
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
                <div class="package__month">3 місяці</div>
                <p class="package__custom-price">
                  <price article="ep-contr-agent_pr" :options="{periods: 3}" format="0"/>
                  грн
                </p>
              </template>

              <template v-slot:gifts>
                <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
                  Online-Семінар</a></li>
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

            <landing-package article="ep-contr-agent_pp">
              <template v-slot:title>
                <span>ТАРИФ<br>«CORPORATE»</span>
              </template>
              <template v-slot:period>
                <div class="package__month">3 місяці</div>
                <p class="package__custom-price">
                  <price article="ep-contr-agent_pp" :options="{periods: 3}" format="0"/>
                  грн
                </p>
              </template>

              <template v-slot:gifts>
                <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
                  Online-Семінар</a></li>
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
