<template>
    <div class="container products-header">
        <h2>Refurbished</h2>
        <h3>ProductsSort here...</h3>
    </div>
    <div class="container" v-if="products">
        <ProductsGrid :products="products" />
    </div>
</template>

<script setup>
import useApi from "@/composables/useApi.js";
import ProductsGrid from "@/components/ProductsGrid";

// Fetch the initial products
const { response: products } = await useApi("/products");

</script>

<style scoped>
.products-header {
    margin-bottom: var(--sections-spacing-mobile);
}

@media (min-width: 768px) {
    .products-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
