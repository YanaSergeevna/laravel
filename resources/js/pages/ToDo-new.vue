<template>
        <div class="o-todo-wrapper" style="background-image: url(./images/bg.png)">
            <div class="container">
                <o-todo-week />
                <h1 class="a-todo-title">Weekly planner</h1>
                <div class="look-calendar">
                    <div class="tg-wrap">
                        <div id="month-desk" class="tg">
                            <div class="m-calendar-top-line">
                                <select class="js-month-select" v-show="false" v-model="selectedMonth">
                                    <option v-for="(month, index) in months" 
                                            :value="index" 
                                            :key="index"
                                    >   
                                        {{month}}
                                    </option>
                                </select>
                                <input type="number" value="" min="0" max="9999" size="4" v-model="activeYear" v-show="false">

                                <h2 class="a-month-title">
                                    {{selectedMonth}}&nbsp;{{activeYear}}
                                </h2>
                                
                                <div class="m-month-navigation">
                                    <button class="a-mount-button prev" @click="getMounth('prev')"><</button>
                                    <button class="a-mount-button next" @click="getMounth('next')">></button>
                                </div>
                            </div>
                            <ul class="m-week-days">
                                <li class="m-week-days__item" v-for="(day, index) in weekDays" :key="index">{{day}}</li>
                            </ul>
                            <div class="m-month-list js-month-days">
                                <li v-for="(day, index) in dayInActiveMonth" 
                                    :key="index"
                                    :class="
                                    [
                                      index == todayDateIndex ? 'today' : '',
                                      index > monthEndDayIndex ? 'next-month-day' : '',
                                      index < monthStartDayIndex ? 'prev-month-day' : ''
                                    ]"
                                >{{day}}
                                </li>
                            </div>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
</template>

<script>
    import ToDoWeek from "../organisms/todo/todo-week.vue";
    import ToDoListItem from "../molecules/todo-list-item.vue";
    export default {
        name: "todo-new",
        data() {
            return {
                months: ["January","February","March","April","May","June","July",
                    "August","September","October","November","December"],
                weekDays: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                selectedMonth:'',
                activeYear: new Date().getFullYear(),
                monthStartDayIndex: "",
                monthEndDayIndex: "",
                todayDateIndex: '',
                dayInActiveMonth: [],
            }
        },
        mounted () {
            this.calendar("month-desk",new Date().getFullYear(),new Date().getMonth());
        },
        methods: {
            
            calendar(id, year, month) {
                let lastDay = new Date(year,month+1,0).getDate(),
                    lastDate = new Date(year,month,lastDay),
                    weekDayLast = lastDate.getDay(),
                    weekDayFirst = new Date(lastDate.getFullYear(),lastDate.getMonth(),1).getDay(),
                    selectedMonth = document.querySelector('#'+id+' option[value="' + lastDate.getMonth() + '"]');

                    this.dayInActiveMonth = [];
                    this.todayDateIndex = null;

                    this.selectedMonth = lastDate.getMonth();
                    this.monthEndDayIndex = '';
                    this.monthStartDayIndex = weekDayFirst - 1;
                    console.log(selectedMonth)
                    console.log(this.selectedMonth)
                
                var lastmonth = 32 - new Date(this.activeYear, selectedMonth.value-1, 32).getDate();
                    if (weekDayFirst != 0) {
                        for(var  i = weekDayFirst; i > 1; i--) {
                           this.dayInActiveMonth.push(lastmonth-i)
                        }
                    }else{
                        for(var  i = 6; i > 0; i--) {
                           this.dayInActiveMonth.push(lastmonth-i)
                        }
                    }
                
                for(var  i = 1; i <= lastDay; i++) {
                    if (i == new Date().getDate() && lastDate.getFullYear() == new Date().getFullYear() && lastDate.getMonth() == new Date().getMonth()) {
                        this.todayDateIndex = i - 1;
                    }
                    this.dayInActiveMonth.push(i)
                }
                this.monthEndDayIndex = this.dayInActiveMonth.length - 1;
                let dayaftermonth = 1;
                 if (weekDayLast != 0) {
                    for(var  i = weekDayLast; i < 8; i++) {
                        if(i > weekDayLast) {
                            this.dayInActiveMonth.push(dayaftermonth)
                            dayaftermonth ++;
                        }
                    }
                }
                this.activeYear = lastDate.getFullYear();
                selectedMonth.selected = true;
            },

            getMounth(direction) {
                let select = document.querySelector('.js-month-select'),
                    monthSelectedIndex = select.selectedIndex,
                    yearValue = document.querySelector('#month-desk input').value;

                if(direction == 'prev') {
                    if (monthSelectedIndex != 0) {
                         select.selectedIndex = monthSelectedIndex - 1
                    } else {
                        select.selectedIndex = 11   ;
                        yearValue = Number(yearValue) - 1;
                    }
                } else if (direction == 'next') {
                    if (monthSelectedIndex != 11) {
                        select.selectedIndex = monthSelectedIndex + 1 
                    } else {
                        select.selectedIndex = 0;
                        yearValue = Number(yearValue) + 1
                    }
                }
                this.activeYear = yearValue;
                this.calendar("month-desk", yearValue, parseFloat(document.querySelector('#month-desk select').options[document.querySelector('#month-desk select').selectedIndex].value));
            }
        },
        computed: {
        },
        components: {
            "o-todo-week": ToDoWeek,
            "m-list-item": ToDoListItem
        }
    }
</script>


<style lang="scss" scoped>
    .o-todo-wrapper {
        width: 100%;
        min-height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        background-attachment: fixed;
        margin: 40px auto;
        h1 {
            font-family: 'Courgette', cursive;
        }
    }
    .a-month-title {
        font-family: 'Courgette', cursive;
        text-align: start;
    }
    .a-todo-title {
        text-align: center;
        font-size: 40px;
    }
    .m-calendar-top-line {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 40px 0;
    }
    .a-mount-button {
        position: relative;
        color: transparent;
        width: 40px;
        height: 40px;
        background: #ffffff;
        border-radius: 50%;
        border: none;
        margin: 0 5px;
        box-shadow: none;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        transition: background .2s ease;
        &:after {
            content: "";
            position: absolute;
            width: 15px;
            height: 15px;
            border-bottom: 3px solid #228b22;
            border-left: 3px solid #228b22;
            transform: rotate(45deg);
            transition: border-color .2s ease;
        }
        &.prev:after {
            top: 12px;
            left: 16px;
            transform: rotate(45deg)
        }
        &.next:after {
            top: 12px;
            right: 14px;
            transform: rotate(-135deg)
        }
        &:hover {
            background: #228b22;
            &:after {
                border-color: #ffffff;
            }
        }
    }
    .m-week-days {
        display: flex;
        justify-content: space-between;
        &__item {
            flex: 1;
            list-style: none;
            text-align: center;
        }
    }
</style>
