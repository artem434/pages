<template>
    <landing name="contr-agent_november2019_3" advantages="epressa_add_contr-agent" class="landing-contr-agent_november2019_3">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_03_ca_webp.webp')" type="image/webp">
                                <img :src="mix('images/head_03_ca.jpg')" class="img-fluid" alt="coffe">
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
                <landing-package :article="tab =='6' ?  'ep-contr-agent_ek_2111' : 'ep-c_agent_ek_2711_g'">
                    <template v-slot:title>
                        <span v-if="tab =='6'">ТАРИФ<br>«START» <br>та подарунок</span>
                        <span v-else>ТАРИФ<br>«START» <br>та подарунки</span>
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
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">4094 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">5794 грн</div>
                        </template>
                    </landing-package>

                    <landing-package :article="tab =='6' ?  'ep-contr-agent_cp_2111' : 'ep-c_agent_cp_2711_g'">
                        <template v-slot:title>
                            <span v-if="tab =='6'">ТАРИФ<br>«OPTIMUM»<br>та подарунок</span>
                            <span v-else>ТАРИФ<br>«OPTIMUM»<br>та подарунки</span>
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
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">6498 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">8198 грн</div>
                        </template>
                    </landing-package>

                    <landing-package :article="tab =='6' ?  'ep-contr-agent_pr_2111' : 'ep-c_agent_pr_2711_g'" >
                        <template v-slot:title>
                            <span v-if="tab =='6'">ТАРИФ<br>«PREMIUM»<br>та подарунок</span>
                            <span v-else>ТАРИФ<br>«PREMIUM»<br>та подарунки</span>
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
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">9498 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">11198 грн</div>
                        </template>
                    </landing-package>

                <landing-package :article="tab =='6' ?  'ep-contr-agent_pp_2111' : 'ep-c_agent_pp_2711_g'">

                        <template v-slot:title>
                            <span v-if="tab =='6'">ТАРИФ<br>«CORPORATE»<br>та подарунок</span>
                            <span v-else>ТАРИФ<br>«CORPORATE»<br>та подарунки</span>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">15498 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">17198 грн</div>
                    </template>
                    </landing-package>
            </landing-package-row>
           <!-- <landing-package-row  v-show="tab ==='12'">
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