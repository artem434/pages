<template>
    <landing name="msfz_january2020_2" advantages="epressa_add_msfz" class="landing-msfz_january2020_2">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                      <div class="cover">
                        <a class="d-none d-md-block" href="#gift">
                          <picture class="cover__img">
                            <source :src="mix('images/03_msfz.webp')" type="image/webp">
                            <img :src="mix('images/03_msfz-min.jpg')" class="img-fluid" alt="IB">
                          </picture>
                        </a>
                        <a class="d-block d-md-none" href="#gift">
                          <picture class="cover__img">
                            <source :src="mix('images/03_msfz_mob.webp')" type="image/webp">
                            <img :src="mix('images/03_msfz_mob-min.jpg')" class="img-fluid" alt="IB">
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
                <h2 class="landing-title landing-title--columns"><span>{{ page.options['order_title']}}</span></h2>
            </div>
        </template>
        <template v-slot:action-due>
            <p class="landing-section__action">{{ page.options['order_action']}}</p>
        </template>
        <template v-slot:tab-radio>
            <div class="tab-content"> <label class="label" :class="{active: tab ==='6'}" @click="tab = '6'">+ 1 подарунок </label> <label class="label" :class="{active: tab ==='12'}" @click="tab = '12'">+ 2 подарунки </label></div>
        </template>
        <template v-slot:packages_list>
            <landing-package-row>
                <landing-package :article="tab =='6' ?  'ep-msfz_1312' : 'ep-msfz_2801'">
                        <template v-slot:title>
                            <span v-if="tab =='6'">ПРАКТИКА МСФЗ<br>та подарунок</span>
                            <span v-else>ПРАКТИКА МСФЗ<br>та подарунки</span>
                        </template>
                    <template v-slot:period>
                        <div class="period">лютий - липень 2020 року</div>
                    </template>
                    <template v-slot:gifts>
                        <li > Відеозапис <br> <a href="https://7eminar.com/29012020" target="_blank">ФОП-2020: співпраця, нові ліміти, фінмоніторинг та PPO</a> </li>
                        <li v-if="tab =='6'"  class="no-active">Міксер   ARITA <br> з турборежимом</li>
                        <li v-else > <a href="https://www.youtube.com/watch?v=XVsQidseEXw" target="_blank"> Міксер ARITA </a><br>з турборежимом </li>
                    </template>
                        <template v-slot:abilities>
                            <li>Щомісячне друковане видання</li>
                            <li>Електронна версія журналу</li>
                            <li>Мінус 50% на всі платні online-семінари Видавничої групи «АС»</li>
                        </template>
                    <template v-slot:old-price>
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">5408 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">6808 грн</div>
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
    data:()=>({
        tab: '12'
    })
}
</script>