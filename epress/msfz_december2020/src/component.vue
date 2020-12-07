<template>
    <landing name="msfz_december2020" advantages="epressa_add_december2020" class="landing-msfz_december2020">
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
                                    <source :src="mix('images/mf.webp')" type="image/webp">
                                    <img :src="mix('images/mf-min.jpg')" class="img-fluid" alt="IB">
                                </picture>
                            </a>
                          <a class="d-block d-md-none" href="#gift">
                            <picture class="cover__img">
                              <source :src="mix('images/320_mf.webp')" type="image/webp">
                              <img :src="mix('images/320_mf-min.jpg')" class="img-fluid" alt="IB">
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

                <landing-package article="ep-msfz">
                <template v-slot:title>
                  <span>ПРАКТИКА МСФЗ <br>ТА ПОДАРУНОК</span>
                </template>
                <template v-slot:period>
                  <div class="package__month">3 місяці</div>
                  <p class="package__custom-price">
                    <price article="ep-msfz" :options="{periods: 3}" format="0"/>
                    грн
                  </p>
                </template>

                <template v-slot:gifts>
                  <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
                    Online-Семінар</a></li>
                  <li class="no-active">Смартфон або планшет</li>
                </template>
                <template v-slot:abilities>
                  <li>Щомісячне друковане видання</li>
                  <li>Електронна версія журналу</li>
                  <li>Мінус 50% на всі платні online-семінари Видавничої групи «АС»</li>
                </template>
              </landing-package>
                <landing-package article="ep-msfz_action1" class="package__two package__plus-top">
                    <template v-slot:title>
                      <span>ПРАКТИКА МСФЗ <br>ТА ПОДАРУНКИ</span>
                    </template>
                    <template v-slot:period>
                        <div class="package__month">3 місяці</div>
                      <p class="package__custom-price">
                        <price article="ep-msfz_action1" :options="{periods: 3}" format="0"/>
                        грн
                      </p>
                    </template>

                    <template v-slot:gifts>
                      <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>
                        Online-Семінар</a></li>
                      <li><a href="https://iglaz.ua/xiaomi-redmi-9a-2-32gb-granite-gray-eu/option/48272" target="_blank">Смартфон  </a> або <a href="https://www.citrus.ua/planshety/huawei-mediapad-t3-7-8gb-grey-615719.html" target="_blank">планшет</a></li>
                    </template>
                  <template v-slot:abilities>
                    <li>Щомісячне друковане видання</li>
                    <li>Електронна версія журналу</li>
                    <li>Мінус 50% на всі платні online-семінари Видавничої групи «АС»</li>
                  </template>
                </landing-package>


                <landing-package article="ep-msfz-liga">
                <template v-slot:title>
                  <span>Вісник МСФЗ <br>ТА ПОДАРУНОК</span>
                </template>
                <template v-slot:period>
                  <div class="package__month">3 місяці</div>
                  <p class="package__custom-price">
                    <price article="ep-msfz-liga" :options="{periods: 3}" format="0"/>
                    грн
                  </p>
                </template>
                <template v-slot:gifts>
                  <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>Online-Семінар</a></li>
                  <li class="no-active">Смартфон або планшет</li>
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
                <landing-package article="ep-msfz-liga_action" class="package__two package__plus-top">
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
                          <li ><a href="https://7eminar.com/10122020" target="_blank">Великий Бухгалтерський <br>Online-Семінар</a></li>
                          <li><a href="https://iglaz.ua/xiaomi-redmi-9a-2-32gb-granite-gray-eu/option/48272" target="_blank">Смартфон  </a> або <a href="https://www.citrus.ua/planshety/huawei-mediapad-t3-7-8gb-grey-615719.html" target="_blank">планшет</a></li>
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
