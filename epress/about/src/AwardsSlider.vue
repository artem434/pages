<template>
    <slider id="awards_slider" class="awards-slider" name="epressa_win">
        <template v-slot="{slides, current, prev, next, to}">
            <slick ref="slick"
                   :options="slickOptions">
                <div class="award" v-for="slide,index in slides" :key="index">

                        <picture>
                            <source v-if="slide.webp" :srcset="slide.webp" type="image/webp">
                            <img :src="slide.cover" alt="" class="img-fluid">
                        </picture>
                        <p class="award__text">{{slide.options.caption}}</p>

                </div>
            </slick>
        </template>
    </slider>
</template>
<script>
import Slick from 'vue-slick'

export default {
    components: {
        Slick
    },
    data() {
        return {
            slickOptions: {
                slidesToShow: 4,
                infinite: true,
                speed: 800,
                autoplay: ! this.$prerendered,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            },
        }
    },
}
</script>
<style lang="scss">
    #awards_slider {
        @import "../../node_modules/bootstrap-scss/functions";
        @import "../../node_modules/bootstrap-scss/variables";
        @import "../../node_modules/bootstrap-scss/mixins";

        &.awards-slider {
            @include media-breakpoint-up(md) {
                padding: 0 100px;
            }
            @include media-breakpoint-up(lg) {
                padding: 0;
            }
        }

        .slick-slide {
            text-align: center;
        }

        .slick-prev,
        .slick-next {
            &:before,
            &:after {
                background: #61d0f3;
            }

            &:hover, &:focus {

                &:before, &:after {
                    background: darken(#61d0f3, 10%) ;
                }
            }
        }

        .slick-prev {
            @include media-breakpoint-up(md) {
                left: -55px;
            }
        }

        .slick-next {
            @include media-breakpoint-up(md) {
                right: -55px;
            }
        }
    }
</style>