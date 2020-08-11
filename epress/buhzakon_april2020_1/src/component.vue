<template>
    <landing name="buhzakon_march2020_2" advantages="epressa_add_buhzakon" class="landing-buhzakon_march2020_2">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_033.webp')" type="image/webp">
                                <img :src="mix('images/head_033.jpg')" class="img-fluid" alt="BZ">
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

            <p class="landing-section__action">{{ page.options['order_action']}} <b> {{ page.options['order_action--bold']}}</b> </p>

        </template>
       <!-- <template v-slot:tab-radio>
            <div class="tab-content"> <label class="label" :class="{active: tab ==='6'}" @click="tab = '6'">+ 1 подарунок </label> <label class="label" :class="{active: tab ==='12'}" @click="tab = '12'">+ 2 подарунки </label></div>
        </template>-->
        <template v-slot:packages_list>
            <landing-package-row>
                <landing-package article="ep-buhzakon_action">
                    <template v-slot:title>
                        <span > БУХГАЛТЕР&ЗАКОН<br>та подарунок</span>
                    </template>
                    <template v-slot:period>
                        <div class="period">квітень - вересень 2020</div>
                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс «ЗП в 1С»</li>
                        <p class="package__btn">
                            <router-link :to="`/order?article=ep-buhzakon_action&options[periods]=6`" class="btn btn-package btn-package--card"
                                         target="_blank">оплатити карткою
                            </router-link>
                            <router-link :to="`/order?article=ep-buhzakon&options[periods]=6`" class="btn btn-package btn-package--order-mob"
                                         target="_blank">отримати рахунок
                            </router-link>
                        </p>

                    </template>
                    <template v-slot:abilities>

                            <li>Електронне видання</li>
                            <li>Консультації для передплатників</li>
                            <li>Аналітичні матеріали з практичними рекомендаціями експертів</li>
                            <div v-if="show">
                                <li>Доступ до архівних випусків видання</li>
                                <li>Все про РРО, ЄСВ, ПДВ тощо з аналітикою та порадами експертів</li>
                                <li>Інформація для будь-якого напряму та масштабу бізнесу</li>
                                <li>Доступ до нормативно-правової, консультаційної та аналітичної інформації ЛІГА:ЗАКОН</li>
                            </div>
                             <p class="packages__list-show" @click="show = !show">{{ btnText }}</p>
                        <router-link :to="`/order?article=ep-buhzakon&options[periods]=6`" class="btn btn-package btn-package--order"
                                     target="_blank">отримати рахунок
                        </router-link>
                    </template>
                    <template v-slot:old-price>
                        <div   class="package__old-price" style="text-decoration: line-through">3079 грн</div>

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