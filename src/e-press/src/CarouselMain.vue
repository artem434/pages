<template>
    <slider id="carousel_main" class="carousel-main" name="epressa_main">
        <template v-slot:placeholder>
            <svg class="placeholder-img" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg"
                 preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                 aria-label="Placeholder: Responsive image"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#e4e4e4"></rect>
            </svg>
        </template>
        <template v-slot="{slides, current, prev, next, to}">
            <!--<div class="prev" @click="prev">prev</div>-->
            <!--<div class="next" @click="next">next</div>-->
            <!--<div :style="{-->
            <!--height: '300px',-->
            <!--overflow: 'hidden',-->
            <!--}">-->

            <!--</div>-->
            <!--<carousel :scrollPerPage="true" :perPage="1" :autoplay="false" :navigationEnabled="true" :autoplayHoverPause="true">-->
            <!--<slide v-for="slide,index in slides" :key="index" >-->
            <!--<smart-link :to="slide.link" :key="index" :target="slide.target">-->
            <!--<picture>-->
            <!--<source v-if="slide.webp" :srcset="slide.webp" type="image/webp">-->
            <!--<img :src="slide.cover" alt="" >-->
            <!--</picture>-->
            <!--</smart-link>-->
            <!--</slide>-->
            <!--</carousel>-->
            <slick ref="slick"
                   :options="slickOptions">
                <div class="carousel-main__slide" v-for="slide,index in slides" :key="index">
                    <smart-link :to="slide.link" :key="index" :target="slide.target">
                        <picture>
                            <source v-if="slide.webp" :srcset="slide.webp" type="image/webp">
                            <img :src="slide.cover" alt="">
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
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                speed: 800,
                autoplay: ! this.$prerendered,
                autoplaySpeed: 3000,
            },
        }
    },
}
</script>
<style lang="scss">
    #carousel_main {
        @import "../../node_modules/bootstrap-scss/functions";
        @import "../../node_modules/bootstrap-scss/variables";
        @import "../../node_modules/bootstrap-scss/mixins";

        .slick-dotted.slick-slider {
            margin-bottom: 0;
        }

        .slick-dots li {
            width: auto;
            height: auto;

            &:hover {
                button {
                    border-color: #fff;
                }
            }

            &.slick-active {
                button {
                    background: #fff;
                    border-color: #fff;
                }
            }

            button {
                width: 10px;
                height: 10px;
                background: rgba(255, 255, 255, .25);
                border-radius: 50%;
                border: 1px solid transparent;

                &:before {
                    display: none;
                }
            }
        }

        .slick-list {

            @include media-breakpoint-up(lg) {
                overflow: visible;
            }
        }

        .carousel-main {

            &__slide {
                @include media-breakpoint-up(lg) {
                    padding: 0 5px;
                }
            }
        }

        a, picture, img {
            display: block;
            width: 100%;
        }
    }
</style>