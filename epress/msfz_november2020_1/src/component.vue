<template>
    <landing name="msfz_november2020_1" advantages="epressa_add_interbuh" class="landing-msfz_november2020_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container">
                        <div class="cover">
                            <a class="d-none d-md-block" href="#gift">
                                <picture class="cover__img">
                                    <source :src="mix('images/msfz.webp')" type="image/webp">
                                    <img :src="mix('images/msfz-min.jpg')" class="img-fluid" alt="IB">
                                </picture>
                            </a>
                          <a class="d-block d-md-none" href="#gift">
                            <picture class="cover__img">
                              <source :src="mix('images/msfz-mob.webp')" type="image/webp">
                              <img :src="mix('images/msfz-min.jpg')" class="img-fluid" alt="IB">
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
                <landing-package article="ep-msfz_action">
                    <template v-slot:title>
                      <span>ПРАКТИКА МСФЗ <br>ТА ПОДАРУНКИ</span>
                    </template>
                    <template v-slot:period>
                        <div class="package__month">3 місяці</div>
                      <p class="package__custom-price">
                        <price article="ep-msfz_action" :options="{periods: 3}" format="0"/>
                        грн
                      </p>
                    </template>

                    <template v-slot:gifts>
                      <li ><a href="https://7eminar.com/msfz2020" target="_blank">Online-школа фінансів <br>
                        "МСФЗ. Легкий старт"</a></li>
                      <li><a href="https://rozetka.com.ua/special4you_e0949/p11117978/characteristics/" target="_blank">Офісне крісло</a></li>
                    </template>
                  <template v-slot:abilities>
                    <li>Щомісячне друковане видання</li>
                    <li>Електронна версія журналу</li>
                    <li>Мінус 50% на всі платні online-семінари Видавничої групи «АС»</li>
                  </template>
                </landing-package>

                <landing-package article="ep-msfz-liga_action" class="package__two ">
                        <template v-slot:title>
                          <span>Вісник МСФЗ <br>ТА ПОДАРУНКИ</span>
                        </template>
                            <template v-slot:period>
                              <div class="package__month">3 місяці</div>
                              <p class="package__custom-price">
                                <price article="ep-msfz-liga_action" :options="{periods: 3}" format="0"/>
                                грн
                              </p>
                            </template>
                        <template v-slot:gifts>
                          <li ><a href="https://7eminar.com/msfz2020" target="_blank">Online-школа фінансів <br>
                            "МСФЗ. Легкий старт"</a></li>
                          <li><a href="https://rozetka.com.ua/special4you_e0949/p11117978/characteristics/" target="_blank">Офісне крісло</a></li>
                        </template>
                        <template v-slot:abilities>

                          <div class="list">
                            <li>Електронне видання</li>
                            <li>Функція «Задати питання автору»</li>
                            <li>Доступ до накопиченого архіву видання</li>
                            <div v-if="show">
                              <li>Щоквартальна додаткова добірка ТОП-25 аналітичних матеріалів</li>
                              <li>Офіційні переклади документів Мінфіном</li>
                              <li>Гіперпосилання з матеріалів видання на документи й продукти ЛІГА:ЗАКОН</li>
                              <li>Практичні поради щодо застосування МСФЗ</li>
                            </div>
                            <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
                          </div>
                        </template>
                    </landing-package>
            </landing-package-row>


          <h2 class="packages__title">{{ page.options['order_title-bottom']}}</h2>
          <landing-package-row class="package-two">
            <landing-package article="ep-msfz">
              <template v-slot:title>
                <span>ПРАКТИКА МСФЗ <br>ТА ПОДАРУНок</span>
              </template>
              <template v-slot:period>
                <div class="package__month">3 місяці</div>
                <p class="package__custom-price">
                  <price article="ep-msfz" :options="{periods: 3}" format="0"/>
                  грн
                </p>
              </template>

              <template v-slot:gifts>
                <li ><a href="https://7eminar.com/msfz2020" target="_blank">Online-школа фінансів <br>
                  "МСФЗ. Легкий старт"</a></li>
              </template>
              <template v-slot:abilities>
                <li>Щомісячне друковане видання</li>
                <li>Електронна версія журналу</li>
                <li>Мінус 50% на всі платні online-семінари Видавничої групи «АС»</li>
              </template>
            </landing-package>

            <landing-package article="ep-msfz-liga" class="package__two">
              <template v-slot:title>
                <span>Вісник МСФЗ <br> ТА ПОДАРУНок</span>
              </template>
              <template v-slot:period>
                <div class="package__month">3 місяці</div>
                <p class="package__custom-price">
                  <price article="ep-msfz-liga" :options="{periods: 3}" format="0"/>
                  грн
                </p>
              </template>
              <template v-slot:gifts>
                <li ><a href="https://7eminar.com/msfz2020" target="_blank">Online-школа фінансів <br>
                  "МСФЗ. Легкий старт"</a></li>
              </template>
              <template v-slot:abilities>

                <div class="list">
                  <li>Електронне видання</li>
                  <li>Функція «Задати питання автору»</li>
                  <li>Доступ до накопиченого архіву видання</li>
                  <div v-if="show">
                    <li>Щоквартальна додаткова добірка ТОП-25 аналітичних матеріалів</li>
                    <li>Офіційні переклади документів Мінфіном</li>
                    <li>Гіперпосилання з матеріалів видання на документи й продукти ЛІГА:ЗАКОН</li>
                    <li>Практичні поради щодо застосування МСФЗ</li>
                  </div>
                  <p class="package__list-show" @click="show = !show">{{ btnText }}</p>
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
