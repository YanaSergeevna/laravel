<template>
        <div class="container">
            <h1>{{ title }}</h1>
            <p>{{ sale }}</p>
            <div class="img">
                <img :src="image" />
            </div>
            
            <div class="colorPicker" v-for="(variant, index) in variants" 
                                        :key="variant.variantId"  
                                        :style="{ backgroundColor:variant.variantColor }"
                                        @click="updateProduct(index); ">
            </div>
            <div><span>Quantity </span>{{  inStock }}</div>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of stock</p>
            <div class="variables">
                <ul>
                    <li v-for="(variant, index) in variants" :value="variant.variantId" 
                        :key="variant.variantId" 
                        @mouseover="updateProduct(index)">
                        {{ variant.variantColor }}
                    </li>
                </ul>
            </div>
            <div class="cart">
                <p>Cart({{ cart }})</p>
                <button class="btn" :disabled="!inStock"
                :class="{ disabledButton: !inStock }"
                @click="addToCart()" >Add to cart</button>
            </div>
        </div> 
</template>

<script>
    export default {
        data() {
            return {
               product: "Socks",
               onSale: true,
               brand: 'H&M',
               selectedVariant: 0,
               cart: 0,
               variants: [
                    {
                        variantId: 1111,
                        variantColor: "blue",
                        variantImage:"./images/blue.jpg",
                        variantQuantity: 10
                    },
                    {
                        variantId: 2222,
                        variantColor: "white",
                        variantImage:"./images/white.jpg",
                        variantQuantity: 20
                    },
                    {
                        variantId: 3333,
                        variantColor: "green",
                        variantImage:"./images/green.jpg",
                        variantQuantity: 0
                    }
                ]
               
            }
        },
        methods: {
            updateProduct(index) {
                this.selectedVariant = index;
            },
            addToCart(){
                this.variants[this.selectedVariant].variantQuantity -= 1;
                this.cart += 1
            }
        },
        computed: {
            title() {
                return this.brand + ' ' + this.product;
            },
            image() {
                return this.variants[this.selectedVariant].variantImage;
            },
            inStock() {
                return this.variants[this.selectedVariant].variantQuantity;
            },
            sale() {
                if (this.onSale) {
                    return this.brand + ' ' + this.product + ' are on sale!'
                } 
                    return  this.brand + ' ' + this.product + ' are not on sale'
            }
        }

    }
</script>


<style scoped>
    ul {
        display: inline-flex;
        flex-direction: column;
    }
    li {
        cursor: pointer;
    }

    .colorPicker {
        display: inline-block;
        margin: 10px;
        border: 1px solid black;
        width: 50px;
        height: 50px;
    }

</style>
