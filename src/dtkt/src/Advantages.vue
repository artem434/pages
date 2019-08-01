<template>
    <slider id="advantages_slider" name="epressa_add_dtkt" class="row">
        <template v-slot="{slides, current, prev, next, to}">
            <div class="col-lg-3 advantages__item" v-for="slide, index in slides" :key="index">
                    <p class="" v-html="slide.options.caption"></p>
            </div>
        </template>
    </slider>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>

</style>