<template>
    <landing name="msfz-liga_december2019_3" advantages="epressa_add_msfz-liga" class="landing-msfz-liga_december2019_3">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_06_webp.webp')" type="image/webp">
                                <img :src="mix('images/head_06.jpg')" class="img-fluid" alt="coffe">
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
            <landing-package-row >
                <landing-package article="ep-msfz-liga_1012">
                    <template v-slot:title>

                        <span>Вісник МСФЗ<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">січень – червень  2020</div> </template>
                    <template v-slot:gifts>
                        <li>відеокурс <a href="https://7eminar.com/prybutok_msfz2019" target="_blank"> «Податок на прибуток та МСФЗ»</a> </li>
                    </template>
                    <template v-slot:abilities>
                        <li>Електронне видання</li>
                        <li>Функція «Задати питання автору»</li>
                        <li>Доступ до накопиченого архіву видання</li>
                        <li>Щоквартальна додаткова добірка ТОП-25 аналітичних матеріалів</li>
                        <li>Гіперпосилання з матеріалів видання на документи й продукти ЛІГА:ЗАКОН</li>
                        <li>«Довідник МСФЗ»</li>
                    </template>
                    <template v-slot:old-price>

                        <div   class="package__old-price" style="text-decoration: line-through">4058 грн</div>
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