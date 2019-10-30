<template>
    <landing name="msfz-liga_october2019_2" advantages="epressa_add_msfz-liga" class="landing-msfz-liga_october2019_2">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/head_tea_6.webp')" type="image/webp">
                                <img :src="mix('images/head_tea_6.jpg')" class="img-fluid" alt="coffe">
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
                <h2 class="landing-title landing-title--columns"><span>АКЦІЙНА ПРОПОЗИЦІЯ ДІЄ ДО 31 ЖОВТНЯ</span></h2>
            </div>
        </template>
        <template v-slot:action-due>

            <p class="landing-section__action">Гарячий чай зігріє, а електронне видання «Вісник МСФЗ» допоможе у роботі. І це ще не всі подарунки ;)</p>

        </template>
        <template v-slot:packages_list>
            <landing-package-row>
                <landing-package article="ep-msfz-liga">
                    <template v-slot:title>Вісник МСФЗ <br> та подарунки</template>
                    <template v-slot:gifts>
                        <li>відеозапис<br> <a href="https://7eminar.com/08102019" target="_blank">Великого Квартального Семінару</a></li>
                        <li><a href="https://protovar.com.ua/Arita-AKT-5201--nerw-stal" target="_blank" > електрочайник</a></li>
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