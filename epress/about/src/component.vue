<template>
    <div class="landing-page about-page">
        <div class="landing-section">
            <div class="container">
                <div class="cover">
                    <picture class="cover__img">
                        <img :src="mix('images/cover.jpg')" class="img-fluid" alt="">
                    </picture>
                </div>
            </div>
        </div>
        <section class="landing-section">
            <div class="container">
                <h1 class="landing-title"><span>Про нас</span></h1>
                <p>E-PRESSA.COM – iнтернет-магазин для оформлення передплати електронних бухгалтерських видань. Ми розпочали роботу одними з перших у 2016 році і на сьогодні залишаємось лідером ринку.</p>
            </div>
        </section>
        <section class="landing-section">
            <div class="container">
                <h2 class="landing-title"><span>Контакти</span></h2>
                <div class="row">
                    <div class="col-lg-6">
                        <u>ТОВ «Е-Преса»</u>
                        <br>
                        04112 м. Київ
                        <br>
                        вул. Олени Теліги, 4
                        <br>
                        <u>(044) 507-22-77</u>
                        <br>
                        <u>info@e-pressa.com</u>
                    </div>
                    <div class="col-lg-6">
                        <u>ТОВ «Е-Передплата»</u>
                        <br>
                        04112 м. Київ
                        <br>
                        вул. Олени Теліги, 4
                        <br>
                        <u>(044) 507-22-77</u>
                        <br>
                        <u>info@e-pressa.com</u>
                    </div>
                </div>
            </div>
        </section>
        <section class="landing-section">
            <div class="container">
                <h2 class="landing-title"><span>Наші переваги</span></h2>
                <b>Вибір сервісу</b>
                <p>Оберіть передплату на улюблені бухгалтерські сервіси</p>
                <b>Персональний менеджер</b>
                <p>Задавайте питання щодо передплати</p>
                <b>Програма лояльності</b>
                <p>Унікальні знижки на бухгалтерські семінари, курси та вебінари</p>
            </div>
        </section>
        <section class="landing-section">
            <div class="container">
                <h2 class="landing-title"><span>Наші нагороди</span></h2>
                <awards-slider></awards-slider>

            </div>
        </section>
    </div>
</template>

<script>
import Page from '../../core/Page'
import AwardsSlider from "./AwardsSlider"

export default {
    components: {AwardsSlider},
    mixins: [Page],
}
</script>

<style lang="scss">
    .about-page {
        color: #007094;
    }

    .award {
        max-width: 230px;

        &__text {
            margin-bottom: 0;
            padding-top: 10px;
            font-weight: bold;
            font-size: 20px;
            line-height: 19px;
            color: #007094;
        }
    }
</style>