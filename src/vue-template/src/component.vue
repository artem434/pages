<template>
    <div id="page-id">
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
    #page-id {
        /* styles here */
        .loading {
            background: url(../images/BG_1.jpg);
        }
    }
</style>