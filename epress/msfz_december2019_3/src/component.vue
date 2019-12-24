<template>
    <landing name="msfz_december2019_3" advantages="epressa_add_msfz" class="landing-msfz_december2019_3">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_03_webp.webp')" type="image/webp">
                                <img :src="mix('images/head_03.jpg')" class="img-fluid" alt="coffe">
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

        <template v-slot:packages_list>
            <landing-package-row>
                <landing-package article="ep-msfz_1312">
                        <template v-slot:title>

                            <span>ПРАКТИКА МСФЗ<br>та подарунки</span>
                        </template>
                        <template v-slot:period><div class="period">січень – червень 2020</div> </template>
                        <template v-slot:gifts>
                            <li>відеокурс <a href="https://7eminar.com/prybutok_msfz2019" target="_blank"> «Податок на прибуток та МСФЗ»</a> </li>
                            <li><a href="https://www.club-cdma.com.ua/power-bank-remax-lipmax-rpl-12-2400-mah/" target="_blank">powerbank</a> для леді</li>
                    </template>
                        <template v-slot:abilities>
                            <li>Щомісячне друковане видання</li>
                            <li>Електронна версія журналу</li>
                            <li>Мінус 50% на всі платні online-семінари Видавничої групи «АС»</li>
                        </template>
                    <template v-slot:old-price>
                        <div   class="package__old-price" style="text-decoration: line-through">5408 грн</div>
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

}
</script>