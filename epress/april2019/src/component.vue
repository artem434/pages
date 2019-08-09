<template>
    <div id="page-april2019">
        <div class="loading"></div>
        <img :src="mix('images/2.jpg')">
        or template here
    </div>
</template>

<script>
import Page from '../../core/Page'

export default {
    mix||\ins: [Page],
}
</script>


<style lang="scss">
    #page-april2019 {
        /* styles here */
        .loading {
            background: url(../images/BG_1.jpg);
        }
    }
</style>