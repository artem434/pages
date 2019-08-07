<template>
    <landing name="msfz-liga" advantages="epressa_add_msfz-liga" class="landing-msfz-liga">
        <template v-slot:about_description>
            <p>«Вісник МСФЗ» – перше в Україні систематизоване джерело інформації про застосування міжнародних стандартів фінансової звітності.</p>
            <p>Актуальні дані про події та документи у сфері МСФЗ, коментарі експертів, навчальні матеріали, інтерв'ю знакових персон і спеціалістів-практиків. Можливість поставити запитання авторові матеріалу та отримати відповідь на сторінках видання.</p>
            <p>Огляд матеріалів суміжних тематик, необхідних для прийняття управлінських рішень.</p>
        </template>
        <template v-slot:packages_list>
            <landing-package-row>
                <landing-package article="ep-msfz-liga">
                    <template v-slot:title>Вісник МСФЗ</template>
                    <template v-slot:gifts>
                        <li>Відеозапис Великого бухгалтерського семінару</li>
                        <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
                    </template>
                    <template v-slot:abilities>
                        <li>Електронне видання</li>
                        <li>Функція «Задати питання автору»</li>
                        <li>Доступ до накопиченого архіву видання</li>
                        <li>Щоквартальна додаткова добірка ТОП-25 аналітичних матеріалів</li>
                        <li>Гіперпосилання з матеріалів видання на документи й продукти ЛІГА:ЗАКОН</li>
                        <li>«Довідник МСФЗ»</li>
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