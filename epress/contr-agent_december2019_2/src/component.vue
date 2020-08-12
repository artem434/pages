<template>
    <landing name="contr-agent_december2019_2" advantages="epressa_add_contr-agent" class="landing-contr-agent_december2019_2">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/new_year_2.webp')" type="image/webp">
                                <img :src="mix('images/new_year_2.jpg')" class="img-fluid" alt="coffe">
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
            <landing-package-row >
                <landing-package :article="tab =='6' ?  'ep-contr-a_ek_1312' : 'ep-contr-a_ek_1312_p'">
                    <template v-slot:title>
                        <span v-if="tab =='6'">ТАРИФ<br>«START» <br>та подарунок</span>
                        <span v-else>ТАРИФ<br>«START» <br>та подарунки</span>
                    </template>
                        <template v-slot:period><div class="period">січень  – червень  2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
                        <li :class="{'no-active' : tab =='6' }"><a href="https://www.youtube.com/watch?v=CETG9ts_fmk&feature=" target="_blank">робот-пилосос для сухого <br> та вологого прибирання</a></li>
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
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">4298 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">8297 грн</div>
                        </template>
                    </landing-package>

                    <landing-package :article="tab =='6' ?  'ep-contr-a_cp_1312' : 'ep-contr-a_cp_1312_p'">
                        <template v-slot:title>
                            <span v-if="tab =='6'">ТАРИФ<br>«OPTIMUM»<br>та подарунок</span>
                            <span v-else>ТАРИФ<br>«OPTIMUM»<br>та подарунки</span>
                        </template>
                        <template v-slot:period><div class="period">січень  – червень  2020</div> </template>
                        <template v-slot:gifts>
                            <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
                            <li :class="{'no-active' : tab =='6' }"><a href="https://www.youtube.com/watch?v=CETG9ts_fmk&feature=" target="_blank">робот-пилосос для сухого <br> та вологого прибирання</a></li>
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
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">7298 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">11297 грн</div>
                        </template>
                    </landing-package>

                    <landing-package :article="tab =='6' ?  'ep-contr-a_pr_1312' : 'ep-contr-a_pr_1312_p'" >
                        <template v-slot:title>
                            <span v-if="tab =='6'">ТАРИФ<br>«PREMIUM»<br>та подарунок</span>
                            <span v-else>ТАРИФ<br>«PREMIUM»<br>та подарунки</span>
                        </template>
                        <template v-slot:period><div class="period">січень  – червень  2020</div> </template>
                        <template v-slot:gifts>
                            <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
                            <li :class="{'no-active' : tab =='6' }"><a href="https://www.youtube.com/watch?v=CETG9ts_fmk&feature=" target="_blank">робот-пилосос для сухого <br> та вологого прибирання</a></li>
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
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">10298 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">14297 грн</div>
                        </template>
                    </landing-package>

                <landing-package :article="tab =='6' ?  'ep-contr-a_pp_1312' : 'ep-contr-a_pp_1312_p'">

                        <template v-slot:title>
                            <span v-if="tab =='6'">ТАРИФ<br>«CORPORATE»<br>та подарунок</span>
                            <span v-else>ТАРИФ<br>«CORPORATE»<br>та подарунки</span>
                        </template>
                        <template v-slot:period><div class="period">січень  – червень  2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
                        <li :class="{'no-active' : tab =='6' }"><a href="https://www.youtube.com/watch?v=CETG9ts_fmk&feature=" target="_blank">робот-пилосос для сухого <br> та вологого прибирання</a></li>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">16298 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">20297 грн</div>
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