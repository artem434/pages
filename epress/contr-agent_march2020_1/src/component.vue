<template>
    <landing name="contr-agent_march2020_1" advantages="epressa_add_contr-agent" class="landing-contr-agent_march2020_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_034.webp')" type="image/webp">
                                <img :src="mix('images/head_034.jpg')" class="img-fluid" alt="">
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
                <landing-package :article="tab =='6' ?  'ep-contr-agent_ek' : 'ep-contr-agent_ek_action'" class="packages__column--one">
                    <template v-slot:title>
                        <span v-if="tab =='6'">ТАРИФ<br>«START» <br>та подарунок</span>
                        <span v-else>ТАРИФ<br>«START»<br>та подарунки</span>
                    </template>
                    <template v-slot:period>
                        <div class="period">березень - серпень 2020</div>
                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс <a href="https://7eminar.com/zarplata2020" target="_blank">Зарплата-2020</a></li>
                        <li v-if="tab =='6'"  class="no-active">Електронна <br> подушка-масажер</li>
                        <li v-else ><a href="https://www.youtube.com/watch?v=-DulVBtynvY" target="_blank">Електронна
                            <br>подушка-масажер</a></li>
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
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">4099 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">5499 грн</div>
                        </template>
                    </landing-package>

                    <landing-package :article="tab =='6' ?  'ep-contr-agent_cp' : 'ep-contr-agent_cp_action'" class="packages__column--two">
                        <template v-slot:title>
                            <span  v-if="tab =='6'">ТАРИФ<br>«OPTIMUM»<br>та подарунок</span>
                            <span v-else>ТАРИФ<br>«OPTIMUM»<br>та подарунки</span>
                        </template>
                        <template v-slot:period>
                            <div class="period">березень - серпень 2020</div>
                        </template>
                        <template v-slot:gifts>
                            <li >Відеокурс <a href="https://7eminar.com/zarplata2020" target="_blank">Зарплата-2020</a></li>
                            <li v-if="tab =='6'"  class="no-active">Електронна <br> подушка-масажер</li>
                            <li v-else ><a href="https://www.youtube.com/watch?v=-DulVBtynvY" target="_blank">Електронна
                                <br>подушка-масажер</a></li>
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
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">7099 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">8499 грн</div>
                        </template>
                    </landing-package>

                    <landing-package :article="tab =='6' ?  'ep-contr-agent_pr' : 'ep-contr-agent_pr_action'" class="packages__column--three">
                        <template v-slot:title>
                            <span  v-if="tab =='6'">ТАРИФ<br>«PREMIUM»<br>та подарунок</span>
                            <span v-else>ТАРИФ<br>«PREMIUM»<br>та подарунки</span>
                        </template>
                        <template v-slot:period>
                            <div class="period">березень - серпень 2020</div>
                        </template>
                        <template v-slot:gifts>
                            <li >Відеокурс <a href="https://7eminar.com/zarplata2020" target="_blank">Зарплата-2020</a></li>
                            <li v-if="tab =='6'"  class="no-active">Електронна <br> подушка-масажер</li>
                            <li v-else ><a href="https://www.youtube.com/watch?v=-DulVBtynvY" target="_blank">Електронна
                                <br>подушка-масажер</a></li>
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
                            <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">10099 грн</div>
                            <div  v-else class="package__old-price" style="text-decoration: line-through">11499 грн</div>
                        </template>
                    </landing-package>

                <landing-package :article="tab =='6' ?  'ep-contr-agent_pp' : 'ep-contr-agent_pp_action'"class="packages__column--four">
                        <template v-slot:title>
                            <span  v-if="tab =='6'">ТАРИФ<br>«CORPORATE»<br>та подарунок</span>
                            <span v-else>ТАРИФ<br>«CORPORATE»<br>та подарунки</span>
                        </template>
                    <template v-slot:period>
                        <div class="period">березень - серпень 2020</div>
                    </template>
                    <template v-slot:gifts>
                        <li >Відеокурс <a href="https://7eminar.com/zarplata2020" target="_blank">Зарплата-2020</a></li>
                        <li v-if="tab =='6'"  class="no-active">Електронна <br> подушка-масажер</li>
                        <li v-else ><a href="https://www.youtube.com/watch?v=-DulVBtynvY" target="_blank">Електронна
                            <br>подушка-масажер</a></li>
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
                        <div  v-if="tab =='6'" class="package__old-price" style="text-decoration: line-through">16099 грн</div>
                        <div  v-else class="package__old-price" style="text-decoration: line-through">17499 грн</div>
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