<template>
    <landing name="contr-agent_november2019_1" advantages="epressa_add_contr-agent" class="landing-contr-agent_november2019_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/black_f_СA.webp')" type="image/webp">
                                <img :src="mix('images/black_f_СA.jpg')" class="img-fluid" alt="coffe">
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
                <h2 class="landing-title landing-title--columns"><span>АКЦІЙНА ПРОПОЗИЦІЯ ДІЄ ТІЛЬКИ 15 ЛИСТОПАДА!</span></h2>
            </div>
        </template>
        <template v-slot:action-due>

            <p class="landing-section__action">Передплачуйте доступ до аналітичної системи «CONTR AGENT» із особливою чорноп’ятничною знижкою 70% та отримайте подарунки: відеозапис семінару про авто та курс про П(с)БО!</p>

        </template>
        <template v-slot:packages_list>
            <landing-package-row>
                    <landing-package article="ep-contr-agent_ek_1">
                        <template v-slot:title>ТАРИФ<br>«START» <br> та подарунки</template>
                        <template v-slot:gifts>
                            <li>Відеозапис семінару  <a href="https://7eminar.com/01082019" target="_blank">"Автомобіль на підприємстві-2019"</a></li>
                            <li >Відеозапис курсу  <a href="https://7eminar.com/psbo2019" target="_blank">"П(с)БО від А до Я"</a></li>
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
                    </landing-package>
                    <landing-package article="ep-contr-agent_cp_5">
                        <template v-slot:title>ТАРИФ<br>«OPTIMUM»<br> та подарунки</template>
                        <template v-slot:gifts>
                            <li>Відеозапис семінару  <a href="https://7eminar.com/01082019" target="_blank">"Автомобіль на підприємстві-2019"</a></li>
                            <li >Відеозапис курсу  <a href="https://7eminar.com/psbo2019" target="_blank">"П(с)БО від А до Я"</a></li>
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
                    </landing-package>
                    <landing-package article="ep-contr-agent_pr_5" class="package-plus package-plus-top">
                        <template v-slot:title>ТАРИФ<br>«PREMIUM»<br> та подарунки</template>
                        <template v-slot:gifts>
                            <li>Відеозапис семінару  <a href="https://7eminar.com/01082019" target="_blank">"Автомобіль на підприємстві-2019"</a></li>
                            <li >Відеозапис курсу  <a href="https://7eminar.com/psbo2019" target="_blank">"П(с)БО від А до Я"</a></li>
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