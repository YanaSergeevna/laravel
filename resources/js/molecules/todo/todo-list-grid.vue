<template>
    <div class="m-month-container column-swiper">
        <div class="swiper-wrapper">
            <m-list-item 
                v-for="(day, index) in daysObj"
                :key="'Day'+ index"
                :day="day"
                :index="index"
                :hasToday="hasToday"
                :selectedMonth="selectedMonth"
                class="m-day-item swiper-slide"
            ></m-list-item> 
        </div>
        <a-slider-navigation class="column-slider-navigation"></a-slider-navigation>
    </div>
</template>
<script>
    import Swiper, { Navigation, Pagination } from 'swiper';
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
        }),
        mounted:function(){
            this.initSwiper()
        },
        methods: {
            initSwiper () {
                const mySwiper = new Swiper('.column-swiper', {
                    modules: [Navigation, Pagination],
                    slidesPerView: 4.5,
                    slidesPerGroup:4,
                    navigation: {
                        nextEl: '.column-swiper-button-next',
                        prevEl: '.column-swiper-button-prev',
                    }
                })
                mySwiper.init()
            },
        },
        components: {
            "m-list-item": ToDoListItem,
            'a-slider-navigation': ToDoSliderNavigation
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
