<template>
    <landing name="msfz" advantages="epressa_add_msfz" class="landing-msfz">
        <template v-slot:about_description>
            <p>Журнал «Практика МСФЗ» – унікальне професійне видання про застосування міжнародних стандартів фінансової звітності. </p>
            <p>Це справжня скарбниця інформації з конкретними відповідями на запитання щодо виконання вимог стандартів, які виникають не в теорії, а на практиці.</p>
            <p>Особливість видання – розгляд прикладів конкретних ситуацій, що відбуваються на реальних підприємствах. Автори-експерти – провідні фахівці у сфері МСФЗ, представники авторитетних аудиторських компаній із бездоганною репутацією.</p>
        </template>
        <template v-slot:packages_list>
            <landing-package-row>
                    <landing-package article="ep-msfz">
                        <template v-slot:title>ПРАКТИКА МСФЗ</template>
                        <template v-slot:gifts>
                            <li>Відеозапис Великого бухгалтерського семінару</li>
                            <li>Смартфон <a href="/" target="_blank">Meizu M5C</a></li>
                        </template>
                        <template v-slot:abilities>
                            <li>Щомісячне друковане видання</li>
                            <li>Електронна версія журналу</li>
                            <li>Мінус 50% на всі платні online-семінари Видавничої групи «АС»</li>
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