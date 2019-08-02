<template>
    <slider id="advantages_slider" name="epressa_add_dtkt" class="row">
        <template v-slot="{slides, current, prev, next, to}">
            <div class="col-sm-12 col-md-6 col-lg-4 advantages__item" v-for="slide, index in slides" :key="index">
                <div class="advantage" v-html="slide.options.caption"></div>
            </div>
        </template>
    </slider>
</template>
