<template>
  <div>
    <h3>slickslide下のスライドが動けば成功</h3>
    <slick
  ref="slick"
  :options="slickOptions">
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.jp/24/9272a8/333333/1000x672.png"></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.jp/24/9272a8/555555/1000x672.png"></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.jp/24/9272a8/777777/1000x672.png"></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.jp/24/9272a8/aaaaaa/1000x672.png"></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.jp/24/9272a8/cccccc/1000x672.png"></a>
</slick>
  </div>
</template>

<script>
import Slick from 'vue-slick';

export default {

    components: { Slick },

    data() {
        return {
            slickOptions: {
                slidesToShow: 3,
                // Any other options that can be got from plugin documentation
            },
        };
    },

    // All slick methods can be used too, example here
    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },

        // Events listeners
        handleAfterChange(event, slick, currentSlide) {
            console.log('handleAfterChange', event, slick, currentSlide);
        },
        handleBeforeChange(event, slick, currentSlide, nextSlide) {
            console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        },
        handleBreakpoint(event, slick, breakpoint) {
            console.log('handleBreakpoint', event, slick, breakpoint);
        },
        handleDestroy(event, slick) {
            console.log('handleDestroy', event, slick);
        },
        handleEdge(event, slick, direction) {
            console.log('handleEdge', event, slick, direction);
        },
        handleInit(event, slick) {
            console.log('handleInit', event, slick);
        },
        handleReInit(event, slick) {
            console.log('handleReInit', event, slick);
        },
        handleSetPosition(event, slick) {
            console.log('handleSetPosition', event, slick);
        },
        handleSwipe(event, slick, direction) {
            console.log('handleSwipe', event, slick, direction);
        },
        handleLazyLoaded(event, slick, image, imageSource) {
            console.log('handleLazyLoaded', event, slick, image, imageSource);
        },
        handleLazeLoadError(event, slick, image, imageSource) {
            console.log('handleLazeLoadError', event, slick, image, imageSource);
        },
    },
      head: {
    link: [
    ]
  },

};
</script>

<style>
</style>
