<template>
    <landing name="msfz-liga_february2020_1" advantages="epressa_add_msfz-liga" class="landing-msfz-liga_february2020_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_00_V_MSFZ.webp')" type="image/webp">
                                <img :src="mix('images/head_00_V_MSFZ.jpg')" class="img-fluid" alt="MSFZ">
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
            <div class="tab-content"> <label class="label" :class="{active: tab ==='6'}" @click="tab = '6'">+ 1 подарунок </label> <label class="label" :class="{active: tab ==='12'}" @click="tab = '12'">+ 2 подарунки</label></div>
        </template>
        <template v-slot:packages_list>
            <landing-package-row >
                <landing-package :article="tab =='6' ?  'ep-msfz-liga_1312' : 'ep-msfz-liga_2801'">
                    <template v-slot:title>
                        <span v-if="tab =='6'">Вісник МСФЗ<br>та подарунок</span>
                        <span v-else>Вісник МСФЗ<br>та подарунки</span>
                    </template>
                    <template v-slot:period>
                        <div class="period">лютий 2020 - липень 2020</div>
                    </template>
                    <template v-slot:gifts>
                        <li > Податковий кодекс України (дата виходу – 31.03.2020, <br> з урахуванням усіх змін)</li>
                        <li v-if="tab =='6'"  class="no-active">Компактний електрогриль</li>
                        <li v-else >Компактний електрогриль</li>
                    </template>
                    <template v-slot:abilities>
                        <li>Електронне видання</li>
                        <li>Функція «Задати питання автору»</li>
                        <li>Доступ до накопиченого архіву видання</li>
                        <li>Щоквартальна додаткова добірка ТОП-25 аналітичних матеріалів</li>
                        <li>Офіційні переклади документів Мінфіном</li>
                        <li>Гіперпосилання з матеріалів видання на документи й продукти ЛІГА:ЗАКОН</li>
                        <li>Практичні поради щодо застосування МСФЗ</li>
                    </template>
                    <template v-slot:old-price>
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">3059 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">5859 грн</div>
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