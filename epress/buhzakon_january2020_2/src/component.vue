<template>
    <landing name="buhzakon_january2020_2" advantages="epressa_add_buhzakon" class="landing-buhzakon_january2020_2">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_000_BZ.jpg')" type="image/webp">
                                <img :src="mix('images/head_000_BZ.webp')" class="img-fluid" alt="BZ">
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
                <landing-package :article="tab =='6' ?  'ep-buhzakon_1312' : 'ep-buhzakon_2801'">
                    <template v-slot:title>
                        <span  v-if="tab =='6'"> БУХГАЛТЕР&ЗАКОН<br>та подарунок</span>
                        <span v-else> БУХГАЛТЕР&ЗАКОН<br>та подарунки</span>
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
                        <li>Електронне видання</li>
                        <li>Консультації для передплатників</li>
                        <li>Аналітичні матеріали з практичними рекомендаціями експертів</li>
                        <li>Доступ до архівних випусків видання</li>
                        <li>Все про РРО, ЄСВ, ПДВ тощо з аналітикою та порадами експертів</li>
                        <li>Інформація для будь-якого напряму та масштабу бізнесу</li>
                        <li>Доступ до нормативно-правової, консультаційної та аналітичної інформації ЛІГА:ЗАКОН</li>


                    </template>
                    <template v-slot:old-price>
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">3278 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">4678 грн</div>
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