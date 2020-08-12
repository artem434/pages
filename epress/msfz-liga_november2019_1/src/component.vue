<template>
    <landing name="msfz-liga_november2019_1" advantages="epressa_add_msfz-liga" class="landing-msfz-liga_november2019_1">
        <template v-slot:cover>
            <div class="dtkt-promo">
                <div class="landing-section">
                    <div class="container container--august">
                        <div class="cover">
                            <picture class="cover__img">
                                <source :src="mix('images/black_f_WM.webp')" type="image/webp">
                                <img :src="mix('images/black_f_WM.jpg')" class="img-fluid" alt="coffe">
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

            <p class="landing-section__action">Передплачуйте електронне видання «Вісник МСФЗ» із особливою чорноп’ятничною знижкою 59% та отримайте у подарунок відеозапис семінару про авто!</p>

        </template>
        <template v-slot:packages_list>
            <landing-package-row>
                <landing-package article="ep-msfz-liga_1511">
                    <template v-slot:title>Вісник МСФЗ <br> та подарунок</template>
                    <template v-slot:gifts>
                        <li>Відеозапис семінару  <a href="https://7eminar.com/01082019" target="_blank">"Автомобіль на підприємстві-2019"</a></li>
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