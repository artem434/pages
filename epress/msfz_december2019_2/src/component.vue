<template>
    <landing name="msfz_december2019_2" advantages="epressa_add_msfz" class="landing-msfz_december2019_2">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/new_year_5.webp')" type="image/webp">
                                <img :src="mix('images/new_year_5.jpg')" class="img-fluid" alt="coffe">
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
                <landing-package :article="tab =='6' ?  'ep-msfz_1312' : 'ep-msfz_1312_p'">
                        <template v-slot:title>
                            <span v-if="tab =='6'">ПРАКТИКА МСФЗ <br> та подарунок</span>
                            <span v-else>ПРАКТИКА МСФЗ<br>та подарунки</span>
                        </template>
                        <template v-slot:period><div class="period">січень – червень 2020</div> </template>
                        <template v-slot:gifts>
                            <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
                            <li :class="{'no-active' : tab =='6' }"><a href="https://www.youtube.com/watch?v=CETG9ts_fmk&feature=" target="_blank">робот-пилосос для сухого <br> та вологого прибирання</a></li>
                    </template>
                        <template v-slot:abilities>
                            <li>Щомісячне друковане видання</li>
                            <li>Електронна версія журналу</li>
                            <li>Мінус 50% на всі платні online-семінари Видавничої групи «АС»</li>
                        </template>
                    <template v-slot:old-price>
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">5408 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">9407 грн</div>
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