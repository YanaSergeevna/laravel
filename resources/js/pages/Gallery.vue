<template>
        <div class="container">
            <h1>Альбом №{{currentPage}}</h1>
            <m-select
                :currentPage="currentPage"
                v-on:update:currentPage="currentPage = $event"
            ></m-select>
            <div class="gallery" id="gallery">
                <a-spin v-if="loading" class="black"></a-spin>
                <m-image class="image"
                    v-for="image in images" 
                    :key="image.id"
                    :thumbnailUrl="image.thumbnailUrl"
                    :url="image.url"
                    :title="image.title"
                ></m-image>
            </div>
        </div>
</template>

<script>
import spin from "../atoms/spin.vue";
import image from "../molecules/Gallery/image.vue";
import select from "../molecules/Gallery/select.vue";
import axios from 'axios';
    export default {
        name: 'gallery',
        data() {
            return {
                images: [],
                currentPage: 1,
                loading: false
            }
        },
        mounted() {
        },
        methods: {
            getInitImages() {
                this.loading = true;
                axios.get('https://jsonplaceholder.typicode.com/photos/?albumId=1').
                    then( response => { 
                    this.images = response.data;
                    this.loading = false;
                })
            },
            /*Ajax load*/
            // getNextImages() {
            //     window.onscroll = () => {
            //         let album = this.album + 1;
            //         let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
            //         if (bottomOfWindow) {
            //             axios.get(`https://jsonplaceholder.typicode.com/photos/?albumId=`+101).then(response => {
            //                 if(response.data.length > 0) {
            //                     this.images = this.images.concat(response.data);
            //                 }
            //             })
            //         }
            //     }
            // }
        },
        components: {
            "m-image": image,
            "m-select": select, 
            "a-spin": spin 
        },
        beforeMount() {
            this.getInitImages();
        },
        watch: {
            currentPage: function (val) {
                this.loading = true;
                axios.get(`https://jsonplaceholder.typicode.com/photos/?albumId=`+val).then(response => {
                    this.images = response.data;
                    this.loading = false
                })

            },
        }
    }
</script>


<style scoped lang="scss">
    .gallery {
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        min-height: 100vh;
    }
    .image {
        margin-bottom: 10px;
    }
    body {
        .container {
            background-color: orange;
        }
    }
</style>
