<template>
    <landing name="msfz_march2020_1" advantages="epressa_add_msfz" class="landing-msfz_march2020_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_pMSFZ.webp')" type="image/webp">
                                <img :src="mix('images/head_pMSFZ.jpg')" class="img-fluid" alt="PMSFZ">
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

        <template v-slot:packages_list>
            <landing-package-row>
                <landing-package article="ep-msfz_action"  class="packages__column--one">
                        <template v-slot:title>
                            <span>ПРАКТИКА МСФЗ<br>та 2 подарунки</span>
                        </template>
                    <template v-slot:gifts>
                        <li >Відеокурс «Виробництво та собівартість в 1С»</li>
                        <li  ><a href="https://rozetka.com.ua/193208401/p193208401/" target="_blank">Столик для ноутбука</a></li>
                    </template>
                        <template v-slot:abilities>
                            <li>Щомісячне друковане видання</li>
                            <li>Електронна версія журналу</li>
                            <li>Мінус 50% на всі платні online-семінари Видавничої групи «АС»</li>
                        </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">801  грн/міс.</div>
                    </template>
                </landing-package>

                <landing-package article="ep-msfz">
                    <template v-slot:title>
                        <span>ПРАКТИКА МСФЗ<br>та подарунки</span>
                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс «Виробництво та собівартість в 1С»</li>
                        <li class="no-active" >Столик для ноутбука</li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щомісячне друковане видання</li>
                        <li>Електронна версія журналу</li>
                        <li>Мінус 50% на всі платні online-семінари Видавничої групи «АС»</li>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">714 грн/міс.</div>
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