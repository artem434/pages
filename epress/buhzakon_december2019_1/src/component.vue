<template>
    <landing name="buhzakon_december2019_1" advantages="epressa_add_buhzakon" class="landing-buhzakon_december2019_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_02_webp.webp')" type="image/webp">
                                <img :src="mix('images/head_02.jpg')" class="img-fluid" alt="coffe">
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
                        <span>БУХГАЛТЕР&ЗАКОН <br> та подарунок</span>

                    </template>

                    <template v-slot:gifts>
                        <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щотижневе електронне видання</li>
                        <li>Аналітичні матеріали з практичними рекомендаціями експертів</li>
                        <li>Доступ до архівних випусків видання</li>
                        <li>Функція «Задати питання автору»</li>
                        <li>Безкоштовний доступ до «Право України» – унікальному рішенню для роботи з базою нормативних документів</li>
                    </template>
                    <template v-slot:old-price>

                        <div  class="package__old-price" style="text-decoration: line-through">330 грн/міс.</div>
                    </template>
                </landing-package>
            </landing-package-row>
           <!-- <landing-package-row v-show="tab ==='12'">
                <landing-package article="ep-buhzakon_2111_gi">
                    <template v-slot:title>БУХГАЛТЕР&ЗАКОН <br> та подарунки</template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li >сучасний <a href="https://consumer.huawei.com/ua/tablets/mediapad-t3-7/" target="_blank">планшет</a> або <a href="https://consumer.huawei.com/ua/phones/y5-2018/" target="_blank">смартфон</a></li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щотижневе електронне видання</li>
                        <li>Аналітичні матеріали з практичними рекомендаціями експертів</li>
                        <li>Доступ до архівних випусків видання</li>
                        <li>Функція «Задати питання автору»</li>
                        <li>Безкоштовний доступ до «Право України» – унікальному рішенню для роботи з базою нормативних документів</li>
                    </template>
                    <template v-slot:old-price>
                        <div class="package__old-price" style="text-decoration: line-through">8174 грн</div>
                    </template>
                </landing-package>
            </landing-package-row>-->
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