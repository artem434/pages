<template>
    <landing name="contr-agent_february2020_2" advantages="epressa_add_contr-agent" class="landing-contr-agent_february2020_2">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head4.webp')" type="image/webp">
                                <img :src="mix('images/head4.jpg')" class="img-fluid" alt="">
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
                <landing-package :article="tab =='6' ?  'ep-contr-a_ek_1312' : 'ep-contr-a_ek_2801'" class="packages__column--one">
                    <template v-slot:title>
                        <span v-if="tab =='6'">ТАРИФ<br>«START» <br>та подарунок</span>
                        <span v-else>ТАРИФ<br>«START»<br>та подарунки</span>
                    </template>
                    <template v-slot:period>
                        <div class="period">лютий 2020 - липень 2020</div>
                    </template>
                    <template v-slot:gifts>
                        <li > Податковий кодекс України (дата виходу – 31.03.2020, <br> з урахуванням усіх змін)</li>
                        <li v-if="tab =='6'"  class="no-active">Потужна електром'ясорубка</li>
                        <li v-else >Потужна електром'ясорубка</li>
                    </template>
                        <template v-slot:abilities>
                            <li>До 50 об'єктів моніторингу</li>
                            <li>250 переглядів карточок</li>
                            <li>Користувачі 1</li>
                            <li>Повне досьє</li>
                            <li>Історія змін в ЄДР</li>
                            <li>Афілійовані зв’язки</li>
                            <li>Публічні кошти і держзакупівлі </li>
                            <li>Держперевірки і результати</li>
                            <li>Інформація про фінанси та ВЕД</li>
                            <li>Медіа-аналітика</li>
                        </template>
                        <template v-slot:old-price>
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">3299 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">6099 грн</div>
                        </template>
                    </landing-package>

                    <landing-package :article="tab =='6' ?  'ep-contr-a_cp_1312' : 'ep-contr-a_cp_2801'" class="packages__column--two">
                        <template v-slot:title>
                            <span  v-if="tab =='6'">ТАРИФ<br>«OPTIMUM»<br>та подарунок</span>
                            <span v-else>ТАРИФ<br>«OPTIMUM»<br>та подарунки</span>
                        </template>
                        <template v-slot:period>
                            <div class="period">лютий 2020 - липень 2020</div>
                        </template>
                        <template v-slot:gifts>
                            <li > Податковий кодекс України (дата виходу – 31.03.2020, <br> з урахуванням усіх змін)</li>
                            <li v-if="tab =='6'"  class="no-active">Потужна електром'ясорубка</li>
                            <li v-else >Потужна електром'ясорубка</li>
                        </template>
                        <template v-slot:abilities>
                            <li>До 150 об'єктів моніторингу</li>
                            <li>750 переглядів карточок</li>
                            <li>Користувачі 1</li>
                            <li>Повне досьє</li>
                            <li>Історія змін в ЄДР</li>
                            <li>Афілійовані зв’язки</li>
                            <li>Публічні кошти і держзакупівлі </li>
                            <li>Держперевірки і результати</li>
                            <li>Інформація про фінанси та ВЕД</li>
                            <li>Медіа-аналітика</li>
                        </template>
                        <template v-slot:old-price>
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">6299 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">9099 грн</div>
                        </template>
                    </landing-package>

                    <landing-package :article="tab =='6' ?  'ep-contr-a_pr_1312' : 'ep-contr-a_pr_2801'" class="packages__column--three">
                        <template v-slot:title>
                            <span  v-if="tab =='6'">ТАРИФ<br>«PREMIUM»<br>та подарунок</span>
                            <span v-else>ТАРИФ<br>«PREMIUM»<br>та подарунки</span>
                        </template>
                        <template v-slot:period>
                            <div class="period">лютий 2020 - липень 2020</div>
                        </template>
                        <template v-slot:gifts>
                            <li > Податковий кодекс України (дата виходу – 31.03.2020, <br> з урахуванням усіх змін)</li>
                            <li v-if="tab =='6'"  class="no-active">Потужна електром'ясорубка</li>
                            <li v-else >Потужна електром'ясорубка</li>
                        </template>
                        <template v-slot:abilities>
                            <li>До 300 об'єктів моніторингу</li>
                            <li>1500 переглядів карточок</li>
                            <li>Користувачі 1</li>
                            <li>Повне досьє</li>
                            <li>Історія змін в ЄДР</li>
                            <li>Афілійовані зв’язки</li>
                            <li>Публічні кошти і держзакупівлі </li>
                            <li>Держперевірки і результати</li>
                            <li>Інформація про фінанси та ВЕД</li>
                            <li>Медіа-аналітика</li>
                        </template>
                        <template v-slot:old-price>
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">9299 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">12099 грн</div>
                        </template>
                    </landing-package>

                <landing-package :article="tab =='6' ?  'ep-contr-a_pp_1312' : 'ep-contr-a_pp_2801'"class="packages__column--four">
                        <template v-slot:title>
                            <span  v-if="tab =='6'">ТАРИФ<br>«CORPORATE»<br>та подарунок</span>
                            <span v-else>ТАРИФ<br>«CORPORATE»<br>та подарунки</span>
                        </template>
                    <template v-slot:period>
                        <div class="period">лютий 2020 - липень 2020</div>
                    </template>
                    <template v-slot:gifts>
                        <li > Податковий кодекс України (дата виходу – 31.03.2020, <br> з урахуванням усіх змін)</li>
                        <li v-if="tab =='6'"  class="no-active">Потужна електром'ясорубка</li>
                        <li v-else >Потужна електром'ясорубка</li>
                    </template>
                        <template v-slot:abilities>
                            <li>До 1000 об'єктів моніторингу</li>
                            <li>2500 переглядів карточок</li>
                            <li>Користувачі 3</li>
                            <li>Повне досьє</li>
                            <li>Історія змін в ЄДР</li>
                            <li>Афілійовані зв’язки</li>
                            <li>Публічні кошти і держзакупівлі </li>
                            <li>Держперевірки і результати</li>
                            <li>Інформація про фінанси та ВЕД</li>
                            <li>Медіа-аналітика</li>
                        </template>
                    <template v-slot:old-price>
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">15299 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">18099 грн</div>
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