<template>
    <landing name="buhzakon_october2019_1" advantages="epressa_add_buhzakon" class="landing-buhzakon_october2019_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_coffe4.webp')" type="image/webp">
                                <img :src="mix('images/head_coffe4.jpg')" class="img-fluid" alt="coffe">
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
                <h2 class="landing-title landing-title--columns"><span>АКЦІЙНА ПРОПОЗИЦІЯ ДІЄ ДО 10 ЖОВТНЯ</span></h2>
            </div>
        </template>
        <template v-slot:action-due>

            <p class="landing-section__action">Немає роботи без кави! Отримайте все необхідне для створення ідеальної атмосфери, передплативши електронне видання «БУХГАЛТЕР&ЗАКОН».</p>

        </template>
        <template v-slot:packages_list>
            <landing-package-row>
                <landing-package article="ep-buhzakon">
                    <template v-slot:title>БУХГАЛТЕР&ЗАКОН <br> та подарунки</template>
                    <template v-slot:gifts>
                        <li>online-трансляція та запис<br> <a href="https://7eminar.com/08102019" target="_blank">Великого Квартального Семінару</a></li>
                        <li><a href="https://rozetka.com.ua/maestro_mr_1667_6/p10017018/" target="_blank"> гейзерна кавоварка</a></li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щотижневе електронне видання</li>
                        <li>Аналітичні матеріали з практичними рекомендаціями експертів</li>
                        <li>Доступ до архівних випусків видання</li>
                        <li>Функція «Задати питання автору»</li>
                        <li>Безкоштовний доступ до «Право України» – унікальному рішенню для роботи з базою нормативних документів</li>
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