<template>
  <div>
      <ul>
          <li class="a-priority-item" 
            v-for="(item, index) in priorities" 
            :key="'Priority'+index"
            @click="choisePriority(item, index)">

            <span class="a-priority-flag">
                <svg data-name="Layer 2" id="Layer_2" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                    <path :fill="item.color" d="M3.2,34.75A1.25,1.25,0,0,1,2,33.5V2.32a1.25,1.25,0,0,1,2.5,0V33.5A1.25,1.25,0,0,1,3.2,34.75Z"/>
                    <path :fill="item.color" d="M27.05,27.94c-2.91,0-5.91-.55-7.28-3.84-.83-2-9.14-2.24-16.39-1.24A1.25,1.25,0,0,1,3,20.38c4-.55,17.07-2,19,2.76,1,2.36,3.34,2.41,7.11,2.22l1.36-.05V8.3l-1.21.06c-3.83.23-7.79.46-9.57-3.8-.82-2-9.14-2.24-16.39-1.25A1.25,1.25,0,1,1,3,.84c4-.55,17.07-2,19,2.76,1,2.51,3.16,2.5,7.11,2.27.85,0,1.72-.1,2.59-.11a1.21,1.21,0,0,1,.9.36A1.22,1.22,0,0,1,33,7V26.55a1.25,1.25,0,0,1-.38.89,1.31,1.31,0,0,1-.9.36c-.76,0-1.59,0-2.46.06C28.59,27.9,27.82,27.94,27.05,27.94Z"/>
                </svg>
            </span>
            {{item.name}}
          </li>
      </ul>
  </div>
</template>
<script>

  export default {
    name: 'todo-add-priority',
    props: {
    },
    data: () => ({
        priorities: [
            {
                name: 'Priority 1',
                color: '#F6412D'
            },
            {
                name: 'Priority 2',
                color: '#FF9800'
            },
            {
                name: 'Priority 3',
                color: '#FFEC19'
            },
            {
                name: 'Priority 4',
                color: '#cecece'
            }
        ]

    }),
    mounted:function(){
        
    },
    methods: {
        choisePriority(item, index) {
            this.$emit('choisePriority', item.color, index)
        }
    }
  };
</script>
<style scoped lang="scss">
   .a-priority-item {
       display: flex;
       align-items: center;
       justify-content: center;
       list-style-type: none;
       font-size: 16px;
       padding: 5px;
       cursor: pointer;
       span {
           display: block;
           width: 20px;
           margin-right: 5px;
           flex-shrink: 0;
            svg {
                max-width: 100%;
            }
       }
   }
   
</style>
