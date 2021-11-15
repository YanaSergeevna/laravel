<template>
    <div v-swiper:mySwiper="swiperOptions" class="m-month-container column-swiper">
        <div class="swiper-wrapper">
            <m-list-item
                v-for="(day, index) in daysObj"
                :key="'Day'+ index"
                :day="day"
                :indexDay="index"
                :hasToday="hasToday"
                :selectedMonth="selectedMonth"
                class="m-day-item swiper-slide"
            >
            </m-list-item>
        </div>
        <a-slider-navigation class="column-slider-navigation"></a-slider-navigation>
    </div>
</template>
<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import ToDoListItem from "../../atoms/todo/todo-list-item.vue";
    import ToDoSliderNavigation from "../../atoms/todo/todo-slider-navigation.vue";
    export default {
        name: 'todo-list-grid',
        props: {
            daysObj: {
                type: Array
            },
            hasToday: {
                type: Boolean
            },
            selectedMonth: {
                type: Number
            }
        },
        data: () => ({
            swiperOptions: {
                slidesPerView: 4,
                slidesPerGroup:4,
                navigation: {
                    nextEl: '.column-swiper-button-next',
                    prevEl: '.column-swiper-button-prev'
                },
            }
        }),
        mounted() {
        },
        methods: {
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
        },
        components: {
            "m-list-item": ToDoListItem,
            'a-slider-navigation': ToDoSliderNavigation,
            Swiper,
            SwiperSlide
        },
        directives: {
            swiper: directive
        }
  };
</script>
<style scoped lang="scss">
   .column-slider-navigation {
       position: relative;
       display: flex;
       justify-content: flex-end;
   }
   .swiper-wrapper .m-day-item:last-child {
       &::after {
           display: none;
       }
   }
</style>
