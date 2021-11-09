<template>
        <div class="o-todo-wrapper" style="background-image: url(./images/bg.png)">
            <div class="container">
                <o-todo-week />
                <h1 class="a-todo-title">Weekly planner</h1>
                <div class="look-calendar">
                    <div class="tg-wrap">
                        <div id="month-desk" class="tg">

                            <div class="tg-s6z2" colspan="4">
                                <select class="js-month-select" @change="changeMouth($event)" v-show="false">
                                    <option v-for="(month, index) in months" 
                                            :value="index" 
                                            :key="index"
                                    >   
                                        {{month}}
                                    </option>
                                </select>
                                <input type="number" value="" min="0" max="9999" size="4" v-model="activeYear">

                                <h2 class="a-month-title">
                                    {{selectedMonth}}&nbsp;{{activeYear}}
                                </h2>
                                
                                <div class="m-month-navigation">
                                    <button class="a-mount-button__prev" @click="getMounth('prev')"><</button>
                                    <button class="a-mount-button__next" @click="getMounth('next')">></button>
                                </div>
                            </div>
                            <div class="m-month-list js-month-days"></div>
                        </div>
                    </div>
                    
                </div>
                                
            </div>
        </div>
</template>

<script>
    import ToDoWeek from "../organisms/todo/todo-week.vue";
    export default {
        name: "todo-new",
        data() {
            return {
                months: ["January","February","March","April","May","June","July",
                    "August","September","October","November","December"],
                selectedMonth:'',
                activeYear: new Date().getFullYear()
            }
        },
        mounted () {
            this.Calendar3("month-desk",new Date().getFullYear(),new Date().getMonth());
        },
        methods: {
            Calendar3(id, year, month) {
                let lastDay = new Date(year,month+1,0).getDate(),
                    lastDate = new Date(year,month,lastDay),
                    weekDayLast = lastDate.getDay(),
                    weekDayFirst = new Date(lastDate.getFullYear(),lastDate.getMonth(),1).getDay(),
                    calendar = '<div>',
                    selectedMonth = document.querySelector('#'+id+' option[value="' + lastDate.getMonth() + '"]'),
                    g = document.querySelector('#'+id+' input');
                    this.selectedMonth = selectedMonth.textContent;
                    console.log(calendar)
                    console.log(g)
                
                var lastmonth = 32 - new Date(g.value, selectedMonth.value-1, 32).getDate();
                    if (weekDayFirst != 0) {
                        for(var  i = weekDayFirst; i > 1; i--) calendar += '<div style="color: Gray">' + (lastmonth-i);
                    }else{
                        for(var  i = 6; i > 0; i--) calendar += '<div style="color: Gray">' + (lastmonth-i);
                    }
                
                for(var  i = 1; i <= lastDay; i++) {
                    if (i == new Date().getDate() && lastDate.getFullYear() == new Date().getFullYear() && lastDate.getMonth() == new Date().getMonth()) {
                        calendar += '<div class="today">' + i;
                    } else {
                        calendar += '<div>' + i;
                    }
                    if (new Date(lastDate.getFullYear(),lastDate.getMonth(),i).getDay() == 0) {
                        calendar += '<div>';
                    }
                }
                
                var dayaftermonth = 1;
                            for(var  i = weekDayLast; i < 8; i++) {
                            if(i > weekDayLast) {
                                calendar += '<div style="color: Gray">' + dayaftermonth;
                                dayaftermonth ++;
                            }
                            }
                        
                document.querySelector('#'+id+' .js-month-days').innerHTML = calendar;
                g.value = lastDate.getFullYear();
                selectedMonth.selected = true;
                if (document.querySelectorAll('#'+id+' .js-month-days div').length < 6) {
                    document.querySelector('#'+id+' .js-month-days').innerHTML += '<div><div>&nbsp;<div>&nbsp;<div>&nbsp;<div>&nbsp;<div>&nbsp;<div>&nbsp;<div>&nbsp;';
                }
                document.querySelector('#'+id+' option[value="' + new Date().getMonth() + '"]').style.color = 'rgb(230, 33, 33)'; // в выпадающем списке выделен текущий месяц
            },
            changeMouth (event) {
                let inputValue = document.querySelector('#month-desk input').value;
                console.log(inputValue)
                if(event.target.selectedIndex == 1) {
                    console.log(11111)
                    inputValue = inputValue - 1
                } else if(event.target.selectedIndex == 11) {
                    console.log(222222)
                    inputValue = inputValue + 1
                }
                console.log(33333)
                this.Calendar3("month-desk", inputValue, parseFloat(document.querySelector('#month-desk select').options[document.querySelector('#month-desk select').selectedIndex].value));
            },
            getMounth(direction) {
                let select = document.querySelector('.js-month-select'),
                    monthSelectedIndex = select.selectedIndex;

                if(direction == 'prev') {
                    monthSelectedIndex != 0 ? select.selectedIndex = monthSelectedIndex - 1 : select.selectedIndex = 11;
                } else if (direction == 'next') {
                    monthSelectedIndex != 11 ? select.selectedIndex = monthSelectedIndex + 1 : select.selectedIndex = 0;
                }
                select.dispatchEvent(new Event('change'))
            }
        },
        computed: {
        },
        components: {
            "o-todo-week": ToDoWeek
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
    .tg td {font-family:Arial,sans-serif;font-size:14px;padding:5px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#f0f0f0;color:#333;background-color:#fff;}
    .tg th {font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:5px 10px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#f0f0f0;color:#333;background-color:#f0f0f0;}
    .tg .tg-s6z2 {text-align: center;}
    
    .tg-wrap {
        float:none;
        position:relative;
        padding: 3px;
    }
 
    @media screen and (max-width: 767px) {
        .tg {width: auto !important;}
        .tg col {width: auto !important;}
        .tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch; margin: auto 0px;}
    }
 
    #calendar3 thead tr:last-child, #calendar3 tbody td   {text-align: center;}
 
        #calendar3 thead tr:last-child {
            font-size: small;
            color: rgb(85, 85, 85);
        }
        #calendar3 tbody td {
            color: rgb(44, 86, 122);
        }
        #calendar3 tbody td:nth-child(n+6), #calendar3 .holiday {
            color: rgb(126, 13, 1);
        }
        #calendar3 tbody td.today {
            outline: 3px solid red;
        }
    
    th.tg-s6z2:nth-child(1) > select:nth-child(1) {
        padding-left: 15px;
        height: 30px;
        border-radius: 3px;
    }
</style>
