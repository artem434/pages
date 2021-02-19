<template>
    <landing name="msfz_december2020" advantages="epressa_add_interbuh" class="landing-msfz_february2021_2">
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
                              <source :src="mix('images/msfz_mob.webp')" type="image/webp">
                              <img :src="mix('images/msfz__mob-min.jpg')" class="img-fluid" alt="IB">
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

                  <p class="package__custom-price">
                    <price article="ep-msfz" :options="{periods: 1}" format="0"/>
                    <b>грн/міс.</b>
                  </p>
                </template>

                <template v-slot:gifts>
                  <li ><a href="https://7eminar.com/25032021" target="_blank">Великий Квартальний Семінар онлайн</a></li>
                  <li><h5 class="package__presents-title">Оберіть подарунок:</h5></li>
                  <li class="no-active" >Мультиварка PHILIPS</li>
                  <li class="no-active">Мікрохвильова піч LG</li>
                  <li class="no-active">М'ясорубка Moulinex</li>
                </template>
                <template v-slot:abilities>
                  <li>Щомісячне друковане видання</li>
                  <li>Електронна версія журналу</li>
                  <li>Мінус 50% на всі платні online-семінари Видавничої групи «АС»</li>
                </template>
              </landing-package>
                <landing-package article="ep-msfz_action" class="package__three package__plus-top">
                    <template v-slot:title>
                      <span>ПРАКТИКА МСФЗ <br>ТА ПОДАРУНКИ</span>
                    </template>
                    <template v-slot:period>

                      <p class="package__custom-price">
                        <price article="ep-msfz_action" :options="{periods: 1}" format="0"/>
                        <b>грн/міс.</b>
                      </p>
                    </template>

                  <template v-slot:gifts>
                    <li ><a href="https://7eminar.com/25032021" target="_blank">Великий Квартальний Семінар онлайн</a></li>
                    <li><h5 class="package__presents-title">Оберіть подарунок:</h5></li>
                    <li><a href="https://bt.rozetka.com.ua/ua/2212447/p2212447/" target="_blank">Мультиварка PHILIPS</a></li>
                    <li><a href="https://bt.rozetka.com.ua/ua/lg_ms_2042dy/p302793/" target="_blank">Мікрохвильова піч LG</a></li>
                    <li><a href="https://bt.rozetka.com.ua/ua/moulinex_me108832/p45620344/" target="_blank">М'ясорубка Moulinex</a></li>
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

                  <p class="package__custom-price">
                    <price article="ep-msfz-liga" :options="{periods: 1}" format="0"/>
                    <b>грн/міс.</b>
                  </p>
                </template>
                <template v-slot:gifts>
                  <li ><a href="https://7eminar.com/25032021" target="_blank">Великий Квартальний Семінар онлайн</a></li>
                  <li><h5 class="package__presents-title">Оберіть подарунок:</h5></li>
                  <li class="no-active" >Мультиварка PHILIPS</li>
                  <li class="no-active">Мікрохвильова піч LG</li>
                  <li class="no-active">М'ясорубка Moulinex</li>
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
                <landing-package article="ep-msfz-liga_action" class="package__three package__plus-top">
                        <template v-slot:title>
                          <span>Вісник МСФЗ <br>ТА ПОДАРУНКИ</span>
                        </template>
                            <template v-slot:period>

                              <p class="package__custom-price">
                                <price article="ep-msfz-liga_action" :options="{periods: 1}" format="0"/>
                                <b>грн/міс.</b>
                              </p>
                            </template>
                        <template v-slot:gifts>
                          <li ><a href="https://7eminar.com/25032021" target="_blank">Великий Квартальний Семінар онлайн</a></li>
                          <li><h5 class="package__presents-title">Оберіть подарунок:</h5></li>
                          <li><a href="https://bt.rozetka.com.ua/ua/2212447/p2212447/" target="_blank">Мультиварка PHILIPS</a></li>
                          <li><a href="https://bt.rozetka.com.ua/ua/lg_ms_2042dy/p302793/" target="_blank">Мікрохвильова піч LG</a></li>
                          <li><a href="https://bt.rozetka.com.ua/ua/moulinex_me108832/p45620344/" target="_blank">М'ясорубка Moulinex</a></li>
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
