<template>
        <div>
            <div  @click="openBigImage"><img :src="thumbnailUrl" :alt="title"></div>
            <div v-if="bigImage" class="popupImage" @click="closePopup">
                <div class="close"></div>
                <img :src="url" :alt="title" @click.stop.prevent>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'image',
        props: {
            thumbnailUrl: {
                type: String,
                default: "#"
            },
            url: {
                type: String,
                default: "#"
            },
            title: {
                type: String,
                default: "#"
            }
        },
        data() {
            return {
                bigImage: false,
            }
        },
        mounted() {
        },
        methods: {
            openBigImage() {
                this.bigImage = true;
            },
            closePopup() {
                this.bigImage = false;
            }
        }
    }
</script>


<style scoped>
    .popupImage {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        z-index: 10;
        background-color: #00000050;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
