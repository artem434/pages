<template>
    <landing name="buhzakon_december2019_3" advantages="epressa_add_buhzakon" class="landing-buhzakon_december2019_3">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_05_webp.webp')" type="image/webp">
                                <img :src="mix('images/head_05.jpg')" class="img-fluid" alt="coffe">
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
                <landing-package article="ep-buhzakon_1012">
                    <template v-slot:title>

                        <span > БУХГАЛТЕР&ЗАКОН<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">січень – червень  2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на <a href="https://7eminar.com/23012020" target="_blank">Великий Річний Семінар (23.01.2020)</a> </li>

                    </template>
                    <template v-slot:abilities>
                        <li>Щотижневе електронне видання</li>
                        <li>Аналітичні матеріали з практичними рекомендаціями експертів</li>
                        <li>Доступ до архівних випусків видання</li>
                        <li>Функція «Задати питання автору»</li>
                        <li>Безкоштовний доступ до «Право України» – унікальному рішенню для роботи з базою нормативних документів</li>
                    </template>
                    <template v-slot:old-price>

                        <div   class="package__old-price" style="text-decoration: line-through">3278 грн</div>
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