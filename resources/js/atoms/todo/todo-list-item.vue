<template>
  <li @click="createElem()">
      <div class="list-item-header" >
        <div class="list-item-header__today" v-if="hasToday && index == 0">
          Today
        </div>
        <div class="list-item-header__day" v-else>
          {{weekDays[day.weekDay]}}<span class="date">{{day.day}}.{{selectedMonth + 1}}</span>
        </div>
      </div>
      <ul>
        <a-create-todo-elem v-if="createItemShow"
          :createItemShow="createItemShow"
          @added-value="addedValue"
        />
        <a-todo-elem 
            v-for="(task, index) in tasks"
            :key="'task'-index"
            :task="task"
        ></a-todo-elem>
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
        index: {
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
        createItemShow: false
    }),
    mounted:function(){
    },
    methods: {
      createElem() {
        this.createItemShow = true;
      },
      addedValue(value) {
        this.tasks.push(value)
        console.log(this.tasks)
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
        &:hover {
          &:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            background: url("/images/plus.svg") center/cover;
          }
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
</style>
