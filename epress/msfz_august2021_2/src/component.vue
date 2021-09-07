<template>
  <landing name="msfz_december2020" advantages="epressa_add_interbuh" class="landing-msfz_august2021_2">
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
            <p class="hero__description">Передплачуйте електронне видання <br>
              <b>«Вісник МСФЗ»</b> або журнал <b>«Практика МСФЗ»</b> <br> та оберіть у подарунок
              <span><b>смартфон або планшет</b></span>!</p>
            <p class="hero__btn">
              <a href="#gift" class="btn">Хочу</a>
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
        <h2 class="landing-title"><span>{{ page.options['order_title'] }}</span></h2>
        <p class="landing-section__action">{{ page.options['order_subtitle'] }} </p>
      </div>
    </template>
    <template v-slot:packages_list>
      <h2 id="gift" class="packages__title">{{ page.options['order_title-top'] }}</h2>
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


            <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному
              Семінарі</a></li>
            <li class="no-active">Смартфон або планшет<br> на вибір</li>
            <div class="btn-body">
              <a href="/order?article=ep-msfz&amp;options%5Bperiods%5D=12"
                 class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
            </div>
          </template>
          <template v-slot:abilities>
            <li>Щомісячне друковане видання</li>
            <li>Електронна версія журналу</li>
            <li>Мінус 50% на всі платні online-семінари Видавничої групи «АС»</li>
            <div class="package__footer package__footer--top" style="padding-top: 80px;">
              <a href="/order?article=ep-msfz&amp;options%5Bperiods%5D=12"
                 class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
            </div>
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
            <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному
              Семінарі</a></li>
            <li><a href="https://rozetka.com.ua/ua/xiaomi_redmi_9a_2_32gb_granite_gray_m2006c3lg/p232347079/"
                   target="_blank">Смартфон</a> або <a href="https://rozetka.com.ua/ua/18012107/g18012107/"
                                                       target="_blank">планшет</a><br> на вибір
            </li>
            <div class="btn-body">
              <a href="/order?article=ep-msfz_action&amp;options%5Bperiods%5D=12"
                 class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
            </div>
          </template>
          <template v-slot:abilities>
            <li>Щомісячне друковане видання</li>
            <li>Електронна версія журналу</li>
            <li>Мінус 50% на всі платні online-семінари Видавничої групи «АС»</li>
            <div class="package__footer package__footer--top" style="padding-top: 80px;">
              <a href="/order?article=ep-msfz_action&amp;options%5Bperiods%5D=12"
                 class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
            </div>
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
            <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному
              Семінарі</a></li>
            <li class="no-active">Смартфон або планшет <br> на вибір</li>
            <div class="btn-body">
              <a href="/order?article=ep-msfz-liga&amp;options%5Bperiods%5D=12"
                 class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
            </div>
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
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-msfz-liga&amp;options%5Bperiods%5D=12"
                   class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
              </div>
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
            <li> Квиток на участь у <a href="https://7eminar.ua/06102021" target="_blank">Великому Квартальному
              Семінарі</a></li>
            <li><a href="https://rozetka.com.ua/ua/xiaomi_redmi_9a_2_32gb_granite_gray_m2006c3lg/p232347079/"
                   target="_blank">Смартфон</a> або <a href="https://rozetka.com.ua/ua/18012107/g18012107/"
                                                       target="_blank">планшет</a><br> на вибір
            </li>
            <div class="btn-body">
              <a href="/order?article=ep-msfz-liga_action&amp;options%5Bperiods%5D=12"
                 class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Замовити</a>
            </div>
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
              <div class="package__footer package__footer--top">
                <a href="/order?article=ep-msfz-liga_action&amp;options%5Bperiods%5D=12"
                   class="btn btn-package  btn-arrow btn-package--eight" target="_blank">Беру!</a>
              </div>
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

    btnText: function () {
      if (this.show) {
        return 'Приховати'
      }

      return 'А ще входить...'
    }
  },
  data: () => ({
    show: false,
  })

}
</script>
