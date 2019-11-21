<template>
    <landing name="contr-agent_november2019_2" advantages="epressa_add_contr-agent" class="landing-contr-agent_november2019_2">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_034_webp.webp')" type="image/webp">
                                <img :src="mix('images/head_034.jpg')" class="img-fluid" alt="coffe">
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
                <h2 class="landing-title landing-title--columns"><span>АКЦІЙНА ПРОПОЗИЦІЯ ДІЄ ДО 22 ЛИСТОПАДА</span></h2>
            </div>
        </template>
        <template v-slot:action-due>

            <p class="landing-section__action">Передплатити аналітичну систему «CONTR AGENT» – це отримати у подарунок смартфон або планшет та ще й квиток до залу на Великий Кадровий Семінар!</p>

        </template>
        <template v-slot:tab-radio>
            <div class="tab-content"> <label class="label" :class="{active: tab ==='6'}" @click="tab = '6'">+ 1 подарунок </label> <label class="label" :class="{active: tab ==='12'}" @click="tab = '12'">+ 2 подарунки </label></div>
        </template>
        <template v-slot:packages_list>
            <landing-package-row  v-show="tab ==='6'">
                    <landing-package article="ep-contr-agent_ek_2111">
                        <template v-slot:title>ТАРИФ<br>«START» <br> та подарунок</template>
                        <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                        <template v-slot:gifts>
                            <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                            <li class="no-active">сучасний планшет або смартфон</li>
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
                            <div class="package__old-price" style="text-decoration: line-through">4094 грн</div>
                        </template>
                    </landing-package>
                    <landing-package article="ep-contr-agent_cp_2111">
                        <template v-slot:title>ТАРИФ<br>«OPTIMUM»<br> та подарунок</template>
                        <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                        <template v-slot:gifts>
                            <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                            <li class="no-active">сучасний планшет або смартфон</li>
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
                            <div class="package__old-price" style="text-decoration: line-through">7094 грн</div>
                        </template>
                    </landing-package>
                    <landing-package article="ep-contr-agent_pr_2111" class="package-plus package-plus-top">
                        <template v-slot:title>ТАРИФ<br>«PREMIUM»<br> та подарунок</template>
                        <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                        <template v-slot:gifts>
                            <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                            <li class="no-active">сучасний планшет або смартфон</li>
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
                            <div class="package__old-price" style="text-decoration: line-through">10094 грн</div>
                        </template>
                    </landing-package>
                    <landing-package article="ep-contr-agent_pp_2111">
                        <template v-slot:title>ТАРИФ<br>«CORPORATE»<br> та подарунок</template>
                        <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                        <template v-slot:gifts>
                            <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                            <li class="no-active">сучасний планшет або смартфон</li>
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
                            <div class="package__old-price" style="text-decoration: line-through">16094 грн</div>
                        </template>
                    </landing-package>
            </landing-package-row>
            <landing-package-row  v-show="tab ==='12'">
                <landing-package article="ep-contr-agent_ek_2111_g">
                    <template v-slot:title>ТАРИФ<br>«START» <br> та подарунки</template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li >сучасний <a href="https://consumer.huawei.com/ua/tablets/mediapad-t3-7/" target="_blank">планшет</a> або <a href="https://consumer.huawei.com/ua/phones/y5-2018/" target="_blank">смартфон</a></li>
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
                        <div class="package__old-price" style="text-decoration: line-through">9194 грн</div>
                    </template>
                </landing-package>
                <landing-package article="ep-contr-agent_cp_2111_g">
                    <template v-slot:title>ТАРИФ<br>«OPTIMUM»<br> та подарунки</template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li >сучасний <a href="https://consumer.huawei.com/ua/tablets/mediapad-t3-7/" target="_blank">планшет</a> або <a href="https://consumer.huawei.com/ua/phones/y5-2018/" target="_blank">смартфон</a></li>
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
                        <div class="package__old-price" style="text-decoration: line-through">12194 грн</div>
                    </template>
                </landing-package>
                <landing-package article="ep-contr-agent_pr_2111_g" class="package-plus package-plus-top">
                    <template v-slot:title>ТАРИФ<br>«PREMIUM»<br> та подарунки</template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li >сучасний <a href="https://consumer.huawei.com/ua/tablets/mediapad-t3-7/" target="_blank">планшет</a> або <a href="https://consumer.huawei.com/ua/phones/y5-2018/" target="_blank">смартфон</a></li>
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
                        <div class="package__old-price" style="text-decoration: line-through">15194 грн</div>
                    </template>
                </landing-package>
                <landing-package article="ep-contr-agent_pp_2111_g">
                    <template v-slot:title>ТАРИФ<br>«CORPORATE»<br> та подарунки</template>
                    <template v-slot:period><div class="period">грудень 2019 – травень 2020</div> </template>
                    <template v-slot:gifts>
                        <li>квиток до залу на<br> <a href="https://7eminar.com/26112019" target="_blank">Великий Кадровий Семінар</a></li>
                        <li >сучасний <a href="https://consumer.huawei.com/ua/tablets/mediapad-t3-7/" target="_blank">планшет</a> або <a href="https://consumer.huawei.com/ua/phones/y5-2018/" target="_blank">смартфон</a></li>
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
                        <div class="package__old-price" style="text-decoration: line-through">21194 грн</div>
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