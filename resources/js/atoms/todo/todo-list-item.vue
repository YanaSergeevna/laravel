<template>
  <li @click.self="createElem()" :class="{ active: createItemShow }">
      <div class="list-item-header" >
        <div class="list-item-header__today" v-if="hasToday && indexDay == 0">
          Today
        </div>
        <div class="list-item-header__day" v-else>
          {{weekDays[day.weekDay]}}<span class="date">{{day.day}}.{{selectedMonth + 1}}</span>
        </div>
      </div>
      <ul>
        <transition name="fade" 
        v-for="(task, index) in tasks" 
        :key="'task'+index"
        :delay="500" >
        <a-todo-elem 
              :task="task"
              :index="index"
              @changeTask="changeTask"
              @removeItem="removeItem"
              v-show="elemShow"
        ></a-todo-elem>
        </transition>
        <a-create-todo-elem v-if="createItemShow"
          @added-value="addedValue"
          :indexDay="indexDay"
          @createItemShow="blurElem"
          :class="[
            createItemFocus ? 'active' : ''
          ]"
        />
      </ul>
  </li>
</template>
<script>
  import ToDoElem from "./todo-elem.vue";
  import CreateTodoElem from "./create-todo-elem.vue";

  export default {
    name: 'todo-list-item',
    props: {
        day: {
          type: Object
        },
        hasToday: {
          type: Boolean
        },
        indexDay: {
          type: Number
        },
        selectedMonth: {
          type: Number
        },
        selectedMonth: {
          type: Number
        }
    },
    data: () => ({
        weekDays: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        tasks: [],
        createItemShow: false,
        createItemFocus: false,
        resolved: []
    }),
    mounted:function(){
    },
    methods: {
      createElem() {
        this.createItemShow = true;
      },
      addedValue(value) {
        if(value != "") {
          this.tasks.push(value)
        }
        if(this.tasks.length > 0) {
          this.createItemFocus = true
        } else {
          this.createItemFocus = false
        }
      },
      blurElem() {
        this.createItemShow = false;
      },
      changeTask(value, index) {
        this.tasks[index] = value
      },
      removeItem() {
        console.log(11111)
      }
    },
    components: {
      'a-todo-elem': ToDoElem,
      'a-create-todo-elem': CreateTodoElem
    }
  };
</script>
<style scoped lang="scss">
    .m-day-item {
        position: relative;
        padding: 10px;
        list-style-type: none;
        &:after {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          width: 2px;
          height: 90%;
          background: rgb(255,255,255);
          background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(244,188,159,1) 20%, rgba(244,188,159,1) 80%, rgba(255,255,255,1) 100%);
          transform: translate(0, -50%);
        }
    }
    .list-item-header {
      text-align: center;
      font-weight: 700;
      &__day {
        display: flex;
        justify-content: center;
        .date {
          position: absolute;
          top: 0;
          right: 10px;
          font-size: 14px;
          color: #F4BC9F;
          &:after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #F4BC9F;
          }
        } 
      }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }  
</style>
