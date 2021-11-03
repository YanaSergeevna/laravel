<template>
        <div>
            <div class="select-box" v-if="perPage > 1">
                <div @click="getAlbumNumber">Выберите альбом</div>
                <ul v-if="openSelect">
                    <li v-for="i in perPage" :key="i" @click="activeAlbum(i)">
                        Album №{{i}}
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'pagination',
        props: {
            currentPage: {
                type: Number,
                default: 1
            }   
        },
        data() {
            return {
                perPage: "",
                openSelect: false 
            }
        },
        mounted() {
            this.createPagination()
        },
        methods: {
            createPagination() {
                axios.get(`https://jsonplaceholder.typicode.com/albums`).then(response => {
                    this.perPage = response.data.length;
                })
                
            },
            getAlbumNumber() {
                this.openSelect = true;
            },
            activeAlbum(i) {
                this.openSelect = false;
                let activeValue = i;
                this.$emit('update:currentPage', activeValue)
            }
        }
    }
</script>


<style scoped>
.select-box {
    position: relative;
}
.select-box > div {
    cursor: pointer;
}
.select-box ul {
    position: absolute;
    top: 100%;
    left: 0;
    background: #ffffff;
    width: 100%;
    max-height: 300px;
    overflow-y: auto;
    z-index: 5;
}
.select-box ul li {
    cursor: pointer;
}
</style>
