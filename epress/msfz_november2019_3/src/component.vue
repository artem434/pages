<template>
    <landing name="msfz_november2019_3" advantages="epressa_add_msfz" class="landing-msfz_november2019_3">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_03_pmsfz_webp.webp')" type="image/webp">
                                <img :src="mix('images/head_03_pmsfz.jpg')" class="img-fluid" alt="coffe">
                            </picture>
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
                <landing-package :article="tab =='6' ?  'ep-msfz_2111' : 'ep- msfz_2711_g'">
                        <template v-slot:title>
                            <span v-if="tab =='6'">ПРАКТИКА МСФЗ <br> та подарунок</span>
                            <span v-else>ПРАКТИКА МСФЗ<br>та подарунки</span>
                        </template>
                        <template v-slot:period><div class="period">січень – червень 2020</div> </template>
                        <template v-slot:gifts>
                        <li>відеозапис<br> <a href="https://7eminar.com/06112019" target="_blank">Великого Семінару із Заробітної Плати</a></li>
                        <li :class="{'no-active' : tab =='6' }">сертифікат номіналом <br>
                            1000 грн на вибір:
                            <ul class="package__presents-sub-list">
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Розетка</span>
                                </li>
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Brocard</span>
                                </li>
                                <li :class="{'no-active' : tab =='6' }">
                                    <span>Будинок іграшок</span>
                                </li>
                            </ul>
                        </li>
                    </template>
                        <template v-slot:abilities>
                            <li>Щомісячне друковане видання</li>
                            <li>Електронна версія журналу</li>
                            <li>Мінус 50% на всі платні online-семінари Видавничої групи «АС»</li>
                        </template>
                    <template v-slot:old-price>
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">4608 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">6308 грн</div>
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