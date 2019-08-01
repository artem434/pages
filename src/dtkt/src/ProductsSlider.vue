<template>
    <slider id="products_slider" class="products-slider" name="epressa_subs">
        <template v-slot="{slides, current, prev, next, to}">
            <slick ref="slick"
                   :options="slickOptions">
                <div class="products-slider__item" v-for="slide,index in slides" :key="index">
                    <smart-link :to="slide.link" :key="index" :target="slide.target">
                        <picture>
                            <source v-if="slide.webp" :srcset="slide.webp" type="image/webp">
                            <img :src="slide.cover" alt="" class="img-fluid">
                        </picture>

                    </smart-link>
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
                        breakpoint: 1023,
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
    #products_slider {
        @import "../../node_modules/bootstrap-scss/functions";
        @import "../../node_modules/bootstrap-scss/variables";
        @import "../../node_modules/bootstrap-scss/mixins";

        .products-slider {
            &__item {
                text-align: center;
                a {
                    position: relative;
                    display: block;
                    width: 230px;
                    margin: 0 auto;
                    text-decoration: none;
                    transition: all 150ms ease-in;
                    top: 0;

                    &:hover {
                        top: -10px;
                        box-shadow: 0 7px 9.6px 0.4px rgba(0, 0, 0, 0.32);
                    }

                    span {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding-top: 10px;
                        color: #007094;
                    }
                }
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