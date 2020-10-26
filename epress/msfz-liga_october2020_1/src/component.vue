<template>
    <landing name="msfz-liga_october2020_1" advantages="epressa_add_interbuh" class="landing-msfz-liga_october2020_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container">
                        <div class="cover">
                          <a class="d-none d-md-block" href="#gift">
                            <picture class="cover__img">
                              <source :src="mix('images/msfz-liga.webp')" type="image/webp">
                              <img :src="mix('images/msfz-liga-min.jpg')" class="img-fluid" alt="IB">
                            </picture>
                          </a>
                          <a class="d-block d-md-none" href="#gift">
                            <picture class="cover__img">
                              <source :src="mix('images/320_msfz-liga.webp')" type="image/webp">
                              <img :src="mix('images/320_msfz-liga-min.jpg')" class="img-fluid" alt="IB">
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
        <!--  <h2  id="gift" class="packages__title">{{ page.options['order_title-top']}}</h2>-->
            <landing-package-row id="gift">
                <landing-package article="ep-msfz-liga">
                    <template v-slot:title>
                      <span>вісник мсфз</span>
                    </template>
                    <template v-slot:period>
                        <div class="package__month">3 місяці</div>
                      <p class="package__custom-price">
                        <price article="ep-msfz-liga" :options="{periods: 3}" format="0"/>
                        грн
                      </p>
                    </template>

                    <template v-slot:gifts>
                      <li >Відеокурс <br> <a href="https://7eminar.com/pdv2020" target="_blank"> «ПДВ: облік без штрафів»</a> </li>
                      <li class="no-active">Кавомашина еспресо VITEK VT-1514 BK</li>
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

                <landing-package article="ep-msfz-liga_action1" class="package__two">
                        <template v-slot:title>
                          <span>Вісник МСФЗ <br>+кавомашина</span>
                        </template>
                            <template v-slot:period>
                              <div class="package__month">3 місяці</div>
                              <p class="package__custom-price">
                                <price article="ep-msfz-liga_action1" :options="{periods: 3}" format="0"/>
                                грн
                              </p>
                            </template>
                        <template v-slot:gifts>
                          <li >Відеокурс <br> <a href="https://7eminar.com/pdv2020" target="_blank"> «ПДВ: облік без штрафів»</a> </li>
                          <li><a href="https://bt.rozetka.com.ua/vitek-vt-1514-bk/p303286/" target="_blank">Кавомашина еспресо VITEK VT-1514 BK</a></li>
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
