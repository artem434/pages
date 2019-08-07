<template>
    <landing name="buhzakon" advantages="epressa_add_buhzakon" class="landing-buhzakon">
        <template v-slot:about_description>
            <p>«БУХГАЛТЕР&ЗАКОН» – електронне видання з акцентом на практичні рекомендації та аналітику.</p>
            <p>Тексти доповнені таблицями, інфографікою та відео. Всі матеріали пов'язані гіперпосиланнями з базою НПА. Тому зі статті видання можна переходити за посиланнями на нормативно-правові акти, що економить час на їх пошуку і надає можливість глибше аналізувати матеріал. </p>
            <p>У центрі уваги завжди «гарячі» теми, які опрацьовують експерти, спілкуючись із бухгалтерами різних підприємств.</p>
        </template>
        <template v-slot:packages_list>
            <landing-package-row>
                <landing-package article="ep-buhzakon">
                    <template v-slot:title>БУХГАЛТЕР & ЗАКОН</template>
                    <template v-slot:gifts>
                        <li>Відеозапис Великого бухгалтерського семінару</li>
                        <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
                    </template>
                    <template v-slot:abilities>
                        <li>Щотижневе електронне видання</li>
                        <li>Аналітичні матеріали з практичними рекомендаціями експертів</li>
                        <li>Доступ до архівних випусків видання</li>
                        <li>Функція «Задати питання автору»</li>
                        <li>Безкоштовний доступ до «Право України» - унікальному рішенню для роботи з базою нормативних документів</li>
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