<template>
    <landing name="contr-agent" advantages="epressa_add_contr-agent" class="landing-contr-agent">
        <template v-slot:about_description>
            <p>Аналітична система «CONTR AGENT» – зручний сервіс перевірки контрагентів, який допомагає зробити експрес-аналіз бізнес-партнера на наявність ризик-факторів та оцінити його надійність від податкового боргу до санкцій.</p>
            <p>«CONTR AGENT» поєднує розширений функціонал зі зручним інтерфейсом. Робота із сервісом зрозуміла інтуїтивно, а в разі виникнення додаткових запитань він надає цілодобову онлайн-підтримку.</p>
            <p>Система містить повне досьє на понад 6 млн компаній та ФОПів із державних реєстрів та відкритих джерел.</p>
        </template>
        <template v-slot:packages_list>
            <landing-package-row>
                    <landing-package article="ep-contr-agent_ek">
                        <template v-slot:title>Тариф<br>ECONOM</template>
                        <template v-slot:gifts>
                            <li>Відеозапис Великого бухгалтерського семінару</li>
                            <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
                        </template>
                        <template v-slot:abilities>
                            <li>До 20 об'єктів моніторингу</li>
                            <li>200 переглядів карточок</li>
                            <li>Афілійовані зв’язки</li>
                            <li>Повне досьє</li>
                            <li>Медіа-аналітика</li>
                        </template>
                    </landing-package>
                    <landing-package article="ep-contr-agent_pr">
                        <template v-slot:title>Тариф<br>PREMIUM</template>
                        <template v-slot:gifts>
                            <li>Відеозапис Великого бухгалтерського семінару</li>
                            <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
                        </template>
                        <template v-slot:abilities>
                            <li>100 об'єктів моніторингу</li>
                            <li>600 переглядів карточок</li>
                            <li>Афілійовані зв’язки</li>
                            <li>Повне досьє</li>
                            <li>Інформація про фінанси та ЗЕД</li>
                            <li>Медіа-аналітика</li>
                        </template>
                    </landing-package>
                    <landing-package article="ep-contr-agent_pp">
                        <template v-slot:title>Тариф<br>PREMIUM+</template>
                        <template v-slot:gifts>
                            <li>Відеозапис Великого бухгалтерського семінару</li>
                            <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
                        </template>
                        <template v-slot:abilities>
                            <li>150 об'єктів моніторингу</li>
                            <li>900  переглядів карточок</li>
                            <li>Афілійовані зв’язки</li>
                            <li>Повне досьє</li>
                            <li>Інформація про фінанси та ЗЕД</li>
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