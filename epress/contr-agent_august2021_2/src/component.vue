<template>
    <landing name="contr-agent_december2020" advantages="epressa_add_interbuh" class="landing-contr-agent_august2021_2">
      <template v-slot:cover>
        <div class="hero">
          <div class="container">
            <div class="hero__bg">
              <picture class="cover__img d-none d-md-block">
                <source :src="mix('images/bg.webp')" type="image/webp">
                <img :src="mix('images/bg.png')" class="img-fluid" alt="dk">
              </picture>

              <picture class="cover__img d-block d-md-none">
                <source :src="mix('images/bg-sm.webp')" type="image/webp">
                <img :src="mix('images/bg-sm.png')" class="img-fluid" alt="dk">
              </picture>
            </div>
            <div class="hero__content">
<!--              <div class="hero__logo">
                <picture>
                  <img :src="mix('images/epresa_white.png')" class="epresa" alt="dk">
                </picture>
                <picture>
                  <img :src="mix('images/DTKT.UA_LOGO.png')" class="DTKT" alt="dk">
                </picture>
              </div>-->

              <p class="hero__title">Зробіть собі</p>
              <p class="hero__subtitle">подарунок!</p>
              <p class="hero__description">Передплачуйте аналітичну систему <br>
                <b>«CONTR AGENT»</b> та оберіть у подарунок <br>
                <span><b>смартфон або планшет</b></span>!</p>
              <p class="hero__btn">
                <a href="#gift" class="btn">ХОЧУ!</a>
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
<!--              <div class="package__month">3 місяці</div>-->
              <p class="package__custom-price">
                <price article="ep-contr-agent_ek_action" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>

            <template v-slot:gifts>
              <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному
                Семінарі</a></li>
              <li><a href="https://rozetka.com.ua/ua/xiaomi_redmi_9a_2_32gb_granite_gray_m2006c3lg/p232347079/"
                     target="_blank">Смартфон</a> або <a href="https://rozetka.com.ua/ua/18012107/g18012107/"
                                                         target="_blank">планшет</a><br> на вибір
              </li>
              <div class="btn-body">
                <a href="/order?article=ep-contr-agent_ek_action&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
              </div>
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
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-contr-agent_ek_action&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
              </div>
            </template>
          </landing-package>

          <landing-package article="ep-contr-agent_cp_action">
            <template v-slot:title>
              <span>ТАРИФ<br>«OPTIMUM»</span>
            </template>
            <template v-slot:period>
<!--              <div class="package__month">3 місяці</div>-->
              <p class="package__custom-price">
                <price article="ep-contr-agent_cp_action" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>

            <template v-slot:gifts>
              <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному
                Семінарі</a></li>
              <li><a href="https://rozetka.com.ua/ua/xiaomi_redmi_9a_2_32gb_granite_gray_m2006c3lg/p232347079/"
                     target="_blank">Смартфон</a> або <a href="https://rozetka.com.ua/ua/18012107/g18012107/"
                                                         target="_blank">планшет</a><br> на вибір
              </li>
              <div class="btn-body">
                <a href="/order?article=ep-contr-agent_cp_action&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
              </div>
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
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-contr-agent_cp_action&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
              </div>
            </template>
          </landing-package>

          <landing-package article="ep-contr-agent_pr_action">
            <template v-slot:title>
              <span>ТАРИФ<br>«PREMIUM»</span>
            </template>
            <template v-slot:period>

              <p class="package__custom-price">
                <price article="ep-contr-agent_pr_action" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>


            <template v-slot:gifts>
              <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному
                Семінарі</a></li>
              <li><a href="https://rozetka.com.ua/ua/xiaomi_redmi_9a_2_32gb_granite_gray_m2006c3lg/p232347079/"
                     target="_blank">Смартфон</a> або <a href="https://rozetka.com.ua/ua/18012107/g18012107/"
                                                         target="_blank">планшет</a><br> на вибір
              </li>
              <div class="btn-body">
                <a href="/order?article=ep-contr-agent_pr_action&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
              </div>
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
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-contr-agent_pr_action&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
              </div>
            </template>
          </landing-package>

          <landing-package article="ep-contr-agent_pp_action" class="package__three package__plus-top">
            <template v-slot:title>
              <span>ТАРИФ<br>«CORPORATE»</span>
            </template>
            <template v-slot:period>

              <p class="package__custom-price">
                <price article="ep-contr-agent_pp_action" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>


            <template v-slot:gifts>
              <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному
                Семінарі</a></li>
              <li><a href="https://rozetka.com.ua/ua/xiaomi_redmi_9a_2_32gb_granite_gray_m2006c3lg/p232347079/"
                     target="_blank">Смартфон</a> або <a href="https://rozetka.com.ua/ua/18012107/g18012107/"
                                                         target="_blank">планшет</a><br> на вибір
              </li>
              <div class="btn-body">
                <a href="/order?article=ep-contr-agent_pp_action&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
              </div>
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
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-contr-agent_pp_action&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
              </div>
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

              <p class="package__custom-price">
                <price article="ep-contr-agent_ek" :options="{periods:1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>

            <template v-slot:gifts>
              <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному
                Семінарі</a></li>
              <div class="btn-body">
                <a href="/order?article=ep-contr-agent_ek&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
              </div>
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
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-contr-agent_ek&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
              </div>
            </template>
          </landing-package>

          <landing-package article="ep-contr-agent_cp_action2">
            <template v-slot:title>
              <span>ТАРИФ<br>«OPTIMUM»</span>
            </template>
            <template v-slot:period>

              <p class="package__custom-price">
                <price article="ep-contr-agent_cp_action2" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>

            <template v-slot:gifts>
              <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному
                Семінарі</a></li>
              <div class="btn-body">
                <a href="/order?article=ep-contr-agent_cp&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
              </div>
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
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-contr-agent_cp&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
              </div>
            </template>
          </landing-package>

          <landing-package article="ep-contr-agent_pr">
            <template v-slot:title>
              <span>ТАРИФ<br>«PREMIUM»</span>
            </template>
            <template v-slot:period>

              <p class="package__custom-price">
                <price article="ep-contr-agent_pr" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>

            <template v-slot:gifts>
              <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному
                Семінарі</a></li>
              <div class="btn-body">
                <a href="/order?article=ep-contr-agent_pr&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
              </div>
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
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-contr-agent_pr&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
              </div>

            </template>
          </landing-package>

          <landing-package article="ep-contr-agent_pp" class="package__three package__plus-top">
            <template v-slot:title>
              <span>ТАРИФ<br>«CORPORATE»</span>
            </template>
            <template v-slot:period>

              <p class="package__custom-price">
                <price article="ep-contr-agent_pp" :options="{periods: 1}" format="0"/>
                <b>грн/міс.</b>
              </p>
            </template>

            <template v-slot:gifts>
              <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному
                Семінарі</a></li>
              <div class="btn-body">
                <a href="/order?article=ep-contr-agent_pp&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
              </div>
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
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-contr-agent_pp&amp;options%5Bperiods%5D=12" class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
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
