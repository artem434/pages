<template>
    <div class="package">
        <div class="package__header">
            <h4 class="package__title">
                <slot name="title"/>
            </h4>
            <p class="package__period">січень – грудень 2020</p>
            <p class="package__price">49 грн/міс.</p>
            <p class="package__price-half">294 грн за півріччя</p>
        </div>
        <div class="package__body">
            <div class="package__presents">
                <h5 class="package__presents-title">Подарунки</h5>
                <ul class="package__presents-list">
                    <slot name="gifts"/>
                </ul>
            </div>
            <p class="package__btn">
                <router-link :to="`/order?article=${article}&options[periods]=6`" class="btn" target="_blank">Замовити</router-link>
            </p>

            <div class="package__abilities" :class="{collapsed}">
                <h6 class="package__abilities-title">До пакету входить</h6>
                <ul class="package__abilities-list">
                    <slot name="abilities" />
                </ul>
            </div>
            <p class="package__btn  package__btn--collapsed">
                <button v-on:click="collapsed = !collapsed" class="btn btn--more" :class="{collapsed}">
                    Про пакет
                </button>
            </p>
        </div>
        <div class="package__footer">
            <router-link :to="`/order?article=${article}&options[periods]=6`" class="btn" target="_blank">Беру!</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        article: {
            type: String,
            required: true
        }
    },
    data: () => ({
        collapsed: true,
    })
}
</script>