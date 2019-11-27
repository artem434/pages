<template>
    <landing name="buhzakon_november2019_3" advantages="epressa_add_buhzakon" class="landing-buhzakon_november2019_3">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_03_biz_webp.webp')" type="image/webp">
                                <img :src="mix('images/head_03_biz.jpg')" class="img-fluid" alt="coffe">
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
                <landing-package :article="tab =='6' ?  'ep-buhzakon_2111' : 'ep-bzakon_2711_g'">
                    <template v-slot:title>
                        <span v-if="tab =='6'">БУХГАЛТЕР&ЗАКОН <br> та подарунок</span>
                        <span v-else> БУХГАЛТЕР&ЗАКОН<br>та подарунки</span>
                    </template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
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
                        <li>Щотижневе електронне видання</li>
                        <li>Аналітичні матеріали з практичними рекомендаціями експертів</li>
                        <li>Доступ до архівних випусків видання</li>
                        <li>Функція «Задати питання автору»</li>
                        <li>Безкоштовний доступ до «Право України» – унікальному рішенню для роботи з базою нормативних документів</li>
                    </template>
                    <template v-slot:old-price>
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">2478 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">4178 грн</div>
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