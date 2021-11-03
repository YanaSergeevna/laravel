<template>
        <div class="container">
            <h1>Альбом №{{currentPage}}</h1>
            <album-select 
                :currentPage="currentPage"
                v-on:update:currentPage="currentPage = $event"
            ></album-select>
            <div class="gallery" id="gallery">
                <spin v-if="loading" class="black"></spin>
                <image-item class="image"
                    v-for="image in images" 
                    :key="image.id"
                    :thumbnailUrl="image.thumbnailUrl"
                    :url="image.url"
                    :title="image.title"
                ></image-item>
            </div>
        </div>
</template>

<script>
import spin from "../components/Spin.vue";
import imageItem from "../components/Image.vue";
import albumSelect from "../components/albumSelect.vue";
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
            imageItem,
            albumSelect,
            spin
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


<style scoped>
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
</style>
