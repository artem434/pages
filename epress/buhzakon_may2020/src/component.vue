<template>
    <landing name="buhzakon_april2020_1" advantages="epressa_add_buhzakon" class="landing-buhzakon_april2020_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_BiZ.webp')" type="image/webp">
                                <img :src="mix('images/head_BiZ.jpg')" class="img-fluid" alt="BZ">
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

            <p class="landing-section__action">{{ page.options['order_action']}} <br> <b>{{ page.options['order_action--bold']}}</b> </p>

        </template>
       <!-- <template v-slot:tab-radio>
            <div class="tab-content"> <label class="label" :class="{active: tab ==='6'}" @click="tab = '6'">+ 1 подарунок </label> <label class="label" :class="{active: tab ==='12'}" @click="tab = '12'">+ 2 подарунки </label></div>
        </template>-->
        <template v-slot:packages_list>
            <landing-package-row>
                <landing-package article="ep-buhzakon_action" class="packages__column--one">
                    <template v-slot:title>
                        <span > БУХГАЛТЕР&ЗАКОН<br> та 2 подарунки</span>
                    </template>
                    <template v-slot:period>
                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс «Виробництво та собівартість в 1С»</li>
                        <li  ><a href="https://rozetka.com.ua/193208401/p193208401/" target="_blank">Столик для ноутбука</a></li>
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
                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс "Виробництво та собівартість в 1С"</li>
                        <li  ><a href="https://rozetka.com.ua/193208401/p193208401/" target="_blank">Столик для ноутбука</a></li>
                    </template>
                    <template v-slot:old-price>
                        <div   class="package__old-price" style="text-decoration: line-through">534  грн/міс.</div>
                    </template>
                </landing-package>

                <landing-package article="ep-buhzakon">
                    <template v-slot:title>
                        <span > БУХГАЛТЕР&ЗАКОН<br>та подарунок</span>
                    </template>
                    <template v-slot:period>
                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс «Виробництво та собівартість в 1С»</li>
                        <li class="no-active" >Столик для ноутбука</li>
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
                    </template>
                    <template v-slot:old-price>
                        <div   class="package__old-price" style="text-decoration: line-through">359  грн/міс.</div>
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