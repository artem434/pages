<template>
    <landing name="contr-agent_december2019_1" advantages="epressa_add_contr-agent" class="landing-contr-agent_december2019_1">
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
                <landing-package article="ep-contr-a_ek_1012">
                    <template v-slot:title>
                        <span>ТАРИФ<br>«START» <br>та подарунок</span>
                    </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
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
                            <div   class="package__old-price" style="text-decoration: line-through">500 грн/міс.</div>
                        </template>
                    </landing-package>

                <landing-package article="ep-contr-a_cp_1012">
                    <template v-slot:title>
                        <span >ТАРИФ<br>«OPTIMUM»<br>та подарунок</span>
                    </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
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
                        <div  class="package__old-price" style="text-decoration: line-through">1000 грн/міс.</div>
                    </template>
                </landing-package>

                <landing-package article="ep-contr-a_pr_1012" >
                    <template v-slot:title>
                        <span>ТАРИФ<br>«PREMIUM»<br>та подарунок</span>
                    </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
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
                        <div   class="package__old-price" style="text-decoration: line-through">1500 грн/міс.</div>
                    </template>
                </landing-package>

                <landing-package article="ep-contr-a_pp_1012">
                        <template v-slot:title>
                            <span>ТАРИФ<br>«CORPORATE»<br>та подарунок</span>
                        </template>

                    <template v-slot:gifts>
                        <li>квиток до залу на Великий Річний Семінар (23.01.2020)</li>
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
                        <div class="package__old-price" style="text-decoration: line-through">2500 грн/міс.</div>
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